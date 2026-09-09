"use client";
import React, { useState } from "react";
import Image from "next/image";
import Mapbanner from "@/public/Mapbanner.svg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Mapedulister = () => {
  const [showContent, setShowContent] = useState(false);

  const cities = [
  {
    name: "india",
    label: "India",
    bannerSrc: "/indiaschool1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "mussoorie",
    label: "Mussoorie",
    bannerSrc: "/mussorie1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "dehradun",
    label: "Dehradun",
    bannerSrc: "/dehradun1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "bangalore",
    label: "Bangalore",
    bannerSrc: "/banglore1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "shimla",
    label: "Shimla",
    bannerSrc: "/shimla1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "hyderabad",
    label: "Hyderabad",
    bannerSrc: "/indiaschool1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "nainital",
    label: "Nainital",
    bannerSrc: "/mussorie1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "panchgani",
    label: "Panchgani",
    bannerSrc: "/dehradun1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "pune",
    label: "Pune",
    bannerSrc: "/banglore1.svg",
    bottomSrc: "/locationbottom.svg",
  },
  {
    name: "jaipur",
    label: "Jaipur",
    bannerSrc: "/shimla1.svg",
    bottomSrc: "/locationbottom.svg",
  },
];

  return (
    <>
      <section className="bg-secondary/60 px-6 md:px-8 lg:px-10">
        <div className="container-page py-20">
          <p className="text-xs uppercase tracking-wider text-gold">
            Browse by location
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl">
            Search schools by cities
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            From Dehradun's hill campuses to Bangalore's modern academies — pick
            a city, we'll show you the right fit.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {/* <div className="flex justify-center items-center gap-10">
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
                  <p className="mt-4">{city.name}</p> 
                  <p className="mt-4">
                    {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
                  </p>
                </Link>
              </div>
            ))}
          </div> */}
            {cities.map((city,index) => (
              <Link
                key={city.name}
                href={`/schools/${city.name}`}
                className="group rounded-xl bg-primary p-4 text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                <p className="font-display text-base text-primary-foreground">
                  {city.label}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-primary-foreground/75">
                  {city.count} school{city.count !== 1 && "s"}
                  <ArrowRight
                    size={12}
                    className="text-gold transition-transform group-hover:translate-x-0.5"
                  />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* <div
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
                  <p className="mt-4">{city.name}</p> 
                  <p className="mt-4">
                    {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
                  </p>
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
      </div> */}
    </>
  );
};

export default Mapedulister;
