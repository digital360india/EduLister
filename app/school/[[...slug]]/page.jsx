// import SchoolDetails from "@/components/SchoolDetails";
// import { base, baseRe } from "@/app/api/airtable";

// let id;

// async function get(params) {
//   const schoolData = await base(params[0])
//     .select({
//       filterByFormula: `slug= "${params[1]}"`,
//     })
//     .all()
//     .then((value) => {
//       id = value[0]?.id;
//       return value[0]?.fields;
//     });
//   return schoolData;
// }

// async function get1(params) {
//   const review = await baseRe(params[0] + "-reviews")
//     .select({
//       filterByFormula: `schoolSlug= "${params[1]}"`,
//     })
//     .all()
//     .then((value) => {
//       const r = value.map((a) => {
//         return a?.fields;
//         // return { key: a.id, ...a?.fields };
//       });
//       return r;
//     });
//   return review;
// }

// export async function generateMetadata({ params }) {
//   const categoryData = await get(params.slug);

//   return {
//     title: `${categoryData?.name} | Admissions 2024-25`,
//     description: categoryData?.Meta_description,
//     keywords: categoryData?.Meta_keywords,
//     alternates: {
//       canonical: `https://www.edu123.in/school/${params.slug[0]}/${params.slug[1]}`,
//     },

//     robots: {
//       index: true,
//       follow: true,
//       "max-snippet": -1,
//       "max-video-preview": -1,
//       "max-image-preview": "standard",
//       googleBot: {
//         index: true,
//         follow: true,
//       },
//     },
//   };
// }

// export default async function SchoolPage({ params }) {
//   const schoolData = await get(params.slug);
//   const review = await get1(params.slug);

//   return (
//     <>
//       <head>
//         <meta
//           property="website:publisher"
//           content="https://www.facebook.com/people/Edu123/100092405190812/"
//         />
//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:site" content="@Edu123India" />
//         <meta
//           name="twitter:description"
//           content="Find your dream boarding school in seconds with Edu123. Unlock a world of educational possibilities. Your path to the perfect education begins here."
//         />
//         <meta
//           name="twitter:title"
//           content="Find the Best Boarding Schools in Seconds | Edu123"
//         />
//         <meta name="twitter:url" content="https://x.com/edu123india" />
//         <meta
//           name="twitter:image"
//           content="https://res.cloudinary.com/infoedu123/image/upload/v1703243169/EDU123/edu123HomeD.png"
//         />

//         <meta property="og:locale" content="en_US" />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content="Find the Best Boarding Schools in Seconds | Edu123"
//         />
//         <meta
//           property="og:description"
//           content="Find your dream boarding school in seconds with Edu123. Unlock a world of educational possibilities. Your path to the perfect education begins here."
//         />
//         <meta property="og:url" content="https://www.edu123.in/" />
//         <meta property="og:site_name" content="Edu123" />
//         <meta
//           property="og:image"
//           content="https://res.cloudinary.com/infoedu123/image/upload/v1703243169/EDU123/edu123HomeD.png"
//         />

