"use client";
import React from "react";
import { useRouter } from "next/navigation";
export const About = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about");
  };
  return (




     
    <div className="space-y-[40px] sm:mb-[60px]    sm:mt-0 ">
      <div className="-mb-6 sm:mb-0">
        <p className="text-[24px] sm:text-[28px] font-semibold">About Us</p>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-0  ">
        <div className=" flex flex-col gap-3 items-center ">
          <img src="./1.png" />
          <p className=" text-[14px] sm:text-[18px] text-[#02618f]">
            <span className=" font-semibold">500+</span> Schools
          </p> 
        </div> 
        <div className=" flex flex-col gap-4 items-center ">
        <img src="./2.png" />
          <p className="text-[14px] sm:text-[18px] text-[#02618f]">
            <span className=" font-semibold">200+</span> Parents
          </p>
        </div>
        <div className=" flex flex-col gap-4 items-center ">
        <img src="./3.png" />
          <p className="text-[14px] sm:text-[18px] text-[#02618f]">
            <span className=" font-semibold">50+</span> Counsellors
          </p>
        </div>
        <div className=" flex flex-col gap-4 items-center ">
        <img src="./4.png" />
          <p className="text-[14px] sm:text-[18px] text-[#02618f]">
            <span className=" font-semibold">10+</span> Cities
          </p>
        </div>
      </div>
      <div>
        <p className=" text-[12px] -mt-4 -mb-4 sm:mt-0 sm:text-[16px]">
          Edulister is your go-to destination for discovering top-notch boarding
          schools across India. Our comprehensive portal simplifies the school
          search process, providing detailed listings and transparent
          information. Whether you seek academic excellence, state-of-the-art
          facilities, or a nurturing environment, Edulister ensures you make
          informed choices for your child's future. Trust us to guide you in
          navigating the vast landscape of boarding schools nationwide.
        </p>
      </div>

      <div className="  ">
        <button
          type="read"
          className="bg-[#02618f] hover:bg-[#520808]  text-white py-2 px-4 rounded"
          onClick={handleClick}
        >
          Read More
        </button>
      </div>
    </div>
  );
};
