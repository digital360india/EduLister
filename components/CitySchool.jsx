"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const cities = [
  {
    name: "india",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1722253120/Edu123/Eduimages/India.png",
  },
  {
    name: "mussoorie",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1722253120/Edu123/Eduimages/Mussoorie.png",
  },
  {
    name: "dehradun",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1722253120/Edu123/Eduimages/Dehradun.png",
  },
  {
    name: "bangalore",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1722253119/Edu123/Eduimages/bangalore.png",
  },
  {
    name: "shimla",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1722253122/Edu123/Eduimages/Shimla.png",
  },
];

export const CitySchool = () => {
  return (
    <div>
      <p className="text-[24px] sm:text-[28px]  mb-[40px] font-semibold">
        Search by Cities
      </p>
      <div className="w-[84vw] -mt-3 sm:mt-0   mx-auto">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          infinite
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper rounded-lg  scrollbar-hide overflow-x-auto hidden md:block"
        >
          {cities.map((city, index) => (
            <SwiperSlide
              className=" min-w-[250px] relative  min-h-[300px] bg-cover bg-no-repeat rounded-lg"
              style={{
                background: `linear-gradient(180deg, rgba(190, 190, 190, 0.00) 0%, rgba(0, 0, 0, 0.49) 100%), url(${city.image})`,
                backgroundSize: "cover",
              }}
              key={index}
            >
              <div className="w-full absolute  flex bottom-6  items-center justify-center  capitalize  text-[24px] font-bold">
                <Link
                  href={`/category/boarding-schools-in-${city.name}`}
                  className=" text-white p-1 rounded-sm"
                >
                  {city.name}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper rounded-lg md:hidden"
        >
          {cities.map((city, index) => (
            <SwiperSlide className="">
              <Link href={`/category/boarding-schools-in-${city.name}`}>
                <div
                  className=" min-w-[250px] relative  min-h-[350px] bg-no-repeat rounded-lg"
                  style={{
                    background: `linear-gradient(180deg, rgba(190, 190, 190, 0.00) 0%, rgba(0, 0, 0, 0.49) 100%), url(${city.image})`,
                    backgroundSize: "cover",
                  }}
                  key={index}
                >
                  <div className="w-full absolute flex bottom-6 text-white   items-center justify-center  capitalize  text-[24px] font-bold">
                    {city.name}
                  </div>
                </div>
                <div className="min-h-10 block sm:hidden "></div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
