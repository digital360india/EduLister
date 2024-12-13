"use client";

import React from "react";
import Image from "next/image";

const Heroedulister = () => {
  return (
    <div className=" bg-[#FFEBF0] w-full h-[100vh] ">
      <div className="flex justify-between md:gap-28 px-8 md:px-36  mt-10 ">
        <div className="md:text-[60px]  md:block hidden   text-black md:mt-56 font-bold">
          
          Find the  <br /> <span className="text-[#9B1750]">Perfect School</span> <br/>for Every  <span className="text-[#9B1750]">Child</span>
        </div>
        <div className="text-[40px]  md:hidden   text-black mt-28 font-bold">
            Find the Prefect School for every child 
          </div> 


        {/* <div className="md:hidden mt-10 text-[#9B1750] ">
          Find the Perfect School for Every Child
          </div> */}

        <div>
          <Image
            src="/PINK 1.svg"
            alt="School choice"
            width={1000}
            height={1000}
            className=" object-cover hidden md:block w-[485px] h-[680px] mt-20   "
          />
        </div>
      </div>

      <div className="md:hidden">
        <Image
          src="/PINK 1.svg"
          alt="School choice"
          width={1000}
          height={1000}
          className=" h-[50vh] mt-36 object-cover bottom-0 absolute mr-10"
        />
      </div>
    </div>
  );
};

export default Heroedulister;
