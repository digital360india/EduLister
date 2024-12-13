"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SchoolStats from "./Schoolstats";
import Mobiletable from "./Mobiletable";

const CompareCard = () => {
  return (
    <div className="hidden lg:block px-3 p-4 space-y-4 border-r border-custom-rgba last:border-none flex-1 pt-10 font-poppins">
      <h3 className="text-center text-[#540000] font-semibold">Compare By:</h3>
      <div className="flex flex-col space-y-2 px-6">
        <button className="w-40 h-10 border border-[#AD0000]  text-[#AD0000] rounded">
          <a href="#">School Stats</a>
        </button>
        <button className="w-40 h-10 border border-[#AD0000] text-[#AD0000] rounded">
          <a href="#">School Details</a>
        </button>
        <button className="w-40 h-10 border border-[#AD0000] text-[#AD0000] rounded">
          <a href="#">School Fees</a>
        </button>
        <button className="w-40 h-10 border border-[#AD0000] text-[#AD0000] rounded">
          <a href="#">Facilities</a>
        </button>
      </div>
    </div>
  );
};

const schoolsData = {
  school1: {
    type: "Public",
    board: "CBSE",
    category: "Co-Ed",
    classesFrom: "Nursery",
    establishedIn: "1980",
    admissionDetails: "Online",
    principalName: "Dr. Smith",
    chairmanName: "Mr. Johnson",
    maxFees: "50000",
    minFees: "20000",
    onlineClass: "Yes",
    smartClass: "Yes",
    swimmingPool: "No",
    tennisCourt: "Yes",
    indoorGames: "Yes",
    playGround: "Yes",
  },
  school2: {
    type: "Private",
    board: "NIST",
    category: "Girls",
    classesFrom: "Class 1",
    establishedIn: "1990",
    admissionDetails: "Offline",
    principalName: "Ms. Jane",
    chairmanName: "Mr. Doe",
    maxFees: "60000",
    minFees: "25000",
    onlineClass: "No",
    smartClass: "Yes",
    swimmingPool: "Yes",
    tennisCourt: "No",
    indoorGames: "Yes",
    playGround: "No",
  },
  school3: {
    type: "Government",
    board: "ICSE",
    category: "Girls",
    classesFrom: "Class 1",
    establishedIn: "1990",
    admissionDetails: "Offline",
    principalName: "Ms. Alex",
    chairmanName: "Mr. Doe",
    maxFees: "60000",
    minFees: "25000",
    onlineClass: "No",
    smartClass: "Yes",
    swimmingPool: "Yes",
    tennisCourt: "No",
    indoorGames: "Yes",
    playGround: "No",
  },
  school4: {
    type: "Semi",
    board: "UP",
    category: "Boys",
    classesFrom: "Class 1",
    establishedIn: "1990",
    admissionDetails: "Offline",
    principalName: "Ms. Noname",
    chairmanName: "Mr. Doe",
    maxFees: "60000",
    minFees: "25000",
    onlineClass: "Yes",
    smartClass: "Yes",
    swimmingPool: "Yes",
    tennisCourt: "No",
    indoorGames: "No",
    playGround: "No",
  },
};

const schoolsData1 = {
  dehradun: ["School school school school school", "The Selaqui Great Indian associated International ", "School 3", "School 4"],
  mussoorie: ["School 5", "School 6", "School 7", "School 8"],
};

const schoolDetails = {
  "School school school school school": { image: "/s3.jpg", description: "Description for School 1" },
  "The Selaqui Great Indian associated International ": { image: "/s1.jpg", description: "Description for School 2" },
  "School 3": { image: "/s2.jpg", description: "Description for School 3" },
  "School 4": { image: "/s4.jpg", description: "Description for School 4" },
  "School 5": {
    image: "/mission.png",
    description: "Description for School 5",
  },
  "School 6": {
    image: "/mission.png",
    description: "Description for School 6",
  },
  "School 7": {
    image: "/mission.png",
    description: "Description for School 7",
  },
  "School 8": {
    image: "/mission.png",
    description: "Description for School 8",
  },
};

