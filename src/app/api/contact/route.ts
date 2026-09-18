import { NextRequest, NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";
import { sendEmail, inquiryEmail, inquiryConfirmationEmail } from "@/lib/email";
import { finderContactRouting } from "@/data/projectFinder";
import { company } from "@/data/company";

const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB per file, keeps within typical email attachment limits
const MAX_FILES = 5;

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const raw = {
    projectType: String(formData.get("projectType") || ""),
    name: String(formData.get("name") || ""),
    company: String(formData.get("company") || ""),
    phone: String(formData.get("phone") || ""),
    email: String(formData.get("email") || ""),
    location: String(formData.get("location") || ""),
    startDate: String(formData.get("startDate") || ""),
    message: String(formData.get("message") || ""),
    privacyAccepted: formData.get("privacyAccepted") === "true",
    website: String(formData.get("website") || ""),
  };

  const parsed = inquirySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validierung fehlgeschlagen", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }
  const input = parsed.data;

  const files = formData.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > MAX_FILES) {
    return NextResponse.json({ error: `Maximal ${MAX_FILES} Dateien möglich.` }, { status: 422 });
  }
  for (const file of files) {
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: `Datei "${file.name}" ist größer als 8 MB.` }, { status: 422 });
    }
  }

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
    })),
  );

  const routedTo = finderContactRouting[input.projectType] ?? "Zentrale / Sekretariat";

  await Promise.all([
    sendEmail({
      to: company.email,
      ...inquiryEmail({ ...input, routedTo }),
      attachments,
    }),
    sendEmail({
      to: input.email,
      ...inquiryConfirmationEmail({ name: input.name }),
    }),
  ]);

  return NextResponse.json({ ok: true });
}
