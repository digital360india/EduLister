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
            Welcome to Edu Lister&apos;s Terms and Conditions
          </p>
          <p>
            At Edu Lister, we&apos;re committed to simplifying your school discovery
            and admission process. These terms aim to create a fair and
            supportive environment for all users.
          </p>
          {/* Please read these terms carefully. */}
          <p>
            
            <p className="pb-4">
              <p className="text-[20px]  font-bold mb-1">
                Empowering Your Educational Choices
              </p>
              Edu Lister serves as a resource to explore and evaluate schools
              across India. We encourage you to use our platform responsibly to
              make well-informed educational decisions.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                User Accounts and Responsibilities
              </p>
              Creating an account on Edu Lister gives you access to personalized
              recommendations and advanced features. Please safeguard your login
              credentials and ensure all information you provide is accurate and
              up-to-date.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Reliable Information, Verified Decisions
              </p>
              While we work diligently to provide accurate, timely, and detailed
              information about schools and admissions, we recommend verifying
              specific details directly with schools to avoid any discrepancies.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Feedback Fuels Growth{" "}
              </p>
              Your insights help us enhance Edu Lister. We&apos;re constantly
              refining our platform based on user feedback to better serve your
              needs.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Respecting Your Privacy
              </p>
              We value your privacy and ensure that your data is collected and
              used responsibly. Our Privacy Policy provides detailed information
              on how we protect your personal information.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Service Availability and Updates
              </p>
              Although we aim for uninterrupted service, occasional technical
              issues or maintenance may occur. In such cases, we&apos;ll work swiftly
              to minimize disruptions. Updates to these terms will be
              communicated clearly and promptly.
            </p>{" "}
          </p>
          <p className="pb-4">
            <p className="text-[24px] font-semibold">
              Support When You Need It
            </p>
            Our team is here to assist you with any questions or concerns.
            <br />
            <p>Email: info@goedu.in</p>
            <p>
              Contact Number: 01353530324, 9557695360
              <p className="pt-4">
                Thank you for trusting Edu Lister as your partner in education.
                Together, let&apos;s create a brighter future for your child.
              </p>
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
