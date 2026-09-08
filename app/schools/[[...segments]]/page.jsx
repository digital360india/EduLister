import { base } from "@/app/api/airtable.jsx";
import { SchoolCard } from "@/components/site/SchoolCard";
import { CompareProvider } from "@/components/site/compare-store";

// URL type-segment -> Airtable checkbox field on the school record
const TYPE_FIELD_MAP = {
  "day-boarding-schools": "day_boarding_schools",
  "girls-boarding-schools": "girls_schools",
  "boys-boarding-schools": "boys_schools",
  "coed-boarding-schools": "coed_schools",
  "full-boarding-schools": "full_boarding_schools",
  "icse-boarding-schools": "icse_isc_schools",
  "cbse-boarding-schools": "cbse_schools",
};

function isChecked(v) {
  return v === true || v === "checked" || v === "Checked";
}

function toTitle(slug) {
  return slug.split("-").map((w) => w[0]?.toUpperCase() + w.slice(1)).join(" ");
}

async function getCategoryData(slug) {
  const rows = await base("category 2")
    .select({ filterByFormula: `{slug} = "${slug}"` })
    .all();
  return rows[0]?.fields ?? null;
}
async function getSchools(citySlug) {
  return new Promise((resolve, reject) => {
    const records = [];
    base(citySlug)
      .select({})
      .eachPage(
        (pageRecords, fetchNextPage) => {
          // convert Airtable Record instances to plain, serializable objects
          const plain = pageRecords.map((r) => ({
            id: r.id,
            fields: { ...r.fields },
          }));
          records.push(...plain);
          fetchNextPage();
        },
        (err) => (err ? reject(err) : resolve(records))
      );
  });
}

function parseSegments(segments) {
  const citySlug = segments?.[0] || "india";
  const typeSlug = segments?.[1] || "boarding-schools";
  const categorySlug = `${typeSlug}-in-${citySlug}`;
  return { citySlug, typeSlug, categorySlug };
}

// export async function generateMetadata({ params }) {
//   const { segments } = await params;
//   const { citySlug, categorySlug } = parseSegments(segments);
//   const categoryData = await getCategoryData(categorySlug);

//   return {
//     title: categoryData?.title || `Boarding schools in ${toTitle(citySlug)} | EduLister`,
//     description: categoryData?.meta_description,
//     keywords: categoryData?.keywords,
//     alternates: {
//       canonical: `https://www.edulister.com/schools/${citySlug}${
//         segments?.[1] ? `/${segments[1]}` : ""
//       }`,
//     },
//   };
// }

export default async function SchoolsPage({ params }) {
  const { segments } = await params;
  const { citySlug, typeSlug, categorySlug } = parseSegments(segments);

  const [categoryData, records] = await Promise.all([
    getCategoryData(categorySlug),
    getSchools(citySlug),
  ]);

  const fieldToCheck = TYPE_FIELD_MAP[typeSlug]; // undefined for base "boarding-schools" -> no filter

  let filtered = fieldToCheck
    ? records.filter((r) => isChecked(r.fields?.[fieldToCheck]))
    : records;

  if (categoryData?.filtType) {
    filtered = [...filtered].sort((a, b) => {
      const av = a.fields?.[categoryData.filtType];
      const bv = b.fields?.[categoryData.filtType];
      if (av != null && bv != null) return bv - av;
      if (av != null) return -1;
      if (bv != null) return 1;
      return 0;
    });
  }

  return (
    <CompareProvider>
      <div className="container-page py-12 px-6 md:px-8 mt-20">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-wider text-gold">All schools</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl">
            {categoryData?.title || `${toTitle(typeSlug)} in ${toTitle(citySlug)}`}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {filtered.length} school{filtered.length !== 1 && "s"} found.
          </p>
        </header>

        {filtered.length === 0 ? (
          <p>No schools found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {filtered.map((r) => (
              <SchoolCard key={r.id} data={r} citySlug={citySlug} />
            ))}
          </div>
        )}
      </div>
    </CompareProvider>
  );
}