//         <script
//           defer={true}
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "http://schema.org",
//               "@type": "WebPage",
//               url: `https://www.edu123.in/school/${schoolData.sheetName}/${schoolData.slug}`,
//               name: schoolData.name,
//               description: schoolData.Meta_description,
//             }),
//           }}
//         />
//         <script
//           defer={true}
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "BreadcrumbList",
//               itemListElement: [
//                 {
//                   "@type": "ListItem",
//                   position: 1,
//                   name: "Edu123",
//                   item: "https://www.edu123.in",
//                 },
//                 {
//                   "@type": "ListItem",
//                   position: 2,
//                   name: schoolData.Town,
//                   item: `https://www.edu123.in/category/boarding-schools-in-${schoolData.sheetName}`,
//                 },
//                 {
//                   "@type": "ListItem",
//                   position: 3,
//                   url: `https://www.edu123.in/school/${schoolData.sheetName}/${schoolData.slug}`,
//                   name: schoolData.name,
//                 },
//               ],
//             }),
//           }}
//         />
//         <script
//           defer={true}
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "http://schema.org/",
//               "@type": "School",
//               name: schoolData.name,
//               description: schoolData.Meta_Description,
//               url: `https://www.edu123.in/school/${schoolData.sheetName}/${schoolData.slug}`,
//               image: [
//                 "https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/" +
//                   schoolData.sheetName +
//                   "/" +
//                   "G-" +
//                   schoolData.Image_Code +
//                   ".png",
//                 "https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/" +
//                   schoolData.sheetName +
//                   "/" +
//                   "H-" +
//                   schoolData.Image_Code +
//                   ".png",
//                 "https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/" +
//                   schoolData.sheetName +
//                   "/" +
//                   "I-" +
//                   schoolData.Image_Code +
//                   ".png",
//               ],
//               openingHours: "mon, tue, wed, thr, fri, sat",
//               foundingDate: schoolData.establishment,
//               additionalProperty: [
//                 {
//                   "@type": "PropertyValue",
//                   name: "Yearly Fees",
//                   value: `₹ ${schoolData.feefrom} - ₹ ${schoolData.feeto} (Yearly)`,
//                 },
//                 {
//                   "@type": "PropertyValue",
//                   name: "School Board",
//                   value: `${schoolData.icse_isc_schools ? "ICSE" : "CBSE"}
//           ${schoolData.ib_schools ? ", IB" : ""}
//         ${schoolData.igcse_schools ? ", IGCSE" : ""}
//           ${schoolData.cie_schools ? ", CIE" : ""}`,
//                 },
//                 {
//                   "@type": "PropertyValue",
//                   name: "admission date",
//                   value: `${schoolData.admissionstart} to ${schoolData.admissionend}`,
//                 },
//                 {
//                   "@type": "PropertyValue",
//                   name: "primary medium of instruction",
//                   value: schoolData.Medium,
//                 },
//               ],
//               address: {
//                 "@type": "PostalAddress",
//                 addressLocality: schoolData.Town,
//                 addressRegion: schoolData.State,
//                 postalCode: schoolData.pincode,
//                 streetAddress: schoolData.Address + schoolData.Street,
//                 addressCountry: "IN",
//               },
//               geo: {
//                 "@type": "GeoCoordinates",
//                 latitude: schoolData.Latitude,
//                 longitude: schoolData.Longitude,
//               },
//               branchCode: schoolData.pincode,
//               employee: [
//                 {
//                   "@type": "Person",
//                   name: schoolData.principal,
//                   jobTitle: "Principal",
//                   worksFor: {
//                     "@type": "Organization",
//                     name: schoolData.name,
//                   },
//                 },
//                 {
//                   "@type": "Person",
//                   name: schoolData.chairman,
//                   jobTitle: "Chairman",
//                   worksFor: {
//                     "@type": "Organization",
//                     name: schoolData.name,
//                   },
//                 },
//               ],
//               smokingAllowed: false,
//               amenityFeature: [
//                 {
//                   "@type": "LocationFeatureSpecification",
//                   name: "SmartClasses",
//                   value: schoolData.Smart_Classes ? "true" : "false",
//                 },
//                 {
//                   "@type": "LocationFeatureSpecification",
//                   name: "Online Classes",
//                   value: schoolData.Online_Classes ? "true" : "false",
//                 },
//                 {
//                   "@type": "LocationFeatureSpecification",
//                   name: "Robotics Lab",
//                   value: schoolData.Smart_Classes ? "true" : "false",
//                 },
//                 {
//                   "@type": "LocationFeatureSpecification",
//                   name: "Photography",
//                   value: schoolData.Robotics_Lab ? "true" : "false",
//                 },
//                 {
//                   "@type": "LocationFeatureSpecification",
//                   name: "Badminton Court",
//                   value: schoolData.Badminton_Court ? "true" : "false",
//                 },
//                 {
//                   "@type": "LocationFeatureSpecification",
//                   name: "Tennis Court",
//                   value: schoolData.Tennis_Court ? "true" : "false",
//                 },
//                 {
//                   "@type": "LocationFeatureSpecification",
//                   name: "Basketball Court",
//                   value: schoolData.Basketball_Court ? "true" : "false",
//                 },
//                 {
//                   "@type": "LocationFeatureSpecification",
//                   name: "Play Ground",
//                   value: schoolData.Play_Ground ? "true" : "false",
//                 },
//                 {
//                   "@type": "LocationFeatureSpecification",
//                   name: "Indoor Games",
//                   value: schoolData.Indoor_Games ? "true" : "false",
//                 },
//                 {
//                   "@type": "LocationFeatureSpecification",
//                   name: "Swimming Pool",
//                   value: schoolData.Swimming_Pool ? "true" : "false",
//                 },
//                 {
//                   "@type": "LocationFeatureSpecification",
//                   name: "Photography",
//                   value: schoolData.Photography ? "true" : "false",
//                 },
//               ],
//             }),
//           }}
//         />

