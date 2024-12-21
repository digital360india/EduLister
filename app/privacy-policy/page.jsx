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
            Edu Lister: Your Privacy, Our Priority{" "}
          </p>
          <p>
            At Edu Lister, we are deeply committed to respecting your privacy
            and safeguarding your personal information. This Privacy Policy
            outlines how we collect, use, and protect your data while ensuring
            transparency in all our practices.
          </p>
          <p>
            {" "}
            <p className="text-[24px] font-semibold">What We Collect</p>
            To provide you with a personalized experience, we collect basic
            information such as your name, contact details, and preferences.
            Additionally, we may gather data on your interactions with our
            platform to refine and improve our services.
          </p>

          <h2 className="text-[24px] font-semibold">How We Use Your Data</h2>
          <p className="mb-4">Your information is used to:</p>
          <ul className="list-disc pl-6">
            <li>Provide tailored school recommendations</li>
            <li>
              Inform you about admission updates and educational opportunities
            </li>
            <li>
              Enhance your overall user experience through data-driven
              improvements
            </li>
          </ul>

          <p>
            <p className="text-base font-semibold mb-1">Secure Data Handling</p>
            We use industry-standard security protocols to protect your data
            from unauthorized access or misuse. While no system can guarantee
            absolute security, we continuously update our measures to reduce
            risks.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">
              Data Sharing with Trust
            </p>
            Any data shared with third-party partners is done to enhance your
            experience and only with your explicit consent. We never sell your
            data or use it beyond the scope of improving our services.
          </p>
          <p>
            <p className="text-[24px] font-semibold">
              Your Control, Your Rights
            </p>
            You have the right to access, modify, or delete your personal
            information at any time. We&apos;re here to assist you in exercising
            these rights whenever needed.
          </p>
          <p>
            <p className="text-[24px] font-semibold">
              Policy Updates and Communication
            </p>
            As Edu Lister evolves, so might our privacy practices. Significant
            updates to this policy will be communicated to you promptly to
            ensure you remain informed.
          </p>

          <p>
            <p className="text-[24px] font-semibold">Contact Us:</p>
            For privacy-related inquiries or assistance, reach out to us at:
            <br />
            <p>Email: info@goedu.in</p>
            <p>Contact Number:01353530324, 9557695360</p>
          </p>

          <p>
            Thank you for choosing Edu Lister. We&apos;re honored to be a part of
            your educational journey and are committed to protecting your
            privacy every step of the way.
          </p>
        </div>
      </div>
    </>
  );
}
