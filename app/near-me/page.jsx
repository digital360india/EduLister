import { NearMeClient } from "./NearMeClient";

export async function generateMetadata() {
  return {
    title: "Boarding schools near me — EduLister",
    description:
      "Use your location to find boarding schools closest to you in India, sorted by distance with fees, boards and ratings.",
    alternates: { canonical: "/near-me" },
  };
}

export default async function NearMePage() {
  const cities = [
    { name: "mussoorie", label: "Mussoorie" },
    { name: "dehradun", label: "Dehradun" },
    { name: "bangalore", label: "Bangalore" },
    { name: "shimla", label: "Shimla" },
    { name: "hyderabad", label: "Hyderabad" },
    { name: "nainital", label: "Nainital" },
    { name: "panchgani", label: "Panchgani" },
    { name: "pune", label: "Pune" },
    { name: "jaipur", label: "Jaipur" },
  ];

  return <NearMeClient cities={cities} />;
}