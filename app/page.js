

import "./globals.css";
import Heroedulister from "@/components/Heroedulister";
import Formedulister from "@/components/Formedulister";
import WhyChooseUsedulister from "@/components/WhyChooseUsedulister";
import Aboutedulister from "@/components/Aboutedulister";
import Testimonailedulister from "@/components/Testimonailedulister";
import Mapedulister from "@/components/Mapedulister";
import MobileAnimation from "@/components/MobileAnimation";

export async function generateMetadata() {
  return {
    title: "Instantly Find the Best Boarding Schools | Edulister",
    description:
      "Instantly explore top boarding schools that fit your needs. Compare options, view facilities, and make the best choice for your child's future in seconds!",
    icons: [{ rel: "icon", url: "/edulisterlogo.png" }],
    other: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      {
        name: "description",
        content:
          "Instantly explore top boarding schools that fit your needs. Compare options, view facilities, and make the best choice for your child's future in seconds!",
      },
      {
        name: "keywords",
        content:
          "School Admissions, School consultancy, School consultancy, Online School Listings, Admissions Guidance, Boarding School Listings, Trusted School Consultancy, School Admission Information, Finding the Right Boarding School",
      },
      {
        name: "application-name",
        content: "Edulister",
      },
    ],
    openGraph: {
      locale: "en_US",
      type: "website",
      title: "Instantly Find the Best Boarding Schools | Edulister",
      description:
        "Instantly explore top boarding schools that fit your needs. Compare options, view facilities, and make the best choice for your child's future in seconds!",
      url: "https://www.edulister.com/",
      site_name: "Edulister",
      images: [
        {
          url: "https://edulister.com/categoryedulister.svg",
          alt: "Edulister Logo",
        },
      ],
    },
  };
  
}

export default function Home() {
  return (
    <div>
      <Heroedulister />
      <Formedulister />
      <Mapedulister />
      <WhyChooseUsedulister />
      <div className="xl:hidden">
        <MobileAnimation />
      </div>
      <Aboutedulister />
      <Testimonailedulister />
    </div>
  );
}
