// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import { EffectCards } from "swiper/modules";
// import Image from "next/image";
// import Link from "next/link";

// export default function MobileSwiper() {
//   return (
//     <div className="flex flex-col justify-start items-start overflow-hidden pb-16 pt-10 bg-gradient-to-b from-[#1B6EA1] via-[#1B6EA1] to-[#27AAE1] px-6 md:px-8 lg:px-10">
//       <p className="text-[22px] text-white mb-8">Featured Schools</p>
//       <Swiper
//         effect={"cards"}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//         spaceBetween={4}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             centeredSlides: true,
//           },
//           640: {
//             slidesPerView: 2,
//           },
//           768: {
//             slidesPerView: 3,
//           },
//           1024: {
//             slidesPerView: 4,
//           },
//         }}
//       >
//         <SwiperSlide className="flex flex-col items-center w-[200px] border border-white h-[400px] shadow-lg rounded-2xl">
//           <div
//             className="w-full h-[280px] rounded-b-2xl flex items-center justify-center bg-[#29A2D5]"
//             style={{ boxShadow: "0px 7px 6px 0px #0C263F40" }}
//           >
//             <Image
//               src="/mayoschool.svg"
//               alt="Mayo's College"
//               width={1000}
//               height={1000}
//               className="object-cover p-14"
//             />
//           </div>

//           <div className="w-full flex justify-center items-center h-[118px]">
//             <h2 className="text-[24px] text-[#1B6EA1]">Mayo College</h2>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col items-center w-[200px] border border-white h-[400px] shadow-lg rounded-2xl">
//           <div
//             className="w-full h-[280px] rounded-b-2xl flex items-center justify-center bg-[#29A2D5]"
//             style={{ boxShadow: "0px 7px 6px 0px #0C263F40" }}
//           >
//             <Image
//               src="/Welham_Girls.svg"
//               alt="Welham_Girls.svg"
//               width={1000}
//               height={1000}
//               className="object-cover p-14"
//             />
//           </div>

//           <div className="w-full flex justify-center items-center h-[118px]">
//             <h2 className="text-[24px] text-[#1B6EA1]">Wellham Girls School</h2>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col items-center w-[200px] border border-white h-[400px] shadow-lg rounded-2xl">
//           <div
//             className="w-full h-[280px] rounded-b-2xl flex items-center justify-center bg-[#29A2D5]"
//             style={{ boxShadow: "0px 7px 6px 0px #0C263F40" }}
//           >
//             <Image
//               src="/mayoschool.svg"
//               alt="Jain International School"
//               width={1000}
//               height={1000}
//               className="object-cover p-14"
//             />
//           </div>

//           <div className="w-full flex justify-center items-center h-[118px]">
//             <h2 className="text-[24px] text-[#1B6EA1]">Jain International School</h2>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col items-center w-[200px] border border-white h-[400px] shadow-lg rounded-2xl">
//           <div
//             className="w-full h-[280px] rounded-b-2xl flex items-center justify-center bg-[#29A2D5]"
//             style={{ boxShadow: "0px 7px 6px 0px #0C263F40" }}
//           >
//             <Image
//               src="/mayoschool.svg"
//               alt="Mussoorie International School"
//               width={1000}
//               height={1000}
//               className="object-cover p-14"
//             />
//           </div>

//           <div className="w-full flex justify-center items-center h-[118px]">
//             <Link href="/school/bangalore/jain-international-residential-school-bangalore-karnataka" />
//             <h2 className="text-[24px] text-[#1B6EA1]">Mussoorie International School</h2>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col items-center w-[200px] border border-white h-[400px] shadow-lg rounded-2xl">
//           <div
//             className="w-full h-[280px] rounded-b-2xl flex items-center justify-center bg-[#29A2D5]"
//             style={{ boxShadow: "0px 7px 6px 0px #0C263F40" }}
//           >
//             <Image
//               src="/The_Doon_School.svg"
//               alt="doon"
//               width={1000}
//               height={1000}
//               className="object-cover p-14"
//             />
//           </div>

//           <div className="w-full flex justify-center items-center h-[118px]">
//             <h2 className="text-[24px] text-[#1B6EA1]">The Doon School</h2>
//           </div>
//         </SwiperSlide>
//         {/* <SwiperSlide className="flex flex-col items-center w-[200px] border border-white h-[400px] shadow-lg rounded-2xl">
//           <div
//             className="w-full h-[280px] rounded-b-2xl flex items-center justify-center bg-[#29A2D5]"
//             style={{ boxShadow: "0px 7px 6px 0px #0C263F40" }}
//           >
//             <Image
//               src="/mayoschool.svg"
//               alt="Mayo's College"
//               width={1000}
//               height={1000}
//               className="object-cover p-14"
//             />
//           </div>

//           <div className="w-full flex justify-center items-center h-[118px]">
//             <h2 className="text-[24px] text-[#1B6EA1]">MAYO&apos;S COLLEGE</h2>
//           </div>
//         </SwiperSlide> */}
//       </Swiper>
//     </div>
//   );
// }



"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const schools = [
  {
    name: "Jain International School",
    image: "/mayoschool.svg",
    url: "/school/bangalore/jain-international-residential-school-bangalore-karnataka",
  },
  {
    name: "Welham Girls School",
    image: "/Welham_Girls.svg",
    url: "/school/dehradun/welham-girls'-school-dehradun-uttarakhand",
  },
  {
    name: "Mayo College",
    image: "/mayoschool.svg",
    url: "/school/india/mayo-college-india",
  },
  {
    name: "Mussoorie International School",
    image: "/mayoschool.svg",
    url: "/school/mussoorie/mussoorie-international-school-mussoorie-uttarakhand",
  },
  {
    name: "The Doon School",
    image: "/The_Doon_School.svg",
    url: "/school/dehradun/the-doon-school-dehradun-uttarakhand",
  },
];


export default function FeaturedGoEduMobile() {
  return (
    <div className="flex flex-col justify-start items-start overflow-hidden pb-16 pt-10 bg-gradient-to-b from-[#1B6EA1] via-[#1B6EA1] to-[#27AAE1] px-6 md:px-8 lg:px-10">
      <p className="text-[22px] text-white mb-8">Featured Schools</p>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        spaceBetween={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {schools.map((school, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center w-[200px] border border-white h-[400px] shadow-lg rounded-2xl">
            <Link href={school.url} className="w-full h-full flex flex-col">
              <div
                className="w-full h-[280px] rounded-b-2xl flex items-center justify-center bg-[#29A2D5]"
                style={{ boxShadow: "0px 7px 6px 0px #0C263F40" }}
              >
                <Image
                  src={school.image}
                  alt={school.name}
                  width={1000}
                  height={1000}
                  className="object-cover p-14"
                />
              </div>
              <div className="w-full flex justify-center items-center h-[118px]">
                <h2 className="text-[24px] text-[#1B6EA1]">{school.name}</h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
