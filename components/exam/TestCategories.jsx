'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function TestCategories() {
  const [isButtonDisabled, setButtonDisabled] = useState(false); 
  const router = useRouter();

  const handleButtonClick = () => {
    setButtonDisabled(true); 
    router.push('/exam/register');
  };
  return (
    <div>
      <div className="w-[100vw] md:w-[84vw] mx-auto p-5">
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
            Test Categories
          </p>
          <div>
            <div className="flex flex-col md:flex-row gap-2 justify-between mt-[30px] md:mt-[50px]">
              <div className="border-2 md:border-4 rounded-lg border-[#F178B6] bg-[#F6FBFF] p-4 md:p-10 w-[350px] h-[160px] md:h-[340px] md:w-[365px] space-y-1 md:space-y-3">
                <div className="flex md:flex-col justify-between">
                  <p className="text-[24px] md:text-[36px] flex md:flex-col font-semibold text-[#02618f]">
                    Primary School{" "}
                  </p>
                  <p className="text-[16px] md:text-[24px] flex md:flex-col font-semibold text-[#02618f]">
                    Class 1-5
                  </p>
                </div>

                <p className="text-[12px] md:text-[16px] md:hidden xl:block">
                  This level of testing focuses on evaluating how well young
                  children adjust to being away from home, how well they
                  interact with others, & how comfortable they are in unfamiliar
                  settings.
                </p>
              </div>
              <div className="border-2 md:border-4 rounded-lg border-[#025498] bg-[#F6FBFF] p-4 md:p-10 w-[350px] h-[160px] md:h-[340px] md:w-[365px] space-y-1 md:space-y-3">
                <div className="flex md:flex-col justify-between">
                  <p className="text-[24px] md:text-[36px] flex md:flex-col font-semibold text-[#02618f]">
                    Middle School{" "}
                  </p>
                  <p className="text-[16px] md:text-[24px] flex md:flex-col font-semibold text-[#02618f]">
                    Class 6-8
                  </p>
                </div>

                <p className="text-[12px] md:text-[16px] md:hidden xl:block">
                  Assesses preteens for emotional development, emotional
                  maturity, and coping strategies for social and academic
                  pressures.
                </p>
              </div>
              <div className="border-2 md:border-4 rounded-lg border-[#1D99FA] bg-[#F6FBFF] p-4 md:p-10 w-[350px] h-[160px] md:h-[340px] md:w-[365px] space-y-1 md:space-y-3">
                <div className="flex md:flex-col justify-between">
                  <p className="text-[24px] md:text-[36px] flex md:flex-col font-semibold text-[#02618f]">
                    Senior School{" "}
                  </p>
                  <p className="text-[16px] md:text-[24px] flex md:flex-col font-semibold text-[#02618f]">
                    Class 9-12
                  </p>
                </div>

                <p className="text-[12px] md:text-[16px] md:hidden xl:block">
                  Examines students' self-discipline, complex social dynamics,
                  and preparedness for future academic objectives in addition to
                  their readiness for harder academic challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
