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
                Hi, I&apos;m Vaibhav Negi! With a deep passion for education and
                a knack for crafting meaningful content, I have spent over three
                years in digital marketing, focusing primarily on the
                educational sector. Writing has always been my way of connecting
                with people, and throughout my career, I&apos;ve been fortunate to
                create impactful content that helps students, parents, and
                educators alike.
              </p>
              <p>
                My journey in content creation began in digital marketing, where
                I quickly found my true calling within the education niche.
                Since then, I&apos;ve collaborated with several educational
                platforms, offering content that guides students and families,
                explores emerging trends, and supports educators in their
                mission. My goal is to create content that informs and inspires
                curiosity and confidence.
              </p>
              <p>
                At Go Edu, I specialize in creating insightful, trustworthy, and
                contextually relevant content for the Indian education
                landscape. My writing is tailored to empower parents and
                students in selecting the best boarding schools by providing
                in-depth details on each institution&apos;s culture, curriculum,
                and offerings. I&apos;m committed to ensuring each article,
                guide, and review is as enlightening as it is engaging,
                capturing the unique aspects of India&apos;s diverse educational
                framework.
              </p>
              <p>
                Beyond education, I&apos;ve expanded my experience as a
                freelance writer with Sportskeeda, diving into the sports domain
                and refining my versatility in adapting to different audiences.
                This diversity in experience has sharpened my ability to
                resonate with readers, no matter the topic while maintaining
                quality and authenticity in each piece.
              </p>
              <p>
                At Go Edu, my mission is to simplify and enrich the school
                selection process by delivering content that helps students and
                their families make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