const SchoolCard = ({
  index,
  selectedSchool,
  suggestion,
  handleSelectSchool,
  handledeletecard,
}) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (location && selectedSchool) {
      handleSelectSchool(index, location, selectedSchool);
    }
  }, [location, selectedSchool]);

  return (
    <div
      className="w-auto pb-4 h-auto sm:w-[200px] sm:h-auto px-3   border-r border-custom-rgba last:border-none flex-1 font-poppins"
      
    >
      <div className="flex justify-center">
        {!selectedSchool && !suggestion && (
          <div className="mt-7 w-20 h-20 rounded-full border border-custom-rgba flex items-center justify-center">
            <Image src="/image.png" alt="Add Image" width={34} height={34} />
          </div>
        )}
      </div>
      {!selectedSchool && !suggestion ? (
        <>
          <h3 className="mt-6 mb-4 text-center text-red-800">Add school</h3>
          <div className="space-y-2">
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 text-red-800 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-custom-rgba"
              >
                <option value="">Location</option>
                <option value="dehradun">Dehradun</option>
                <option value="mussoorie">Mussoorie</option>
               
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <select
                value={selectedSchool}
                onChange={(e) =>
                  handleSelectSchool(index, location, e.target.value)
                }
                className="w-full px-3 py-2 text-red-800 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-custom-rgba"
                disabled={!location}
              >
                <option value="">School Name</option>
                {location &&
                  schoolsData1[location].map((school) => (
                    <option key={school} value={school}>
                      {school}
                    </option>
                  ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </>
      ) : suggestion ? (
        <>
          {!selectedSchool ? (
            <>
              <div className=" items-center space-y-2">
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-2 w-full px-3 py-2 text-red-800 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-custom-rgba"
                  >
                    <option value="">Location</option>
                    <option value="dehradun">Dehradun</option>
                    <option value="mussoorie">Mussoorie</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

                <div className="relative ">
                  <select
                    value={selectedSchool}
                    onChange={(e) =>
                      handleSelectSchool(index, location, e.target.value)
                    }
                    className="w-full px-3 py-2  text-red-800 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-custom-rgba"
                    disabled={!location}
                  >
                    <option value="">School Name</option>
                    {location &&
                      schoolsData1[location].map((school) => (
                        <option key={school} value={school}>
                          {school}
                        </option>
                      ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>

                {/*  */}

                <div className="">
                  <Image
                    className=" w-[15px] h-[15px]  rounded-full  border border-red-800 cursor-pointer  bg-white relative left-[110px] top-[10px] sm:relative sm:left-[200px] sm:top-[10px]"
                    src="/cross-solid.png"
                    alt="cross image"
                    width={25}
                    height={25}
                    onClick={() => handledeletecard(index)}
                  />
                  <div className="flex justify-center">
                    <Image
                      className="w-[100px] h-[60px] sm:w-[202px] sm:h-[100px] rounded-lg "
                      src={schoolDetails[suggestion].image}
                      alt={suggestion}
                      width={100}
                      height={110}
                    />
                  </div>
                </div>

                <h3 className="overflow-hidden pb-2 sm:pb-0  text-center text-red-800 font-semibold">
                  {suggestion} <br /> 
                  <u className="cursor-pointer text-[#AD0000] ">Compare+</u>
                </h3>
              </div>
            </>
          ) : (
            <div className="">
                <Image
                  className="rounded-full w-[20px] h-[20px] border border-red-800 cursor-pointer  bg-white relative left-[110px] top-[10px] sm:relative sm:left-[200px] sm:top-[10px] "
                  src="/cross-solid.png"
                  alt="cross image"
                  width={10}
                  height={10}
                  onClick={() => handledeletecard(index)}
                />
              <div className="flex flex-col justify-center items-center space-y-4 ">
                {/* <div className=""> */}
                  <Image
                    className="w-[114px] h-[70px] sm:w-[252px] sm:h-[160px] rounded-lg  "
                    style={{ boxShadow: "0px 0px 2px 0.25px #00000040" }}
                    src={schoolDetails[selectedSchool].image}
                    alt={selectedSchool}
                    width={96}
                    height={96}
                  />
                {/* </div> */}
                <h3 className="overflow-hidden text-center text-red-800 font-semibold">
                  {selectedSchool}
                </h3>
                <div className="flex justify-center pb-3 sm:pb-0">
                  <button className=" px-4 py-2 bg-[#AD0000] sm:mb-4 text-white rounded hover:bg-red-800">
                    View School
                  </button>
                </div>
              </div>
            </div>
          )}
          
        </>
      ) : (
        

        <div className="">
                <Image
                  className="rounded-full w-[20px] h-[20px] border border-red-800 cursor-pointer  bg-white 
                  relative left-[120px] top-[10px] sm:relative sm:left-[200px] sm:top-[10px] "
                  src="/cross-solid.png"
                  alt="cross image"
                  width={10}
                  height={10}
                  onClick={() => handledeletecard(index)}
                />
              <div className="flex flex-col justify-center items-center space-y-4  ">
                {/* <div className=""> */}
                  <Image
                    className="w-[114px] h-[70px] sm:w-[252px] sm:h-[160px] rounded-lg  "
                    style={{ boxShadow: "0px 0px 2px 0.25px #00000040" }}
                    src={schoolDetails[selectedSchool].image}
                    alt={selectedSchool}
                    width={96}
                    height={96}
                  />
                {/* </div> */}
                <h3 className="overflow-hidden text-center text-red-800 font-semibold">
                  {selectedSchool}
                </h3>
                <div className="flex justify-center">
                  <button className="mb-2 px-3 py-2   sm:px-4 sm:py-2 bg-[#AD0000] text-white rounded hover:bg-red-800">
                    View School
                  </button>
                </div>
              </div>
            </div>
      )}
    </div>
  );
};

export default function CardAfterSchoolSelec() {
  const [selectedSchools, setSelectedSchools] = useState([
    null,
    null,
    null,
    null,
  ]);
  const [suggestions, setSuggestions] = useState([null, null, null, null]);

  const handleSelectSchool = (index, location, schoolName) => {
    const newSelectedSchools = [...selectedSchools];
    newSelectedSchools[index] = schoolName;
    setSelectedSchools(newSelectedSchools);

    if (location) {
      const availableSchools = schoolsData1[location].filter(
        (school) => !newSelectedSchools.includes(school)
      );


      const newSuggestions = [...suggestions];
      newSelectedSchools.forEach((selected, i) => {
        if (i !== index && !selected) {
          newSuggestions[i] = availableSchools.shift() || null;
        }
      });

      setSuggestions(newSuggestions);
    }
  };

  const handledeletecard = (index) => {
    const newSelectedSchools = [...selectedSchools];
    newSelectedSchools[index] = null;
    setSelectedSchools(newSelectedSchools);

    const newSuggestions = [...suggestions];
    newSuggestions[index] = null;
    setSuggestions(newSuggestions);
  };

  return (
    <div className="px-10 py-10 bg-gray-100  shadow-lg mb-7  sm:bg-gray-100 sm:py-15 sm:px-20  font-poppins">
      <div className="sticky top-0 left-0  bg-white border  border-custom-rgba sm:max-w-7xl sm:mx-auto sm:border sm:border-custom-rgba">
        <div className=" hidden bg-[#F8F8F8]  sm:flex sm:flex-wrap">
          <CompareCard />
          {selectedSchools.map((selectedSchool, index) => (
            <SchoolCard
              key={index}
              index={index}
              selectedSchool={selectedSchool}
              suggestion={suggestions[index]}
              handleSelectSchool={handleSelectSchool}
              handledeletecard={handledeletecard}
            />
          ))}
        </div>

        <div className="sticky top-0 flex lg:hidden sm:hidden ">
          {selectedSchools.slice(0, 2).map((selectedSchool, index) => (
            <SchoolCard
              key={index}
              index={index}
              selectedSchool={selectedSchool}
              suggestion={suggestions[index]}
              handleSelectSchool={handleSelectSchool}
              handledeletecard={handledeletecard}
            />
          ))}
        </div>
      </div>
      <div className="">
        {selectedSchools.some((school) => school) && (
          <div className="">
            <SchoolStats
              selectedSchools={selectedSchools}
              schoolsData={schoolsData}
            />
          </div>
        )}

        {selectedSchools.some((school) => school) && (
          <div className="">
            <Mobiletable
              selectedSchools={selectedSchools}
              schoolsData={schoolsData}
            />
          </div>
        )}
      </div>
    </div>
  );
}
