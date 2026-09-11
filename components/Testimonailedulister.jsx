"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "Parul Rawat",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.53.37_PM.jpg",
    city: "Delhi",
    description:
      "Finding the right boarding school for my daughter was a daunting task until we discovered EduLister. The detailed school profiles and honest reviews helped us make an informed decision. Today, shes thriving in an environment that perfectly matches her needs. Thank you, EduLister!",
  },
  {
    name: "Priyangini",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_4.01.42_PM.jpg",
    city: "Delhi",
    description:
      "EduLister made my transition to a boarding school so much easier. Their platform gave me a clear idea of what to expect, from academics to extracurriculars. I'm now at a school that feels like home.",
  },
  {
    name: "Priya Danu",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.59.49_PM.jpg",
    city: "Pune",
    description:
      "As a parent, I appreciated EduLister's transparency and ease of use. The side-by-side comparisons and expert advice were incredibly helpful. It's a trustworthy platform that truly understands the needs of parents and students alike.",
  },
  {
    name: "Shivam Panwar",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.54.31_PM.jpg",
    city: "Mumbai",
    description:
      "Choosing the right school felt overwhelming at first, but EduLister provided everything I needed to make a confident decision. Thanks to their platform, I'm now in a school where I can excel academically and pursue my passion for sports.",
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
      className="absolute left-0 z-10 cursor-pointer hidden md:block border border-border rounded-full"
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
      className="absolute right-0 z-10 cursor-pointer hidden md:block"
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
    Array(testimonials.length).fill(false),
  );

  const toggleShowFull = (index) => {
    const updatedShowFull = [...showFull];
    updatedShowFull[index] = !updatedShowFull[index];
    setShowFull(updatedShowFull);
  };

  return (
    <section className="bg-secondary/50 px-6 py-16 md:px-12 lg:px-20">
      <div className="container-page py-20">
        <p className="text-xs uppercase tracking-wider text-gold">
          Parent stories
        </p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl">
          Testimonials
        </h2>
        <div className="mt-10">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            itemClass="px-3"
            containerClass="pb-2"
          >
            {testimonials.map((t, index) => (
              <figure
                key={t.name}
                className="flex h-[300px] flex-col rounded-2xl border border-border/60 bg-card p-6"
              >
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <blockquote
                  className={`mt-3 flex-1 text-sm leading-relaxed text-foreground ${
                    showFull[index] ? "overflow-y-auto" : "line-clamp-5"
                  }`}
                >
                  "{t.description}"
                </blockquote>

                {t.description.split(" ").length > 30 && (
                  <button
                    onClick={() => toggleShowFull(index)}
                    className="mt-2 self-start text-xs font-medium text-gold hover:underline"
                  >
                    {showFull[index] ? "Read less" : "Read more"}
                  </button>
                )}

                <figcaption className="mt-4 flex items-center gap-3 border-t border-border/60 pt-4">
                  <Image
                    src={t.image}
                    width={36}
                    height={36}
                    alt={t.name}
                    className="h-9 w-9 rounded-full object-cover object-top"
                  />
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {t.name}
                    </span>{" "}
                    · {t.city}
                  </div>
                </figcaption>
              </figure>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonailedulister;