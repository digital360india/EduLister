import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="  bg-[#F3F3F3] text-[#323232] ">
      <div className="p-8 ">
        <div className=" flex flex-col justify-between sm:flex-row gap-2 sm:gap-0    md:p-8 ">
          <div className="flex  flex-col  sm:items-center gap-3 lg:w-[25vw]       ">
            <div className="space-y-5 text-[14px] ">
              <Image
                width={1000}
                height={1000}
                alt="logo"
                src="/GoEdu (4) 3.svg"
                className="w-[60px] h-[60px]"
              />

              <div className="space-y-2 text-[12px] md:text-[14px] font-semibold text-[#323232]">
                <p className="text-[20px] text-[#323232] md:hidden">Contact</p>
                {/* <div className="flex gap-2">
                  <Image
                    width={1000}
                    height={1000}
                    alt="logo"
                    src="/Location.svg"
                    className="w-[20px] h-[20px]"
                  />
                  <p className="">B, 36, Nehru Colony Rd, C Block, Nehru Colony, Dalanwala, Dehradun, Uttarakhand 248001</p>{" "}
                </div> */}

                <div className="flex gap-2">
                  <Image
                    width={1000}
                    height={1000}
                    alt="logo"
                    src="/Phone.svg"
                    className="w-[20px] h-[20px]"
                  />
                  <p>+91-01353530324</p>{" "}
                </div>

                <div className="flex gap-2">
                  <Image
                    width={1000}
                    height={1000}
                    alt="logo"
                    src="/Phone.svg"
                    className="w-[20px] h-[20px]"
                  />
                  <p>+91-9557695360</p>{" "}
                </div>

                <div className="flex gap-2">
                  <Image
                    width={1000}
                    height={1000}
                    alt="logo"
                    src="/Mail.svg"
                    className="w-[20px] h-[20px]"
                  />
                  <p>
                    <a href="mailto:edulisterindia@gmail.com">edulisterindia@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="    lg:w-[25vw]  text-[18px] gap-4  sm:flex  ">
            <div>
              <div>
                <p className=" font-semibold my-4 text-left text-[#323232] text-[20px] md:text-[1.5rem]">
                  Important Links
                </p>
              </div>
              <div className="flex gap-32  md:gap-10 text-left text-[12px] text-[#323232] md:text-[14px] font-semibold ">
                <div className="flex flex-col space-y-3">
                  <Link href={"/"}>Home</Link>
                  <Link href={"/about"}>About</Link>
                  <Link href={"/sitemap.xml"}>Sitemap</Link>
                </div>
                <div className="flex flex-col space-y-3 ">
                  <Link href={"/"}>Blogs</Link>
                  <Link href={"/privacy-policy"}>Privacy Policies</Link>

                  <Link href={"/terms-and-condition"}>Terms & Condition</Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p className=" font-semibold my-4 text-left text-[20px] text-[#323232] md:text-[1.5rem]">
                Follow us on
              </p>
            </div>
            <div className="text-xl  flex gap-14 md:gap-7 mt-2  md:mt-4">
              <Link
                href="https://www.facebook.com/edulisterindia?mibextid=ZbWKwL"
                target="_blank"
              >
                <BsFacebook />
              </Link>
              {/* 
              <Image
                src="/TwitterX.svg"
                alt="twitter"
                width={1000}
                height={1000}
                className="w-[23px] h-[23px]"
              /> */}
              {/* 
              <Link href="/" target="_blank">
                <BsLinkedin />
              </Link> */}

              <Link
                href="https://www.instagram.com/edulister_india/?igsh=MWxkMzV5cDNndnplaQ%3D%3D"
                target="_blank"
              >
                <BsInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
