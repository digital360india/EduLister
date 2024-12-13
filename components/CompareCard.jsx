"use client";
import { useState } from "react";
import CompareSchoolCard from "./CompareSchoolCard";
import CompareSchoolTable from "./CompareSchoolTable";

export default function CompareCard() {
  const [schoolData1, setSchoolData1] = useState(null);
  const [schoolData2, setSchoolData2] = useState(null);
  const [schoolData3, setSchoolData3] = useState(null);
  const [schoolData4, setSchoolData4] = useState(null);

  const hasSchoolData =
    schoolData1 || schoolData2 || schoolData3 || schoolData4;

  return (
    <>
      <h1 className="text-center text-background-dark text-[24px] bg-gray-100 md:pt-20 pt-40">
        Compare By
      </h1>
      <div className="bg-gray-100 py-12 px-20">
        <div className="max-w-7xl mx-auto border border-background-dark ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
            <div className="hidden lg:block px-3 p-4 space-y-4 border-r border-background-dark   last:border-none flex-1 pt-10 ">
            <h3 className="text-center text-background-dark font-semibold">
              Compare By:
            </h3>
            <div className="flex flex-col space-y-2 px-6">
              <button className="w-40 h-10 border border-background-dark  text-background-dark rounded">
                School Stats
              </button>
              <button className="w-40 h-10 border border-background-dark text-background-dark rounded">
                School Details
              </button>
              <button className="w-40 h-10 border border-background-dark text-background-dark rounded">
                School Fees
              </button>
              <button className="w-40 h-10 border border-background-dark text-background-dark rounded">
                Facilities
              </button>
            </div>
          </div>
            <CompareSchoolCard onSchoolDataFetched={setSchoolData1} />
            <CompareSchoolCard onSchoolDataFetched={setSchoolData2} />
            <CompareSchoolCard onSchoolDataFetched={setSchoolData3} />
            <CompareSchoolCard onSchoolDataFetched={setSchoolData4} />
          </div>
        </div>
        {hasSchoolData && (
          <div>
            <CompareSchoolTable
              schoolData1={schoolData1}
              schoolData2={schoolData2}
              schoolData3={schoolData3}
              schoolData4={schoolData4}
            />
          </div>
        )}
      </div>
    </>
  );
}