//         <script
//           defer={true}
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org/",
//               "@type": "Product",
//               name: "Edu123",
//               image:
//                 "https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/" +
//                 schoolData.sheetName +
//                 "/" +
//                 "G-" +
//                 schoolData.Image_Code +
//                 ".png",
//               description:
//                 "Find the best schoolData in India with the help of Edu123, the best Admission counselling services Choose a bright future for your kid.",
//               brand: {
//                 "@type": "Brand",
//                 name: schoolData.name,
//               },
//               sku: schoolData.numOfReviews > 0 ? schoolData.numOfReviews : 25,
//               offers: {
//                 "@type": "AggregateOffer",
//                 url: `https://www.edu123.in/school/${schoolData.sheetName}/${schoolData.slug}`,
//                 priceCurrency: "INR",
//                 lowPrice: "",
//                 offerCount: "1",
//               },
//               aggregateRating: {
//                 "@type": "AggregateRating",
//                 ratingValue: schoolData.rating != NaN && schoolData.rating > 0
//                   ? schoolData.rating
//                   : 4.5,
//                 bestRating: "5",
//                 worstRating: "1",
//                 ratingCount: schoolData.numOfReviews > 0
//                   ? schoolData.numOfReviews
//                   : 25,
//               },
//             }),
//           }}
//         />
//       </head>
//       <div>
//         <SchoolDetails
//           school={schoolData}
//           // reviews={review}
//           reviews={review.map((r, index) => ({ ...r, key: index }))}
//           city={params.slug[0]}
//           id={id}
//         />
//       </div>
//     </>
//   );
// }



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
    title: `${categoryData?.name} | Admissions 2024-25`,
    description: categoryData?.Meta_description,
    keywords: categoryData?.Meta_keywords,
    alternates: {
      canonical: `https://www.edu123.in/school/${params.slug[0]}/${params.slug[1]}`,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "standard",
    },
    openGraph: {
      title: "Find the Best Boarding Schools in Seconds | Edu123",
      description: "Find your dream boarding school in seconds with Edu123. Unlock a world of educational possibilities. Your path to the perfect education begins here.",
      url: "https://www.edu123.in/",
      images: [
        `https://res.cloudinary.com/infoedu123/image/upload/v1703243169/EDU123/edu123HomeD.png`,
      ],
      siteName: "Edu123",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      site: "@Edu123India",
      title: "Find the Best Boarding Schools in Seconds | Edu123",
      description: "Find your dream boarding school in seconds with Edu123. Unlock a world of educational possibilities. Your path to the perfect education begins here.",
      image: "https://res.cloudinary.com/infoedu123/image/upload/v1703243169/EDU123/edu123HomeD.png",
      url: "https://x.com/edu123india",
    },
    structuredData: [
      {
        "@context": "http://schema.org",
        "@type": "WebPage",
        url: `https://www.edu123.in/school/${sheetName}/${categoryData.slug}`,
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
            name: "Edu123",
            item: "https://www.edu123.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: categoryData.Town,
            item: `https://www.edu123.in/category/boarding-schools-in-${sheetName}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            url: `https://www.edu123.in/school/${sheetName}/${categoryData.slug}`,
            name: categoryData.name,
          },
        ],
      },
      {
        "@context": "http://schema.org/",
        "@type": "School",
        name: categoryData.name,
        description: categoryData.Meta_description,
        url: `https://www.edu123.in/school/${sheetName}/${categoryData.slug}`,
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
