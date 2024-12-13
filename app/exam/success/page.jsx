'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Success() {
  const [userData, setUserData] = useState({ studentName: "", uniqueId: "" });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserData({
        studentName: user.studentName,
        uniqueId: user.uniqueId
      });
    }
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center h-[100vh] flex justify-center items-center"
        style={{ backgroundImage: 'url("background.svg")' }}
      >
        <div className="h-[80vh] w-[80vw] flex bg-white shadow-lg flex-col justify-evenly items-center rounded-lg text-[#02618f]">
          <div className="mt-10">
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif"
              alt="🥳"
              width="256"
              height="256"
            ></img>
          </div>

          <div className="flex flex-col justify-center gap-5 items-center">
            <p className="text-[36px] font-semibold">Wohoo.. {userData.studentName}</p>
            <p className="text-[24px]">You’ve completed your test</p>
            <p className="text-[24px]">Your Unique ID: {userData.uniqueId}</p>

            <Link
              className="bg-[#02618f] text-base text-[#FFFFFF] text-center p-2 rounded-lg w-[160px] md:w-[184px] h-[40px] font-semibold"
              href="/"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
