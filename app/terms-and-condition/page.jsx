import Hero from "@/components/Hero";

export async function generateMetadata() {
  return {
    title: "Terms and Condition",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const TermsAndCondition = () => {
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-5 p-[35px] md:p-[100px] ">
        <div className=" bg-[#F8F8F8] p-[40px] space-y-5">
          <p className="text-[32px] font-semibold">Terms And Condition</p>
          <div className="flex  justify-center mt-4">
            <img
              className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
              src="/term.svg"
              alt=""
            />
          </div>
          <p className="text-[24px] font-semibold">
            Welcome to Go Edu&apos;s Terms and Conditions
          </p>
          <p>
            Thank you for choosing Go Edu! We&apos;re here to connect students
            and parents with top boarding schools in India through an accessible
            and trustworthy platform. By using our website, you agree to these
            terms, which are designed to ensure a positive, efficient experience
            for everyone.
          </p>
          {/* Please read these terms carefully. */}
          <p>
            {/* {" "}
            <p className="text-base font-semibold mb-1">Terms Acceptance</p>
            By using our services, you agree to adhere to the terms outlined
            here. If you disagree with these terms, please refrain from using
            our website and services. */}
            {/* <p>
              <p className="text-base font-semibold mb-1">Usage of Website</p>
              <p>
                {" "}
                Lawful Usage: You agree to use our website and services solely
                for lawful purposes.
              </p>
              Prohibited Activities: You must not transmit any malicious code or
              engage in activities that disrupt the operation of our website.
            </p> */}
            {/* <p>
              <p className="text-base font-semibold mb-1">
                Service Changes and Pricing
              </p>{" "}
              Edu 123 reserves the right to modify or discontinue any service or
              feature without prior notice. Prices for our services are subject
              to change without warning.
            </p> */}
            <p className="pb-4">
              <p className="text-[20px]  font-bold mb-1">
                Embracing Responsible Use
              </p>
              Go Edu is dedicated to helping you make informed educational
              choices. We ask that you engage with our platform respectfully,
              maintaining a safe space for all users.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Keeping Services Relevant and Evolving
              </p>
              To continually meet your needs, Go Edu may enhance or update its
              offerings and features from time to time. Our goal is to provide
              you with the most relevant and valuable services possible.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Secure and Personalized Accounts
              </p>
              When creating an account on Go Edu, rest assured that we&apos;re
              committed to providing a secure experience. We encourage you to
              keep your login details private for added protection.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Trusted Information, Every Time
              </p>
              Go Edu strives to offer the most accurate and up-to-date
              information on schools, admissions, and related educational
              insights. Our content is regularly updated to reflect the latest
              developments, so you can confidently rely on our resources.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Valuing Your Feedback
              </p>
              Your feedback matters to us! We welcome any comments or
              suggestions, as they help us improve and better serve you.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                A Commitment to Your Privacy
              </p>
              Go Edu respects your privacy. All information you provide is
              handled with care, and we&apos;re here to answer any questions
              about how your details are used to enhance your experience.
            </p>{" "}
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Quick Corrections and Timely Updates
              </p>
              If there&apos;s ever an adjustment needed, our team at Go Edu
              promptly updates information to maintain clarity and accuracy for
              all users.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Positive Engagement with Content
              </p>
              At Go Edu, our goal is to support your educational journey. We ask
              that users engage with our site and its content positively,
              keeping the experience beneficial for everyone involved.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Supporting Uninterrupted Access
              </p>
              While we strive for smooth, uninterrupted service, occasional
              technical issues may occur. Rest assured, our team is committed to
              resolving any interruptions as quickly as possible.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Fostering a Safe and Trustworthy Platform
              </p>
              Using Go Edu means joining a community dedicated to genuine
              support in the educational journey. We appreciate your role in
              keeping the experience safe and positive for everyone.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Adapting to Your Needs
              </p>
              We value flexibility and growth, so Go Edu&apos;s terms may evolve
              to best serve our users. For any major updates, we will make sure
              you&apos;re informed and up-to-date on any adjustments to our
              services.
            </p>
          </p>
          <p className="pb-4">
            <p className="text-[24px] font-semibold">Contact Us Anytime</p>
            If you have questions, feedback, or need further assistance,
            we&apos;re here for you! Please reach out to us at:{" "}
            <br />
            <p>Email: info@goedu.in</p>
            <p>
              Contact Number: 01353530324, 9557695360
             
             <p className="pt-4">
              Thank you for trusting Go Edu with your educational journey. We
              look forward to supporting you every step of the way
              </p>
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
