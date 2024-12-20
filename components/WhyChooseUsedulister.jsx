import Image from "next/image";
import React from "react";

const WhyChooseUsedulister = () => {
  return (
    <>
      <div className="bg-[#FFFFF] hidden md:block ">
        <h1 className="text-center text-[#323232] text-[2.25rem] mt-10">
          Why Choose Us?
        </h1>

        <div className="flex justify-center items-center">
          <div className="space-y-12 w-[280px] h-[500px]">
            <div className="w-[260px] h-[141px] ">
              <h1 className="text-[#323232] text-[1rem]">
                Personalized School Matching
              </h1>
              <p className="text-[#898989] text-[12px]">
                At Edu Lister, we focus on your child's individual needs and
                preferences. Our impartial recommendations are designed to match
                your child with the school that best suits their aspirations,
                ensuring a thoughtful and tailored selection process.
              </p>
            </div>
            <div className="w-[200px] h-[141px]">
              <h1 className="text-[#323232] text-[1rem]">
                Guidance from Experts
              </h1>
              <p className="text-[#898989] text-[12px]">
                Our skilled consultants are here to provide you with
                step-by-step guidance, offering personalized advice and support
                to ensure that every decision made regarding your child&apos;s
                education is well-informed and confident.
              </p>
            </div>
            <div className="w-[280px] h-[285px] ">
              <h1 className="text-[#323232] text-[1rem] ">
                Customized Assessments & Mock Exams
              </h1>
              <p className="text-[#898989] text-[12px]">
                Edu Lister offers mock exams and personalized assessments to
                help evaluate your child&apos;s strengths and areas for growth.
                This allows us to match them with the right school, one that
                aligns with their abilities and potential.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/leftframe.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[150px] h-[420px]"
            />
          </div>

          <div className="">
            <Image
              src="/Frame 178.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[440px] h-[550px]"
            />
          </div>

          <div>
            <Image
              src="/rightframe.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[150px] h-[420px]"
            />
          </div>

          <div className="space-y-14 w-[280px] h-[500px]">
            <div className="w-[280px] h-[138px] pt-1">
              <h1 className="text-[#323232] text-[1rem]">
                In-Depth School Information
              </h1>
              <p className="text-[#898989] text-[12px]">
                We provide comprehensive details about each school, including
                academic offerings, extracurricular activities, and more. This
                ensures that you have all the information needed to make the
                best choice for your child&apos;s future.
              </p>
            </div>
            <div className="w-[280px] h-[130px]">
              <h1 className="text-[#323232] text-[1rem]">
                Honest and Transparent Approach
              </h1>
              <p className="text-[#898989] text-[12px]">
                At Edu Lister, integrity is key. We operate on a model where we
                charge parents directly, never schools, to maintain our
                commitment to unbiased advice. This ensures that our
                recommendations are genuinely in your child&apos;s best interest.
              </p>
            </div>
            <div className="w-[400px] h-[200px]">
              <h1 className="text-[#323232] text-[1rem]">
                Complete Support, Every Step of the Way
              </h1>
              <p className="text-[#898989] text-[12px]">
                From your first consultation to helping with school applications
                and post-admission follow-ups, Edu Lister offers continuous
                support. We&apos;e here to guide you through every part of the
                process, making it as smooth and successful as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsedulister;
