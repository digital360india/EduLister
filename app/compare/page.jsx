export const dynamic = "force-dynamic";
import { base } from "@/app/api/airtable";
import CompareView from "@/components/site/CompareView";

async function getSchoolsByItems(items) {
  console.log("[compare] fetching items:", items);

  const results = await Promise.all(
    items.map(async ({ location, id }) => {
      try {
        const record = await base(location).find(id);
        const school = { location, id: record.id, ...record.fields };
        console.log(`[compare] fetched from ${location}/${id}:`, school);
        return school;
      } catch (err) {
        console.error(`[compare] failed to fetch ${location}/${id}:`, err.message);
        return null;
      }
    })
  );

  const schools = results.filter(Boolean);
  console.log("[compare] final schools list:", schools);
  return schools;
}

export default async function ComparePage({ searchParams }) {
  const raw = searchParams?.items ?? "";
  console.log("[compare] raw searchParams.items:", raw);

  const items = raw
  .split(",")
  .filter(Boolean)
  .slice(0, 3)
  .map((pair) => {
    const [location, id] = pair.split(":");
    return { location, id };
  })
  .filter((it) => it.location && it.id && it.location !== "undefined");

  console.log("[compare] parsed items:", items);

  const schools = await getSchoolsByItems(items);

  return <CompareView schools={schools} />;
}