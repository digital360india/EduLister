import { base } from "@/app/api/airtable.jsx";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import CategoryPage from "@/components/CategoryPage";
import CategoryHeroGoEdu from "@/components/CategoryHeroGoEdu";
import Head from "next/head";

async function getCategoryData(slug) {
  const categoryData = await base("category 2")
    .select({
      filterByFormula: `slug= "${slug}"`,
    })
    .all()
    .then((value) => value[0]?.fields);
  return categoryData;
}

export async function generateMetadata({ params }) {
  const categoryData = await getCategoryData(params.slug);

  return {
    title: categoryData?.title,
    description: categoryData?.meta_description,
    keywords: categoryData?.keywords,
    authors: [{ name: categoryData?.author }],
    alternates: {
      canonical: `https://www.edulister.com/category/${params.slug}`,
    },
    openGraph: {
      title: categoryData?.title,
      description: categoryData?.meta_description,
      url: `https://www.edulister.com/${params.slug}`,
      locale: "en_US",
      type: "website",
      images: [{ url: categoryData?.featuredImg }],
      siteName: "Edu123",
      siteName: "Edu123 School Search Portal",
    },
    robots: {
      googleBot: {
        index: true,
        follow: true,
      },
    },
    twitter: {
      card: "summary",
      title: categoryData?.title,
      description: categoryData?.meta_description,
      card: categoryData?.featuredImg,
      image: categoryData?.featuredImg,
      site: "@edu123",
      creator: "@edu123",
    },
  };
}

export default async function ListingPage({ params }) {
  const categoryData = await getCategoryData(params.slug);

  return (
    <>
      <Head>
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: categoryData?.schema,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: categoryData?.schema2,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: categoryData?.schema3,
          }}
        />
      </Head>
      {/* <div className="bg-white overflow-x-hidden">
        <div className="hidden sm:block">
          <Hero
            image="https://res.cloudinary.com/eduminatti-com/image/upload/v1726733029/Edu123/Eduimages/banner_desktop_2.jpg"
            height="67vh"
          />
        </div>
        <div className="sm:hidden">
          <Hero
            need="no"
            image="https://res.cloudinary.com/eduminatti-com/image/upload/v1726733028/Edu123/Eduimages/mobile_banner.png"
            height="65vh"
          />
        </div>
        <CategoryPage categoryData={categoryData} />
        <FAQ categoryData={categoryData} />
      </div> */}


      <div className="overflow-hidden md:overflow-visible">
        <CategoryHeroGoEdu />
        <CategoryPage categoryData={categoryData} />
        <FAQ categoryData={categoryData} />
      </div>
    </>
  );
}
