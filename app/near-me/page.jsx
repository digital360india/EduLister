// import { listSchools } from "@/lib/schools.functions";
import { NearMeClient } from "./NearMeClient";

// export async function generateMetadata() {
//   return {
//     title: "Boarding schools near me — EduLister",
//     description:
//       "Use your location to find boarding schools closest to you in India, sorted by distance with fees, boards and ratings.",
//     alternates: {
//       canonical: "/near-me",
//     },
//   };
// }

export default async function NearMePage() {
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
//   const schools = await listSchools({ data: {} });
  return <NearMeClient cities={cities} />;
}