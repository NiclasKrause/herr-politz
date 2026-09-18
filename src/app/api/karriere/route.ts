import { NextRequest, NextResponse } from "next/server";
import { applicationSchema } from "@/lib/validation";
import { sendEmail, applicationEmail } from "@/lib/email";
import { company } from "@/data/company";

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const MAX_FILES = 5;

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const raw = {
    jobSlug: String(formData.get("jobSlug") || ""),
    jobTitle: String(formData.get("jobTitle") || ""),
    name: String(formData.get("name") || ""),
    skill: String(formData.get("skill") || ""),
    phone: String(formData.get("phone") || ""),
    email: String(formData.get("email") || ""),
    message: String(formData.get("message") || ""),
    privacyAccepted: formData.get("privacyAccepted") === "true",
    website: String(formData.get("website") || ""),
  };

  const parsed = applicationSchema.safeParse(raw);
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

  await sendEmail({
    to: company.email,
    ...applicationEmail(input),
    attachments,
  });

  return NextResponse.json({ ok: true });
}
