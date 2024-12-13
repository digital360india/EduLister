import Link from "next/link";
import React from "react";

const Card = ({ logo, text, url }) => {
  return (
    <>
      <div className="hidden md:block  h-[120px] relative ">
        <div className="absolute top-0 left-[19%] w-[123px] h-[123px] bg-white rounded-md shadow-bocs flex items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="object-contain w-[90px] h-[90px] rounded-full"
          />
        </div>
        <div className="mt-10 bg-[#02618f] text-white font-semibold  text-center w-[190px] h-[160px] py-4 px-2 rounded-md flex justify-center items-end">
          <Link href={url}>
            <span className="text-[16px] font-medium text-left">{text}</span>
          </Link>
        </div>
      </div>
     
    </>
  );
};

export default Card;
