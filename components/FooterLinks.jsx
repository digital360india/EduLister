import Link from "next/link";

const cityColumns = [
  ["Dehradun", "Mussoorie", "Shimla", "Nainital"],
  ["Bangalore", "India", "Pune", "Panchgani"],
  ["Hyderabad", "Jaipur"],
];

const citySlug = (city) => city.toLowerCase().replace(/\s+/g, "-");

export function FooterLinks() {
  return (
    <div className="border-t border-border/60 bg-secondary text-foreground px-6 md:px-12 lg:px-20">
      <div className="container-page py-12">
        <h3 className="text-center font-display text-2xl md:text-3xl underline underline-offset-8 decoration-gold decoration-2">
          Explore top Cities
        </h3>

        <div className="mt-8 flex flex-col gap-6 text-sm sm:flex-row sm:justify-between pb-4">
          {cityColumns.map((column, i) => (
            <div key={i} className="flex flex-col gap-2 sm:items-center">
              {column.map((city) => (
                <Link
                  key={city}
                  href={`https://www.edulister.com/category/boarding-schools-in-${citySlug(
                    city,
                  )}`}
                  className="hover:text-primary"
                >
                  Boarding Schools in {city}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-border/60">
          <div className="container-page py-8">
            <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-muted-foreground">
              EduLister is a school discovery and comparison platform.
              Information on this website may change and should be independently
              verified with the relevant school. Listings, rankings, ratings and
              recommendations do not constitute a guarantee, endorsement or
              assurance of admission. Commercial relationships, where
              applicable, do not necessarily indicate endorsement.
            </p>
          </div>
        </div>

        <div className="border-t border-border/60">
          <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} Edulister. All rights reserved.</p>
            <p>Discover. Compare. Choose Better.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
