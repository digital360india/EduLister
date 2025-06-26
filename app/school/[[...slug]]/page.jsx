import SchoolDetails from "@/components/SchoolDetails";
import { base, baseRe } from "@/app/api/airtable";

let id;

async function get(params) {
  const schoolData = await base(params[0])
    .select({
      filterByFormula: `slug= "${params[1]}"`,
    })
    .all()
    .then((value) => {
      id = value[0]?.id;
      return value[0]?.fields;
    });
  return schoolData;
}

async function get1(params) {
  const review = await baseRe(params[0] + "-reviews")
    .select({
      filterByFormula: `schoolSlug= "${params[1]}"`,
    })
    .all()
    .then((value) => {
      return value.map((a) => a?.fields);
    });
  return review;
}

export async function generateMetadata({ params }) {
  const categoryData = await get(params.slug);
  const imageCode = categoryData.Image_Code;
  const sheetName = categoryData.sheetName;
  
  return {
    title: `${categoryData?.name} | Admissions 2025-26`,
    description: categoryData?.Meta_description,
    keywords: categoryData?.Meta_keywords,
    alternates: {
      canonical: `https://www.edulister.com/school/${params.slug[0]}/${params.slug[1]}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "standard",
    },
    openGraph: {
      title: "Find the Best Boarding Schools in Seconds | Edulister",
      description: "Find your dream boarding school in seconds with Edulister. Unlock a world of educational possibilities. Your path to the perfect education begins here.",
      url: "https://www.edulister.com/",
      images: [
        `https://res.cloudinary.com/infoedu123/image/upload/v1703243169/EDU123/edu123HomeD.png`,
      ],
      siteName: "edulister",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      site: "@edulister",
      title: "Find the Best Boarding Schools in Seconds | Edulister",
      description: "Find your dream boarding school in seconds with Edulister. Unlock a world of educational possibilities. Your path to the perfect education begins here.",
      image: "https://res.cloudinary.com/infoedu123/image/upload/v1703243169/EDU123/edu123HomeD.png",
    },
    structuredData: [
      {
        "@context": "http://schema.org",
        "@type": "WebPage",
        url: `https://www.edulister.com/school/${sheetName}/${categoryData.slug}`,
        name: categoryData.name,
        description: categoryData.Meta_description,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "edulister",
            item: "https://www.edulister.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: categoryData.Town,
            item: `https://www.edulister.com/category/boarding-schools-in-${sheetName}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            url: `https://www.edulister.com/school/${sheetName}/${categoryData.slug}`,
            name: categoryData.name,
          },
        ],
      },
      {
        "@context": "http://schema.org/",
        "@type": "School",
        name: categoryData.name,
        description: categoryData.Meta_description,
        url: `https://www.edulister.com/school/${sheetName}/${categoryData.slug}`,
        image: [
          `https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${sheetName}/G-${imageCode}.png`,
          `https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${sheetName}/H-${imageCode}.png`,
          `https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${sheetName}/I-${imageCode}.png`,
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: categoryData.Town,
          addressRegion: categoryData.State,
          postalCode: categoryData.pincode,
          streetAddress: `${categoryData.Address} ${categoryData.Street}`,
          addressCountry: "IN",
        },
      },
    ],
  };
}



export default async function SchoolPage({ params }) {
  const schoolData = await get(params.slug);
  const review = await get1(params.slug);

  return (
    <div>
      <SchoolDetails
        school={schoolData}
        reviews={review.map((r, index) => ({ ...r, key: index }))}
        city={params.slug[0]}
        id={id}
      />
    </div>
  );
}
