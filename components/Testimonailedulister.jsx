"use client";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "Parul Rawat",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.53.37_PM.jpg",
    description:
      "Finding the right boarding school for my daughter was a daunting task until we discovered EduLister. The detailed school profiles and honest reviews helped us make an informed decision. Today, shes thriving in an environment that perfectly matches her needs. Thank you, EduLister!"
  },
  {
    name: "Priyangini",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_4.01.42_PM.jpg",
    description:
      "EduLister made my transition to a boarding school so much easier. Their platform gave me a clear idea of what to expect, from academics to extracurriculars. I'm now at a school that feels like home."
  },
  {
    name: "Priya Danu",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.59.49_PM.jpg",
    description:
      "As a parent, I appreciated EduLister's transparency and ease of use. The side-by-side comparisons and expert advice were incredibly helpful. It's a trustworthy platform that truly understands the needs of parents and students alike."
  },
  {
    name: "Shivam Panwar",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.54.31_PM.jpg",
    description:
      "Choosing the right school felt overwhelming at first, but EduLister provided everything I needed to make a confident decision. Thanks to their platform, I'm now in a school where I can excel academically and pursue my passion for sports."
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute left-0 cursor-pointer hidden md:block"
    >
      <Image
        src="/leftbutton.svg"
        alt="left arrow"
        width={1000}
        height={1000}
        className="w-[50px] h-[50px]"
      />
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 cursor-pointer hidden md:block"
    >
      <Image
        src="/rightbutton.svg"
        alt="right arrow"
        width={1000}
        height={1000}
        className="w-[50px] h-[50px]"
      />
    </div>
  );
};

const Testimonailedulister = () => {
  const [showFull, setShowFull] = useState(
    Array(testimonials.length).fill(false)
  );

  const toggleShowFull = (index) => {
    const updatedShowFull = [...showFull];
    updatedShowFull[index] = !updatedShowFull[index];
    setShowFull(updatedShowFull);
  };

  return (
    <div className="bg-gradient-to-b from-background-light to-background-dark p-1">
      <div className="px-8 pt-8 md:px-14 md:pt-14">
        <h2 className="text-[#FFFFFF] text-[14px] md:text-[20px]">
          Get Inspired by stories
        </h2>
        <h2 className="text-[#FFFFFF] text-[24px] md:text-[46px]">
          Experience of Clients with Us...
        </h2>
      </div>
      <div className="md:pt-8">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {testimonials.map((testimonial, index) => {
            const truncatedDescription = testimonial.description
              .split(" ")
              .slice(0, 20)
              .join(" ");

            return (
              <div
                key={index}
                className="h-[400px] md:h-[440px] flex justify-center items-center"
              >
                <div
                  className="bg-white w-[370px] h-auto md:h-auto mx-6 p-8 md:mx-14 rounded-lg relative"
                  style={{
                    boxShadow: "0px 2px 10px 0px #00000040",
                  }}
                >
                  <div className="absolute -top-14 -left-8">
                    <Image
                      src="/Quote.svg"
                      width={1000}
                      height={1000}
                      alt="testimonial quote"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <p className="text-[12px] md:text-[1rem] text-[#323232] text-justify mt-[25px] md:mt-[35px]">
                    {showFull[index]
                      ? testimonial.description
                      : `${truncatedDescription}...`}
                  </p>
                  {testimonial.description.split(" ").length > 20 && (
                    <button
                      className="text-blue-500 mt-2"
                      onClick={() => toggleShowFull(index)}
                    >
                      {showFull[index] ? "Read Less" : "Read More"}
                    </button>
                  )}
                  <div className="flex items-center justify-between pt-6">
                    <Image
                      src={testimonial.image}
                      width={1000}
                      height={1000}
                      alt={testimonial.name}
                      className="md:w-[70px] md:h-[70px] w-[60px] h-[60px] rounded-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonailedulister;
