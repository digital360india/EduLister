import CompareCard from "@/components/CompareCard";
import Hero from "@/components/Hero";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="hidden md:block">
        <Hero
          image={
            "/categorygoedu.svg"
          }
          height={"67vh"}
        />
      </div>
      <div className="md:hidden  ">
        <Hero
          image={
            "/categorygoedu.svg"
          }
          height={"60vh"}
        />
      </div>
      <div>
        <CompareCard />
      </div>
    </div>
  );
}
