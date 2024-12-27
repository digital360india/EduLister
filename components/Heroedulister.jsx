"use client";

import React from "react";
import Image from "next/image";

const Heroedulister = () => {
  return (
    <div className="md:relative mt-20 w-full h-full">
      <Image
        src="/edulisterbanner.png"
        alt="School choice"
        width={1000}
        height={1000}
        className="w-full h-full object-cover hidden md:block"
      />

      <div className="md:hidden">
        <Image
          src="/PINK 1.svg"
          alt="School choice"
          width={1000}
          height={1000}
          className="w-full h-[82vh] object-cover  "
        />
      </div>
    </div>
  );
};

export default Heroedulister;