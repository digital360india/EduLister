import Hero from "@/components/Hero";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Author",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

export default function page() {
  return (
    <div>
      {/* <Hero /> */}
      <div className="">
        <div className="flex flex-col  items-center p-16">
          <h1 className="text-4xl lg:text-5xl text-center font-bold py-4 lg:py-10">
            Author
          </h1>

          <div className="px-2 lg:px-10 py-5 flex  bg-white rounded-lg flex-col lg:flex lg:flex-row  w-[400px] md:w-[800px] lg:w-[1200px]  items-center gap-10">
            <div className="relative h-[350px] w-[300px] rounded-2xl shadow-2xl">
              <img
                src="/author.jpeg"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-lg object-cover"
              />

              <div className=" text-[16px] mt-6">
                <p className=" text-[20px] font-bold">Know More</p>

                <a target="_blank" href="https://www.negivaibhav.com/">
                  <p className="text-blue-500 underline">negivaibhav.com</p>
                </a>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold  text-white">
                  Vaibhav Negi
                </h1>
                <p className="text-sm text-gray-300 pb-2">Author</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[300px] md:w-[600px] lg:w-[900px]  leading-[1.4rem] mt-14 md:mt-0 lg:mt-0">
              <div className="lg:text-start text-center">
                <h2 className="font-bold text-2xl text-black">Vaibhav Negi</h2>
                <p className="text-black">Educational Content Specialist</p>
              </div>
              <p>
                Hello there! I&apos;m Vaibhav Negi, an educational content specialist
                with over three years of experience in creating resources that
                cater to students and their families. My goal is to make the
                journey of finding the perfect school seamless, transparent, and
                stress-free.
              </p>
              <p>
                At Edu Lister, I focus on developing comprehensive,
                easy-to-understand guides that bridge the gap between students,
                parents, and schools. From detailed school overviews to tips on
                tackling admissions, I&apos;m here to help families navigate this
                important journey with confidence.
              </p>
              <p>
                What sets my approach apart is my ability to combine data-driven
                insights with a humanized touch. By blending practicality and
                creativity, I aim to deliver content that speaks to the needs of
                parents while keeping the student at the heart of the narrative.
              </p>
              <p>
                When I&apos;m not researching schools or writing actionable advice,
                I&apos;m exploring innovative ways to make education more accessible
                and inclusive. My background in digital storytelling enables me
                to craft meaningful content that inspires informed
                decision-making.
              </p>
              <p>
                With Edu Lister, my mission is to ensure every family has access
                to the tools and information they need to choose the best
                educational path. Let&apos;s discover the possibilities, one step at
                a time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
