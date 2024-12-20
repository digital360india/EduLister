

import Image from "next/image";
import React from "react";

const MobileAnimation = () => {
  const reasons = [
    {
      title: "Personalized School Matching",
      description:
        "At Edu Lister, we focus on your child's individual needs and preferences. Our impartial recommendations are designed to match your child with the school that best suits their aspirations, ensuring a thoughtful and tailored selection process.",
    },
    {
      title: "Guidance from Experts",
      description:
        "Our skilled consultants are here to provide you with step-by-step guidance, offering personalized advice and support to ensure that every decision made regarding your child's education is well-informed and confident.",
    },
    {
      title: "Customized Assessments & Mock Exams",
      description:
        "Edu Lister offers mock exams and personalized assessments to help evaluate your child's strengths and areas for growth. This allows us to match them with the right school, one that aligns with their abilities and potential.",
    },
    {
      title: "In-Depth School Information",
      description:
    "We provide comprehensive details about each school, including academic offerings, extracurricular activities, and more. This ensures that you have all the information needed to make the best choice for your child&apos;s future.",
    },
    {
      title: "Honest and Transparent Approach",
      description:
        "At Edu Lister, integrity is key. We operate on a model where we charge parents directly, never schools, to maintain our commitment to unbiased advice. This ensures that our recommendations are genuinely in your child&aposs best interest."},
    {
      title: "Complete Support, Every Step of the Way",
      description:
        "From your first consultation to helping with school applications and post-admission follow-ups, Edu Lister offers continuous support. We're here to guide you through every part of the process, making it as smooth and successful as possible.",
    },

  ];

  return (
    <div className="md:hidden bg-white m-6">
      <h2 className="text-2xl text-[#323232] font-bold pb-6 text-center">
        Why Choose Us?
      </h2>
      <div className="space-y-6">
        {reasons.map((reason, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              
              <Image
                src="/pointer.svg"
                width={1000}
                height={1000}
                className="w-[20px] h-[20px]"
                alt="Pointer"
              />
              
              {/* {index < reasons.length - 1 && ( */}
                <div className="w-[2px] h-24 bg-[#1B6EA1] mt-2"></div>
              {/* )} */}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#323232] text-lg mb-2">{reason.title}</h3>
              <p className="text-[#898989] text-[12px]">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAnimation;
