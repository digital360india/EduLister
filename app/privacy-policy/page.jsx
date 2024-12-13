import Hero from "@/components/Hero";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Privacy Policies",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

export default function page() {
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-5 p-[35px] md:p-[100px] ">
        <div className=" bg-[#F8F8F8] p-[40px] space-y-5">
          <p className="text-[32px] font-semibold">Privacy Policy</p>
          <div className="flex  justify-center mt-4">
            <img
              className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
              src="/privacy.svg"
              alt=""
            />
          </div>
          <p className="text-[24px] font-semibold">
            Welcome to Go Edu&apos;s Privacy Policy
          </p>
          <p>
            At Go Edu, protecting your privacy is a top priority. This policy
            outlines the types of information we collect, how it&apos;s used,
            and our commitment to secure your data. It applies specifically to
            Go Edu&apos;s website and related electronic communications.
          </p>
          <p>
            {" "}
            <p className="text-[24px] font-semibold">
              Information We Collect and How It&apos;s Used
            </p>
            Go Edu collects various details to enhance your experience. This
            includes basic personal information, connection details, and
            user-generated content like feedback. Your information helps us
            deliver tailored services, notify you of updates, and ensure a
            smooth, personalized experience.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">
              Automated Data Collection and Purpose
            </p>
            To improve functionality, our site employs technology that gathers
            insights into device usage, browsing activity, and preferences. This
            allows us to deliver optimized services, maintain account
            communication, fulfill agreements, and keep you updated on any
            website or service changes.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">
              Our Commitment to Data Security
            </p>
            Safeguarding your information is central to our mission. Go Edu has
            established robust security measures to prevent unauthorized access
            or alteration. However, while we take extensive precautions,
            absolute security over the internet cannot be guaranteed.
          </p>
          <p>
            <p className="text-[24px] font-semibold">
              Responsible Information Sharing
            </p>
            Go Edu may share aggregated, anonymized information, or personal
            data with affiliates and trusted partners to support our services.
            Personal data sharing occurs only as outlined here, with your
            consent, or for specific services you&apos;ve requested.
          </p>
          <p>
            <p className="text-[24px] font-semibold">
              Updates to Our Privacy Policy{" "}
            </p>
            As part of our commitment to transparency, Go Edu regularly reviews
            and updates its privacy practices. Any significant updates will be
            noted on our homepage, ensuring that you remain informed.
          </p>
          <p>
            <p className="text-[24px] font-semibold">
              Changes to Our Privacy Policy
            </p>
            We regularly update our privacy policy on this page. Significant
            changes in how we handle user information will be communicated
            through a notice on the website's homepage.
          </p>
          <p>
            <p className="text-[24px] font-semibold">How to Reach Us</p>
            We&apos;re here for any privacy-related inquiries or feedback. You
            can contact us directly via email or phone for assistance: :
            <br />
            <p>Email: info@goedu.in</p>
            <p>Contact Number:01353530324, 9557695360</p>
          </p>
        </div>
      </div>
    </>
  );
}
