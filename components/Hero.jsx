
"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

export default function Hero({ image, height, need }) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [valueSchool, setValueSchool] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLocation, setIsOpenLocation] = useState(false);
  const [selectedSchoolType, setSelectedSchoolType] = useState("School Type"); // Default label
  const [selectedSchoolLocation, setSelectedSchoolLocation] =
    useState("Location"); // Default label

    const dropdownRef = useRef(null); 
    const locationDropdownRef = useRef(null);

  const handleSchoolType = () => {
    setIsOpen(!isOpen);
  };

  const handleSchoolLocation = () => {
    setIsOpenLocation(!isOpenLocation);
  };

  const handleSelectSchoolType = (schoolType) => {
    const formattedSchoolType = schoolType.toLowerCase().replace(/\s+/g, "-");
    setSelectedSchoolType(schoolType);
    // console.log(formattedSchoolType);
    setValueSchool(formattedSchoolType);
    setIsOpen(false);
  };

  const handleSelectSchoolLocation = (schoolLocation) => {
    setSelectedSchoolLocation(schoolLocation);
    setValue(`schools-in-${schoolLocation}`);
    setIsOpenLocation(false);
  };

  const navigatePage = () => {
    if (value !== "" && valueSchool != "") {
      router.push(`/category/${valueSchool}-${value}`);
    }
  };

  const currentPath = usePathname();


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target)) {
        setIsOpenLocation(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <>
      <div className="bg-white text-black">
        <div
          className={`relative bg-center bg-cover bg-no-repeat min-h-[${height}] md:max-h-[${height}]`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="px-8 md:px-20  lg:py-32 space-y-10 md:space-y-6 lg:space-y-10">
            {currentPath === "/" ? (
              <>
                <div className="headfont text-[40px] md:text-[60px] font-bold">
                  <p>Find</p>
                  <p className="text-background-dark">Best School</p>
                  <p>for you</p>
                </div>
                <div className="text-[#666666]">
                  <p>
                    Explore the best Boarding Schools for you, all over India
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="headfont text-[28px] md:text-[60px] text-background-dark font-bold w-full text-center pt-10 mt-20 mb-16 md:mt-0 md:mb-0 ">
                  <p>
                    Find
                    <span> Best School </span>
                    for you
                  </p>
                </div>
              </>
            )}

            <div
              className={`${
                currentPath === "/" ? " " : "justify-center"
              } h-[60px] text-white flex flex-col lg:flex-row gap-10 md:gap-4 `}
            >
              <div
                className={` border-background-dark hidden lg:flex border rounded-md relative`}
              >
                <div
                  className={` border-background-dark text-background-dark flex w-[400px] h-full justify-between items-center border-r p-6 cursor-pointer`}
                  onClick={handleSchoolType}
                >
                  <p>{selectedSchoolType}</p>
                  <IoMdArrowDropdown size={16} />
                </div>

                <div
                  className={` border-background-dark text-background-dark flex w-[200px] h-full justify-between items-center border-l  p-6 cursor-pointer`}
                  onClick={handleSchoolLocation}
                >
                  <p className="capitalize">{selectedSchoolLocation}</p>
                  <IoMdArrowDropdown size={16} />
                </div>
              </div>

              {isOpen && (
                <div ref={dropdownRef} className="absolute top-[16%] lg:top-[20%] left-[2%] md:left-[10%] lg:left-[40%] bg-background-light shadow-md w-[400px]  h-fit overflow-y-scroll rounded-md z-10 scroll-hidden ">
                  <div className="bg-background-light h-full rounded-md py-4 px-2">
                    <ul className="p-2 text-[20px]">
                      <div className="flex justify-between items-center text-white p-4">
                        <p className="font-semibold">Choose School Type</p>
                        <div
                          className="p-2 rounded-full bg-background-dark cursor-pointer"
                          onClick={() => setIsOpen(false)}
                        >
                          <RxCross2 size={16} color="white" />
                        </div>
                      </div>

                      {[
                        "Boarding",
                        "Boys Boarding",
                       
                        "Girls Boarding",
                        "Day Boarding",
                        "Coed Boarding",
                        "ICSE Boarding",
                        "CBSE Boarding",
                      ].map((schoolType, index) => (
                        <div key={index}>
                          <li
                            className="flex items-center p-4 hover:bg-background-dark rounded-md cursor-pointer"
                            onClick={() => handleSelectSchoolType(schoolType)}
                          >
                            <input
                              type="radio"
                              name="schoolType"
                              checked={selectedSchoolType === schoolType}
                              className="mr-2 transform scale-150"
                            />
                            <span>{`${schoolType} School`}</span>
                          </li>
                          {index < 7 && (
                            <hr className="h-[2px] bg-background-dark border-0 w-[350px] m-2" />
                          )}
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {isOpenLocation && (
                <div ref={locationDropdownRef} className="absolute top-[16%] lg:top-[20%] left-[2%] md:left-[10%] lg:left-[40%] bg-white shadow-md w-[400px] h-[550px] overflow-y-scroll rounded-md z-10 scroll-hidden ">
                  <div className="bg-background-light rounded-md py-4 px-2">
                    <ul className="p-2 text-[20px]">
                      <div className="flex justify-between items-center text-white p-4">
                        <p className="font-semibold">Choose Location</p>
                        <div
                          className="p-2 rounded-full cursor-pointer"
                          onClick={() => setIsOpenLocation(false)}
                        >
                          <RxCross2 size={16} color="white" />
                        </div>
                      </div>
                      {[
                        "dehradun",
                        "mussoorie",
                        "shimla",
                        "bangalore",
                        "india",

                        "nainital",

                        "panchgani",

                        "hyderabad",
                        "pune",
                      ].map((schoolLocation, index, array) => {
                        return (
                          <div key={index}>
                            <li
                              className="flex items-center p-4 hover:bg-background-dark rounded-md cursor-pointer"
                              onClick={() =>
                                handleSelectSchoolLocation(schoolLocation)
                              }
                            >
                              <input
                                type="radio"
                                name="schoolLocation"
                                checked={
                                  selectedSchoolLocation === schoolLocation
                                }
                                className="mr-2 transform scale-150"
                              />
                              <span className="capitalize">
                                {schoolLocation}
                              </span>
                            </li>
                            {index < array.length - 1 && (
                              <hr className="h-[2px] bg-background-dark border-0 w-[350px]" />
                            )}
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}

              <div
                className={`${
                  currentPath === "/" ? " " : "mt-20 sm:mt-32 md:mt-20"
                } lg:hidden space-y-4 `}
              >
                <div
                  className={`border-background-dark text-background-dark flex w-full md:w-[80%] justify-between items-center border  rounded-md  p-4`}
                  onClick={handleSchoolType}
                >
                  <p className="">{selectedSchoolType}</p>
                  <IoMdArrowDropdown size={16} />
                </div>
                <div
                  className={`border-background-dark text-background-dark flex w-full md:w-[80%] justify-between items-center border  rounded-md  p-4`}
                  onClick={handleSchoolLocation}
                >
                  <p className=" capitalize">{selectedSchoolLocation}</p>
                  <IoMdArrowDropdown size={16} />
                </div>
              </div>

              <div>
                <button
                  onClick={navigatePage}
                  className="bg-background-dark px-6 py-4 text-white rounded-md border border-white"
                >
                  <div className="flex gap-2 items-center">
                    <p>Search School</p>
                    <CiSearch size={16} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}