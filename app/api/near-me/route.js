import { NextResponse } from "next/server";
import { base } from "@/app/api/airtable.jsx";
import { CITY_STATE_MAP } from "@/lib/city-coords";

async function getSchools(citySlug) {
  return new Promise((resolve, reject) => {
    const records = [];
    base(citySlug)
      .select({})
      .eachPage(
        (pageRecords, fetchNextPage) => {
          const plain = pageRecords.map((r) => ({
            id: r.id,
            fields: { ...r.fields },
            citySlug,
          }));
          records.push(...plain);
          fetchNextPage();
        },
        (err) => (err ? reject(err) : resolve(records))
      );
  }).catch(() => []);
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const state = searchParams.get("state");

  let citySlugs = [];
  if (city) {
    citySlugs = [city];
  } else if (state) {
    citySlugs = Object.entries(CITY_STATE_MAP)
      .filter(([, s]) => s === state)
      .map(([c]) => c);
  }

  if (citySlugs.length === 0) {
    return NextResponse.json({ records: [] });
  }

  const results = await Promise.all(citySlugs.map((c) => getSchools(c)));
  return NextResponse.json({ records: results.flat() });
}