import { NextRequest, NextResponse } from "next/server";
import { whistleblowerSchema } from "@/lib/validation";
import { sendEmail, whistleblowerEmail } from "@/lib/email";
import { company } from "@/data/company";

/**
 * Bewusst schlank gehalten: keine IP- oder Metadaten-Protokollierung, damit
 * eine anonyme Meldung tatsächlich anonym bleiben kann.
 */
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = whistleblowerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validierung fehlgeschlagen", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }
  const input = parsed.data;

  await sendEmail({
    to: company.email,
    ...whistleblowerEmail(input),
  });

  return NextResponse.json({ ok: true });
}
