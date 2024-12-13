"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ConsultationPopup from "./ConsultationPopup";

export default function Blink() {
  const [isOpenpopup, setIsOpenpopup] = useState(false);

  const circleRef = useRef(null);
  const maskRef = useRef(null);

  const toggleBookingPopup = () => {
    setIsOpenpopup(true);
  };

  const toggleBookingClosePopup = () => {
    setIsOpenpopup(false);
  };

  useEffect(() => {
    const mask = maskRef.current;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.to(mask, {
      scale: 30,
      opacity: 0.1,
      duration: 2,
      ease: "power2.inOut",
    })
      .to(
        mask,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .set(mask, {
        scale: 1,
        opacity: 0.3,
      });
  }, []);

  return (
    <>
      <div
        className="absolute top-[156px] right-8 md:top-[137px] md:right-[185px] cursor-pointer flex"
        onClick={toggleBookingPopup}
      >
        <div className="w-[270px] md:w-[300px] z-10">
          <p
            style={{ boxShadow: "0px 2.1px 6.31px 0px #0000004D" }}
            className="rounded-l-2xl p-[10px] text-[11px] md:text-[12px] text-[#323232] cursor-pointer z-10"
          >
            No more struggle to find your Best School. <br />
            <span className="font-bold">Click here</span> to talk to our
            counselor today.
          </p>
        </div>
        <Image
          src="/goEdulogo.svg"
          alt="logo"
          width={1000}
          height={1000}
          className="w-[50px] h-[50px] z-30"
        />
      </div>

      <div className="overflow-hidden w-full h-screen relative bg-gray-100">
        <div className="absolute top-[132px] right-2 md:top-28 md:right-40 z-20">
          <div
            ref={circleRef}
            className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-background-dark to-background-light"
          ></div>
          <div
            ref={maskRef}
            className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-background-dark to-background-light"
          ></div>
        </div>
      </div>

      {isOpenpopup && <ConsultationPopup setClose={toggleBookingClosePopup} />}
    </>
  );
}
