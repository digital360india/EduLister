import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { base } from "@/app/api/airtable.jsx";
import { SchoolCard } from "@/components/site/SchoolCard";

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

async function getTopFeaturedSchools() {
  const citySlug = "india";
  const categorySlug = "boarding-schools-in-india";

  const [categoryData, records] = await Promise.all([
    getCategoryData(categorySlug),
    getSchools(citySlug),
  ]);

  let sorted = records;
  if (categoryData?.filtType) {
    sorted = [...records].sort((a, b) => {
      const av = a.fields?.[categoryData.filtType];
      const bv = b.fields?.[categoryData.filtType];
      if (av != null && bv != null) return bv - av;
      if (av != null) return -1;
      if (bv != null) return 1;
      return 0;
    });
  }

  return { citySlug, featured: sorted.slice(0, 6) };
}

const TopFeaturedSchools = async () => {
  const { citySlug, featured } = await getTopFeaturedSchools();

  return (
      <section className="container-page py-12 px-6 md:px-8 lg:px-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-gold">Editor's picks</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Top featured schools</h2>
          </div>
          <Link
            href="/schools"
            className="hidden text-sm text-primary hover:underline md:inline-flex items-center gap-1"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        {featured.length === 0 ? (
          <p className="mt-8 text-sm text-muted-foreground">No schools found.</p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((r) => (
              <SchoolCard key={r.id} data={r} citySlug={citySlug} />
            ))}
          </div>
        )}
      </section>
  );
};

export default TopFeaturedSchools;