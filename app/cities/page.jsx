// app/states/page.jsx
import Link from "next/link";
// import { listStates } from "@/lib/schools.functions";
// import { itemListLd } from "@/lib/seo";

// export async function generateMetadata() {
//   return {
//     title: "Boarding schools by Indian state & city — EduLister",
//     description:
//       "Discover top boarding schools in every Indian state and city — Uttarakhand, Rajasthan, Kerala, Maharashtra and more.",
//     alternates: {
//       canonical: "/states",
//     },
//   };
// }

const cities = [
  {
    name: "india",
    label: "India",
    bannerSrc: "/indiaschool1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "mussoorie",
    label: "Mussoorie",
    bannerSrc: "/mussorie1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "dehradun",
    label: "Dehradun",
    bannerSrc: "/dehradun1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "bangalore",
    label: "Bangalore",
    bannerSrc: "/banglore1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "shimla",
    label: "Shimla",
    bannerSrc: "/shimla1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "hyderabad",
    label: "Hyderabad",
    bannerSrc: "/indiaschool1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "nainital",
    label: "Nainital",
    bannerSrc: "/mussorie1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "panchgani",
    label: "Panchgani",
    bannerSrc: "/dehradun1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "pune",
    label: "Pune",
    bannerSrc: "/banglore1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "jaipur",
    label: "Jaipur",
    bannerSrc: "/shimla1.svg",
    bottomSrc: "/locationbottom.svg",
  },
];

export default async function StatesPage() {
//   const states = await listStates();

//   const jsonLd = states?.length
//     ? itemListLd({
//         name: "Indian states with boarding schools",
//         path: "/states",
//         items: states.map((s) => ({
//           name: s.state,
//           path: `/states/${s.state}`,
//         })),
//       })
//     : null;

  return (
    <div className="container-page py-12 px-6 md:px-8 lg:px-10 mt-20">
      {/* {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )} */}

      <p className="text-xs uppercase tracking-wider text-gold">By state</p>
      <h1 className="mt-2 font-display text-4xl md:text-5xl">
        Every state, every option
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        India's boarding schools cluster around hill stations, heritage cities,
        and coastal towns. Pick a state to see the shortlist we've built.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cities.map((s) => (
          <Link
            key={s.name}
            href={`/category/boarding-schools-in-${s.name}`}
            className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
          >
            <p className="font-display text-xl group-hover:text-primary">
              {s.label}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {s.count} school{s.count !== 1 && "s"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
