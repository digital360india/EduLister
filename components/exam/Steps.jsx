import React from "react";

export default function Steps() {
  return (
    <div>
      <div className="hidden md:grid place-content-center">
        <div className="relative flex flex-col justify-between h-[900px] z-20 ">
          <div className="absolute left-[80px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="772"
              viewBox="0 0 2 772"
              fill="none"
            >
              <path
                d="M1 1L0.999966 771"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="bevel"
                stroke-dasharray="10 10"
              />
            </svg>
          </div>
          <div className="flex">
            <div className="relative z-0 w-[160px] h-[160px] bg-[#02618f] text-white text-[64px] rounded-full md:flex items-center justify-center">
              1
            </div>
            <div className="absolute left-[200px]">
              <p className="text-[32px] font-semibold">Registration</p>
              <p className="text-[20px] mt-2 w-[300px] xl:w-[430px] h-[150px]">
              You(student) will begin by registering and providing essential and academic information. Further, you will receive a unique code on your registered email, once the payment is complete. 
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="absolute right-[200px]">
              <p className="text-[32px] font-semibold">Assesment Test</p>
              <p className="text-[20px] mt-2 xl:w-[430px] h-[150px]">
              You will then, undertake a thorough psychological test. 
              <span className="hidden xl:block">This test is composed of various scenarios and questions, crafted to measure their emotional maturity, social adaptability, and academic readiness for the unique environment of a boarding school.
              </span>
              </p>
            </div>
            <div className="relative w-[160px] h-[160px] bg-[#02618f] text-white text-[64px] rounded-full md:flex items-center justify-center">
              2
            </div>
          </div>

          <div className="flex">
            <div className="relative w-[160px] h-[160px] bg-[#02618f] text-white text-[64px] rounded-full md:flex items-center justify-center">
              3
            </div>
            <div className="absolute left-[200px]">
              <p className="text-[32px] font-semibold">Analysis, Feedback, and Counseling Session</p>
              <p className="hidden xl:block text-[20px] mt-2 xl:w-[430px] h-[150px]">
              Soon after the test, experts will analyze the results and you will receive comprehensive feedback which includes strengths, areas for growth, and suitability for boarding school life. This stage also includes a short counseling session with a psychologist. This session aims to discuss the results in more detail, address any concerns, and provide guidance and support to help the student in their transition to boarding school.

              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden mt-[20px]">
        <div className="relative flex flex-col justify-between h-[500px] ">
          <div className="absolute left-[33px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="320"
              viewBox="0 0 2 298"
              fill="none"
            >
              <path
                d="M1 1L1.00001 297"
                stroke="black"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="bevel"
                stroke-dasharray="10 10"
              />
            </svg>
          </div>
          <div className="flex justify-between">
            <div className="relative w-[70px] border-2 border-[#02618f] bg-white h-[70px] text-[#02618f] text-[24px]  rounded-full flex items-center justify-center">
              1
            </div>
            <div>
              <p className="text-[16px] font-semibold">Registration</p>
              <p className="text-[12px] mt-2 w-[260px]">
              You(student) will begin by registering and providing essential and academic information. Further, you will receive a unique code on your registered email, once the payment is complete. 
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="relative w-[70px] border-2 border-[#02618f] bg-white h-[70px] text-[#02618f] text-[24px]  rounded-full flex items-center justify-center">
              2
            </div>
            <div>
              <p className="text-[16px] font-semibold">Compatibility Test</p>
              <p className="text-[12px] mt-2 w-[260px]">
              You will then, undertake a thorough psychological test. This test is composed of various scenarios and questions, crafted to measure their emotional maturity, social adaptability, and academic readiness for the unique environment of a boarding school.
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="relative w-[70px] border-2 border-[#02618f] bg-white h-[70px] text-[#02618f] text-[24px]  rounded-full flex items-center justify-center">
              3
            </div>
            <div>
              <p className="text-[16px] font-semibold">Analysis & Counseling Session </p>
              <p className="text-[12px] mt-2 w-[260px]">
              Soon after the test, experts will analyze the results and you will receive comprehensive feedback which includes strengths, areas for growth, and suitability for boarding school life. This stage also includes a short counseling session with a psychologist. This session aims to discuss the results in more detail, address any concerns, and provide guidance and support to help the student in their transition to boarding school.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
