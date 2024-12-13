import React from "react";
import SchoolCard from "./SchoolCard";

export default function CategoryPage({ categoryData }) {
  
  return (
    <div className="flex md:flex-col flex-col-reverse">
      <div>
        
        {/* <Article categoryData={categoryData} /> */}
      </div>
      <div className="w-full  sm:w-[100vw] ">
        <SchoolCard categoryData={categoryData} />
      </div>
    </div>
  );
}
