import Image from "next/image";
import React from "react";
import Blink from "./Blink";

const CategoryHeroGoEdu = () => {
  return (
    <>
      <div className="relative">
        <Blink />
        <div className="absolute top-0 max-h-screen">
          <div className=" top-[50vh] absolute text-[#0C263F] text-[40px] text-center md:left-[50vh]">
            <h1 className="font-bold text-center">Confusion!? </h1>

            <h2 className="text-center">
              to choose the <span className="font-bold">Right School</span> for
              you?
            </h2>
          </div>
          <Image
            src="/categorygoedu.svg"
            alt="category_hero"
            width={1000}
            height={1000}
            className="w-full h-[100vh]  object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default CategoryHeroGoEdu;
