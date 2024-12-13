"use client";
import React from "react";
// import MascotAnimation from "./MascotAnimation";
import Image from "next/image";

const AboutUsSchool123 = () => {
  return (
    <>
      {/* <div className="absolute">
        <MascotAnimation />
      </div> */}

      <div className="bg-background-dark">
        <h1
          className="text-[#FFFFFF] text-[50px] md:text-[200px] text-center pt-40 md:pt-0 md:mt-20"
          style={{ fontFamily: "League Gothic" }}
        >
          About Us
        </h1>

        {/* <Image
              src="/abouteduline.svg"
              width={1000}
              height={1000}
              alt="line"
              className="w-[350px] h-[250px] absolute bottom-40 left-20 hidden md:block"
            /> */}
        <div className="flex justify-center items-center mb-20">
          <Image
            src="/GoEdu (4) 3.svg"
            alt="about"
            width={1000}
            height={1000}
            className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] bg-white p-1 rounded-full "
          />
        </div>

        <h2 className="text-center text-white text-[30px] mb-5">
          Let&apos;s Begin !!
        </h2>
        <div className="flex justify-center items-center pb-10">
          <Image
            src="/downarrowedu.svg"
            width={1000}
            height={1000}
            alt="down"
            className="w-[40px] h-[40px] cursor-pointer"
            onClick={() => {
              document.getElementById("scroll-target").scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>

      <div
        id="scroll-target"
        className="sm:mt-12 text-[#323232] md:px-[100px]  pb-12 md:pb-0"
      >
        <div className="bg-[#F8F8F8] px-7 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left hidden md:block">
              
              WHO WE ARE

              </p>
              <p className="text-[12px] sm:text-[20px] text-justify mt-4 ">
              Edu Lister is a trailblazing online platform that connects families and students with the best boarding schools across India. We provide a one-stop resource featuring detailed school profiles, helping parents and students make well-informed decisions quickly and confidently.

              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center space-y-2 md:space-y-4 order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                About Us
              </p>
              <img
                src="/GoEdu (4) 3.svg"
                className="w-[100px] h-[130px] md:h-[160px] md:w-[150px]"
                alt="Mission logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center  md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-5 md:gap-0">
              <img
                src="./ourpassion.svg"
                className="w-[100px] h-[110px] md:h-[160px] md:w-[150px]"
                alt="Passion logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold md:hidden">
              OUR PASSION FOR EDUCATION
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                Guided by Educational Excellence
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
              At Edu Lister, we are driven by a deep passion for quality education and the belief in the transformative potential of boarding schools. Our dedicated team works tirelessly to ensure our platform highlights the diversity and excellence of boarding education in India, catering to a wide range of needs and preferences.

              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-center  md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center pb-4 md:text-left hidden md:block">
              HONEST AND RELIABLE INFORMATION

              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
              We are committed to providing accurate and transparent information. Edu Lister ensures parents and students receive up-to-date, reliable details about each boarding school. Our platform is designed to present an unbiased view, helping families find the best fit for their educational goals.

              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                Making School Selection Easy
              </p>
              <img
                src="./ourmission.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Mission logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-8 md:gap-0">
              <img
                src="/consult.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Consultation logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold  md:hidden">
              OUR GOAL

              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                Our Goal
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
              Our goal at Edu Lister is to simplify the search for the perfect boarding school. We strive to be India’s leading resource for boarding education, offering families an easy-to-navigate platform that saves both time and effort. We also give schools a space to showcase their unique features to a national audience.

              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left pb-4 hidden md:block">
              BRINGING FAMILIES AND SCHOOLS TOGETHER
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
              Edu Lister connects India’s top boarding schools with families seeking the best educational opportunities for their children. Schools can reach a wider audience, while parents and students can access a curated selection of schools that meet our rigorous standards.

              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                Your Path to Informezzd Choices
              </p>
              <img
                src="/joinus.svg"
                className="w-[100px] h-[130px] md:h-[160px] md:w-[150px]"
                alt="Join us logo"
              />
            </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-8 md:gap-0">
              <img
                src="/consult.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Consultation logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold  md:hidden">
              OUR GOAL

              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
              GUIDANCE AND SUPPORT

              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
              We offer personalized guidance to families, helping them choose the right boarding school. Our team of experts is always available to answer questions and provide support, ensuring every family makes an informed choice.


              </p>
            </div>
          </div>



          
        </div>
      </div>
    </>
  );
};

export default AboutUsSchool123;
