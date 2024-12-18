"use client";
import React, { useState } from "react";
import Image from "next/image";
import Mapbanner from "@/public/Mapbanner.svg";
import Link from "next/link";

const Mapedulister = () => {
  const [showContent, setShowContent] = useState(false);

  const cities = [
    {
      name: "india",
      bannerSrc: "/indiaschool1.svg",
      bottomSrc: "/locationbottom.svg",
    },
    {
      name: "mussoorie",
      bannerSrc: "/mussorie1.svg",
      bottomSrc: "/locationbottom.svg",
    },
    {
      name: "dehradun",
      bannerSrc: "/dehradun1.svg",
      bottomSrc: "/locationbottom.svg",
    },
    {
      name: "bangalore",
      bannerSrc: "/banglore1.svg",
      bottomSrc: "/locationbottom.svg",
    },
    {
      name: "shimla",
      bannerSrc: "/shimla1.svg",
      bottomSrc: "/locationbottom.svg",
    },
  ];

  return (
    <>
      <div
        className="relative text-white h-screen hidden md:block"
        onMouseEnter={() => setShowContent(true)}
        onMouseLeave={() => setShowContent(false)}
      >
        <div className="">
          <Image
            src="/2.svg"
            alt="map"
            width={1000}
            height={1000}
            className={`transition-transform duration-[1000ms] ease-in-out w-full h-[100vh] ${
              showContent ? "scale-[0.5]" : "scale-100"
            }`}
          />
        </div>

        <div
          className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center  transition-transform duration-[950ms] ease-in-out ${
            showContent ? "translate-x-0" : "-translate-x-full"   
          }`}
          style={{ backgroundImage: `url(${Mapbanner.src})` }}
        >
          <h1 className="text-center text-4xl mb-20">School By Cities</h1>

          <div className="flex justify-center items-center gap-10">
            {cities.map((city, index) => (
              <div key={index} className=" text-center">
                <div className={`bounce-slow ${index} custom-shadow`}>
                <Link href={`/category/boarding-schools-in-${city.name}`}>
                  <Image
                    src={city.bannerSrc}
                    alt="location banner"
                    width={1000}
                    height={1000}
                    className="w-[250px] h-[240px] mx-4"
                  />
                   </Link>
                </div>
                <div className={`resize-bottom ${index} custom-shadow-bottom`}>
                  <Image
                    src={city.bottomSrc}
                    alt="location bottom"
                    width={1000}
                    height={1000}
                    className="w-full h-[12px]"
                  />
                </div>
                <Link href={`/category/boarding-schools-in-${city.name}`}>
                 {/* <p className="mt-4">{city.name}</p>  */}
                  <p className="mt-4">{city.name.charAt(0).toUpperCase() + city.name.slice(1)}</p>

                </Link>
              </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          @keyframes bounce-slow {
            0%,
            20%,
            50%,
            80%,
            100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-40px);
            }
            60% {
              transform: translateY(-10px);
            }
          }
          @keyframes resize-width {
            0%,
            20%,
            50%,
            80%,
            100% {
              transform: scaleX(1);
            }
            40% {
              transform: scaleX(0.7);
            }
            60% {
              transform: scaleX(0.9);
            }
          }
          .resize-bottom {
            animation: resize-width 3s infinite;
          }
          .bounce-slow {
            animation: bounce-slow 3s infinite;
          }
          .custom-shadow {
            filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
          }
          .custom-shadow-bottom {
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
          }
        `}</style>
      </div>
    </>
  );
};

export default Mapedulister;
