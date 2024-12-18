"use client";

import React, { useEffect } from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import {
  IoBook,
  IoLocationSharp,
  IoPerson,
  IoPersonOutline,
} from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { StarRating, StarRatingper } from "./StarRating";
import { PiStudentFill } from "react-icons/pi";
import Enquire from "./Enquire";
import CategoryGalleryGoEdu from "./CategoryGalleryGoEdu";
import ConsultationPopup from "./ConsultationPopup";

const SchoolCardMini = ({ data, index, citySlug }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [open, setOpen] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [school, setSchool] = useState("");

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    document.body.style.overflow = "hidden";
    setPopupOpen(true);
  };

  const closePopup = () => {
    document.body.style.overflow = "auto";
    setPopupOpen(false);
  };
  const [viewers, setViewers] = useState(0);

  useEffect(() => {
    const randomViewers = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    setViewers(randomViewers);
  }, []);



    //  popup
    const [isOpenpopup, setIsOpenpopup] = useState(false);
  
    const toggleBookingPopup = () => {
      setIsOpenpopup(true);
    };
  
 
  
    const toggleBookingClosePopup = () => {
      setIsOpenpopup(false);
    };

  return (
    <>
      <div className="hidden lg:block">
        {/* <div className="float-right py-3 px-5 h-[36px] bg-[#F97B24] rounded-l-3xl flex items-center gap-2 shadow-counsel">
          <IoPersonOutline className="text-white" size={16} />
          <p className="text-[12px] text-[#FFFFFF]">{viewers}+ people viewed</p>
        </div> */}

        <div className="lg:w-[810px] h-[500px] py-[25px] shadow-custom">
          <div className="flex  gap-5">
            <div className="">
              <div className=" ">
                {/* <div>
                <img
                  className="w-[300px] h-[210px] object-cover"
                  src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${citySlug}/G-${data?.fields?.Image_Code}.png`}
                  alt="img"
                />
              </div> */}

                <CategoryGalleryGoEdu
                  data={data}
                  index={index}
                  citySlug={citySlug}
                />
                {/* <div className="flex justify-between">
                <img
                  className="w-[90px] h-[60px] object-cover"
                  src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${citySlug}/G-${data?.fields?.Image_Code}.png`}
                  alt="img"
                />
                <img
                  className="w-[90px] h-[60px] object-cover"
                  src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${citySlug}/H-${data?.fields?.Image_Code}.png`}
                  alt="img"
                />
                <img
                  className="w-[90px] h-[60px] object-cover"
                  src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${citySlug}/I-${data?.fields?.Image_Code}.png`}
                  alt="img"
                />
              </div> */}
              </div>
            </div>

            <div className="w-[59%] flex flex-col space-y-4 ">
              <div className="flex justify-between mt-8">
                <div>
                  <p className="text-[20px] text-background-dark">
                    <Link href={`/school/${citySlug}/${data?.fields?.slug}`}>
                      {data?.fields?.name}
                    </Link>
                  </p>
                </div>
                <div className="float-right py-3 px-5 h-[40px] bg-[#F97B24] rounded-l-3xl flex items-center gap-2 shadow-counsel">
                  <IoPersonOutline className="text-white" size={16} />
                  <p className="text-[12px] text-[#FFFFFF]">
                    {viewers}+ people viewed
                  </p>
                </div>
              </div>
              <div className="flex text-[12px] items-center text-[#898989] gap-2">
                <IoLocationSharp size={12} />
                <p className="  "> {data?.fields?.Address}</p>
              </div>
              <div className="text-[#323232] text-[12px] font-light">
                <StarRating
                  className=""
                  rating={data?.fields?.rating}
                  review={data?.fields?.numOfReviews}
                />
              </div>
              <div className="text-[#898989] flex pt-[1px] flex-col ">
                <p className="text-[12px]  text-[#898989]">Annual Fees</p>
                <p className="text-[16px] xl:text-[22px] text-background-dark">
                  ₹{Number(data?.fields?.feefrom).toLocaleString("en-IN")} - ₹
                  {Number(data?.fields?.feeto).toLocaleString("en-IN")}
                </p>
              </div>

              <div className="w-full h-[60px] bg-background-dark rounded-l-2xl flex justify-center items-center float-right">
                <div className="flex justify-between text-[10px] text-[#FFFFFF] w-[90%]">
                  <div className="flex flex-col items-center space-y-1">
                    <p className="">Curriculum</p>
                    <p className=" ">
                      {data?.fields?.cbse_schools
                        ? "CBSE"
                        : data?.fields?.icse_isc_schools
                        ? "ICSE/ISC"
                        : data?.fields?.cie_schools
                        ? "CIE"
                        : data?.fields?.ib_schools
                        ? "IB school"
                        : data?.fields?.igcse_schools
                        ? "IGCSE"
                        : null}
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <p className="">School Category</p>
                    <p className="font-normal">
                      {data?.fields?.girls_schools
                        ? "Girls School"
                        : data?.fields?.boys_schools
                        ? "Boys School"
                        : data?.fields?.coed_schools
                        ? "Co-Ed"
                        : null}
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <p className="">School Type</p>
                    <p className="">
                      {data?.fields?.day_schools == true
                        ? "Day School"
                        : data?.fields?.day_boarding_schools
                        ? "Day boarding"
                        : data?.fields?.full_boarding_schools
                        ? "Boarding"
                        : null}
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <p className="">Classes</p>
                    <p className="">{data?.fields?.classto}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center gap-6 pt-2">
                <div className="flex flex-col justify-between h-full text-[12px] text-[#898989] w-[50%]">
                  <div className="flex items-center justify-between">
                    <p className=" ">Infrastructure</p>
                    <StarRatingper percentage={data?.fields?.Infrastructure} />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className=" ">Academics</p>
                    <StarRatingper percentage={data?.fields?.Academics} />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className=" ">Administration</p>
                    <StarRatingper percentage={data?.fields?.Administration} />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className=" ">Extracurricular</p>
                    <StarRatingper percentage={data?.fields?.Extracurricular} />
                  </div>
                </div>
                <div className="w-[200px] space-y-4 text-[12px] mr-8">
                  <Link
                    href={`/school/${citySlug}/${data?.fields?.slug}`}
                    className="w-full px-5 py-2 rounded-3xl border border-background-dark text-background-dark flex justify-center items-center gap-2"
                  >
                    <RiGraduationCapFill size={16} />
                    View School
                  </Link>

                  <button
                    onClick={toggleBookingPopup}
                    className="w-full px-5 py-2 rounded-3xl bg-background-dark text-[#fff] flex justify-center items-center gap-2"
                  >
                    <BiSolidPhoneCall size={16} />
                    Get a Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="float-right py-3 px-5 h-[36px] bg-[#F97B24] font-semibold rounded-l-3xl flex items-center gap-2 shadow-counsel">
          <IoPerson className="text-white" size={16} />
          <p className="text-[12px] text-white">{viewers}+ people viewed</p>
        </div>
        <div className="w-[85vw] md:w-[80vw]  md:h-[90vh] shadow-counsel px-[25px] py-[43px] space-y-2">
          <img
            className="w-full h-[167px] md:h-[300px] object-cover"
            src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1733386822/EduLister/${citySlug}/G-${data?.fields?.Image_Code}.png`}
            alt="img"
          />

          <div className="space-y-2 h-auto">
            <div>
              <p className="text-[1rem]  font-semibold text-background-dark">
                <Link href={`/school/${citySlug}/${data?.fields?.slug}`}>
                  {data?.fields?.name}
                </Link>
              </p>
            </div>
            <div className="flex text-[12px] items-center text-[#898989] gap-2">
              <div>
              <IoLocationSharp className="text-[20px]" />
              </div>
              <div className="w-[90%]">
              <p className=""> {data?.fields?.fullAddress}</p>
              </div>
            </div>
            <StarRating
              rating={data?.fields?.rating}
              review={data?.fields?.numOfReviews}
            />
            <div className="text-[#505050] flex pt-[1px] flex-col ">
              <p className="text-[12px] text-[#898989]">Annual Fees</p>
              <p className="text-[18px] font-semibold text-background-dark ">
                ₹{Number(data?.fields?.feefrom).toLocaleString("en-IN")} - ₹
                {Number(data?.fields?.feeto).toLocaleString("en-IN")}
              </p>
            </div>

            {/* <div className="w-full bg-[#1B6EA1] rounded-l-2xl flex justify-center items-center float-right">
                <div className="flex justify-between text-[10px] text-[#FFFFFF] w-[90%]">
                  <div className="flex flex-col items-center space-y-1">
                    <p className="">Curriculum</p>

            </div>
            </div>
            </div> */}
            <div className="flex  space-x-12 p-3 font-semibold  text-[10px] bg-background-dark rounded-l-2xl text-white   w-[315px]">
              <div className="space-y-3">
                <div className="flex flex-col ">
                  <p className="font-bold text-[11px]">Curriculum</p>
                  <p className=" text-white">
                    {data?.fields?.cbse_schools
                      ? "CBSE"
                      : data?.fields?.icse_isc_schools
                      ? "ICSE/ISC"
                      : data?.fields?.cie_schools
                      ? "CIE"
                      : data?.fields?.ib_schools
                      ? "IB school"
                      : data?.fields?.igcse_schools
                      ? "IGCSE"
                      : null}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-[11px]">School Category</p>
                  <p className="text-white">
                    {data?.fields?.girls_schools
                      ? "Girls School"
                      : data?.fields?.boys_schools
                      ? "Boys School"
                      : data?.fields?.coed_schools
                      ? "Co-Ed"
                      : null}
                  </p>
                </div>

                
              </div>
              <div className="space-y-3">
                <div className="flex flex-col ">
                  <p className="font-bold text-[11px]">School Type</p>
                  <p className="text-white">
                    {data?.fields?.day_schools == true
                      ? "Day School"
                      : data?.fields?.day_boarding_schools
                      ? "Day boarding"
                      : data?.fields?.full_boarding_schools
                      ? "Boarding"
                      : null}
                  </p>
                </div>

                <div className="flex flex-col">
                  <p className="font-bold text-[11px]">Classes</p>
                  <p className="text-white">{data?.fields?.classto}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[80%] pt-4">
              <div className="flex items-center justify-between">
                <p className="text-[#7A7A7A] text-[12px] font-semibold">
                  Infrastructure
                </p>
                <StarRatingper percentage={data?.fields?.Infrastructure} />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#7A7A7A] text-[12px] font-semibold">
                  Academics
                </p>
                <StarRatingper percentage={data?.fields?.Academics} />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#7A7A7A] text-[12px] font-semibold">
                  Administration
                </p>
                <StarRatingper percentage={data?.fields?.Administration} />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#7A7A7A] text-[12px] font-semibold">
                  Extracurricular
                </p>
                <StarRatingper percentage={data?.fields?.Extracurricular} />
              </div>
            </div>
            <div className=" flex gap-2 text-[12px] pt-2">
              <Link
                href={`/school/${citySlug}/${data?.fields?.slug}`}
                className="w-full px-3 py-2 rounded-3xl border border-background-dark text-background-dark flex md:justify-center items-center  gap-2"
              >
                <RiGraduationCapFill size={14} />
                View School
              </Link>

              <button
                onClick={toggleBookingPopup}
                className="w-full px-3 py-2 rounded-3xl bg-background-dark text-[#fff] flex justify-center items-center gap-2"
              >
                <BiSolidPhoneCall size={14} />
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpenpopup && (
              <ConsultationPopup setClose={toggleBookingClosePopup} />
            )}

      <Enquire
         isOpen={isPopupOpen}
         onClose={closePopup}
         school={school?.name}
      />
    </>
  );
};

export default SchoolCardMini;
