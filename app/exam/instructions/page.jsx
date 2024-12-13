"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Instructions() {
  const [studentName, setStudentName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [msg, setMsg] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.studentName) {
        setStudentName(user.studentName);
      }
    }
  }, []);

  const handleCheckboxChange = () => {
    setMsg("");
    setIsChecked(!isChecked);
  };

  const handleCheck = () => {
    if (isChecked) {
      router.push("/exam/paper"); // Next.js routing to '/exam' page
    } else {
      setMsg("*");
    }
  };

  return (
    <div>
      <div
        className="bg-cover bg-center h-[100vh] text-[#02618f]"
        style={{ backgroundImage: 'url("/background.svg")' }} // Ensure correct image path
      >
        <div className="w-[100vw] md:w-[80vw] mx-auto pt-[73px]">
          <div className="bg-white rounded-lg w-[80vw] mx-auto h-fit p-5 md:p-6 shadow-md">
            <p className="md:text-[48px] text-[32px] font-semibold capitalize flex justify-center items-center">
              Welcome {studentName}!
            </p>

            <p className="text-[28px] md:text-[36px] font-semibold pt-4">
              Student Assesment Test
            </p>

            <p className="text-[18px] md:text-[24px] font-semibold pt-6">
              Instructions for the Student Assessment
            </p>
            <div className="max-h-[270px] p-4">
              <div className="text-[16px] md:text-base space-y-4">
                <div>
                  Welcome to our Student Assessment Test! This test will help us
                  understand which boarding school might be the best fit for
                  you. Here&apos;s what you need to know:
                </div>

                <div className="space-y-2">
                  <ol className="list-decimal list-inside space-y-1">
                    <li>
                      <b>One-Time Answer:</b> Once you pick an answer, you can&apos;t
                      change it, so think before you click.
                    </li>
                    <li>
                      <b>Follow the Path:</b> You&apos;ll answer each question in the
                      order it comes. You can&apos;t skip ahead or go back.
                    </li>
                    <li>
                      <b>Time Limit:</b> You have 15 minutes to finish the test.
                      There&apos;s no rush, but keep an eye on the clock.
                    </li>
                    <li>
                      <b>Save and Exit:</b> You have the option to save your
                      progress and exit the test at any point. You can resume
                      the test later from where you left off.
                    </li>
                    <li>
                      <b>Be Honest:</b> Your answers should reflect how you
                      truly feel. This will help us find the best school for
                      you.
                    </li>
                    <li>
                      <b>Complete All Questions:</b> Make sure you answer every
                      question to get the best results.. Good luck with your
                      assessment! You&apos;ve got this!
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="flex items-center pt-6">
              <input
                type="checkbox"
                id="agreeToTAndC"
                name="agreeToTAndC"
                className="form-radio h-5 w-5"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="agreeToTAndC" className="ml-2">
                <span className="text-red-500">{msg}</span> By starting this
                test, you acknowledge that you have read, understood, and agreed
                to these Terms and Conditions.
              </label>
            </div>

            <div className="pt-8">
              <button
                className="text-white text-base rounded-lg w-[160px] md:w-[184px] h-[40px] font-semibold"
                onClick={handleCheck}
                style={{ backgroundColor: "#02618f" }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
