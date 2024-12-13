'use client'
import React, { useState } from "react";
import Steps from "./Steps";
import { useRouter } from "next/navigation";

export default function About() {
  const text =
    "The Student Assesment Test is a Comprehensive Tool, especially designed to assess whether a student possesses the psychological and emotional maturity, necessary for thriving in a Boarding School environment. The test is rigorously prepared by expert psychologists to analyze a few key behavioral factors such as adaptability, emotional resilience, social skills, and academic preparedness, in a student, which are crucial for a successful boarding school experience.";

  const [isTruncated, setTruncated] = useState(true);
  const [isButtonDisabled, setButtonDisabled] = useState(false); 
  const router = useRouter();

  const toggleTruncate = () => {
    setTruncated(!isTruncated);
  };

  const handleButtonClick = () => {
    setButtonDisabled(true); 
    router.push('/exam/register');
  };

  return (
    <div>
      <div
        className=" bg-cover bg-center h-[840px] md:h-[1680px] "
        style={{ backgroundImage: 'url("background.svg")', }}
      >
        <div className="w-[100vw] md:w-[84vw] mx-auto p-5">
          <div>
            <div className=" text-white text-[24px] md:mt-[70px] font-semibold  mx-auto grid place-content-center">
              <button
                disabled={isButtonDisabled} // Button disabled condition
                onClick={handleButtonClick}
                className={`${
                  isButtonDisabled ? "bg-gray-400 " : "bg-[#02618f]"
                } w-[320px] md:w-[411px] h-[40px] md:h-[60px] rounded-lg`}
              >
                {isButtonDisabled ? "Test Taken" : "Take Test"}
              </button>
            </div>

            <div className=" mt-[30px] md:mt-[70px]">
              <p className="text-[24px] md:text-[42px] text-[#02618f] font-semibold">
                About
              </p>
              <div>
                <p
                  className={`text-[12px] md:text-[20px] mt-[10px] md:mt-[20px] ${
                    isTruncated ? "line-clamp-3 md:line-clamp-5" : ""
                  }`}
                >
                  {text}
                </p>
                <button
                  onClick={toggleTruncate}
                  className="text-blue-500 text-[12px] md:hidden"
                >
                  {isTruncated ? "read more" : "read less"}
                </button>
              </div>
            </div>

            <div className=" mt-[30px] md:mt-[70px]">
              <p className="text-[24px] md:text-[42px] text-[#02618f] font-semibold">
                Procedure
              </p>
              <div>
                <Steps />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
