import { NextResponse } from "next/server";
import axios from "axios";

// Every form sends:
// {
//   name: string (required)
//   phone: string (required)
//   email?: string
//   source?: string
//   meta?: { class?: string, childGrade?: string, preferredState?: string, url?: string }
// }

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, phone, email, source, seekingClass, meta = {} } = body || {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Valid name is required" },
      { status: 400 },
    );
  }
  if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
    return NextResponse.json(
      { error: "Valid phone is required" },
      { status: 400 },
    );
  }

  const url = meta.url || req.headers.get("referer") || "";
const classValue = meta.class || meta.childGrade || "";

const lmsPayload = {
  name,
  phoneNumber: phone,
  date: new Date().toISOString(),
  source: source || "unknown",
  seekingClass: classValue || "unknown"
};
if (email) lmsPayload.email = email;
if (url) lmsPayload.url = url;
if (source) lmsPayload.source = source;
if (classValue) lmsPayload.seekingClass = classValue;
if (meta.location) lmsPayload.location = meta.location;
if (meta.budget) lmsPayload.budget = meta.budget;
if (Array.isArray(meta.boards) && meta.boards.length) lmsPayload.board = meta.boards.join(", ");
if (meta.notes) lmsPayload.remark = meta.notes;
if (meta.school) lmsPayload.school = meta.school;

  try {
    const lmsResponse = await axios.post(
      "https://digitalleadmanagement.vercel.app/api/add-lead",
      lmsPayload,
    );

    if (lmsResponse.status !== 200) {
      console.error(
        "LMS submission returned non-200:",
        lmsResponse.status,
        lmsResponse.data,
      );
      return NextResponse.json(
        { error: "Lead submission failed" },
        { status: 502 },
      );
    }
  } catch (err) {
    // Axios throws for non-2xx by default — log the actual response body, not just the error object
    console.error("LMS submission failed:", err?.response?.data || err.message);
    return NextResponse.json(
      { error: "Lead submission failed", detail: err?.response?.data?.message },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
