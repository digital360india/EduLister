"use server";

import { base } from "@/app/api/airtable.jsx";

const LEADS_TABLE = "leads"; // adjust to your actual table name

export async function submitLead(data) {
  await base(LEADS_TABLE).create([
    {
      fields: {
        source: data.source,
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        school_id: data.school_id,
      },
    },
  ]);
}