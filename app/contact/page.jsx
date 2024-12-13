import Hero from "@/components/Hero";
import { BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Contact Us",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const Contact = () => {
  return (
    <>
      {/* <Hero /> */}
      <div className="sm:mt-5 mt-16 sm:p-[35px] md:p-[100px] ">
        <div className=" sm:bg-[#F8F8F8] p-[40px] space-y-5 mt-10">
          <p className=" text-[22px] sm:text-[28px] font-semibold">
            Contact Us
          </p>
          <div className=" mt-16 md:mt-24 text-black ">
            <div className="flex flex-col items-center gap-2">
              <ul className=" w-full  p-5 sm:w-[270px] sm:h-[450px] lg:w-[750px] sm:p-9 lg:p-8  lg:h-[310px] flex flex-col gap-4 bg-white">
                <li className="flex gap-3">
                  {/*   <div className="w-6 h-8 flex items-center">
                    <TfiLocationPin className="   " />
                  </div>
                <div>
                    3rd Floor Amar Plaza Near St.Judes School, West Canal Road,
                    Dehradun -248002
                  </div> */}
                </li>
                <li className="flex gap-3 items-center">
                  {" "}
                  <IoCallOutline className="h-8 w-5" />
                  <a href="tel:+91-01353530324">+91-01353530324</a>
                </li>
                <li className="flex gap-3">

                  <IoCallOutline className="h-8 w-5" />
                  <a href="tel:+91-9557695360">+91-9557695360</a>
                </li>
                <li className="flex items-center gap-3">
                  <SlEnvolope className="h-8 w-5 " />
                  <div>info@goedu.in</div>
                </li>
               

                <div className="flex justify-between">
                  <div className="flex gap-4 pt-5  ">
                    <a
                      href="https://www.instagram.com/goedu_india/?igsh=MWtyaGFocGo4cHA0bQ%3D%3D"
                      target="_blank"
                    >
                      <BsInstagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/people/GoEdu/61552427439719/"
                      target="_blank"
                    >
                      <BiLogoFacebook className="w-5 h-5" />
                    </a>

                    <Link href="https://x.com/Edu123India?s=20" target="_blank">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        fill="black"
                        viewBox="0 0 512 512"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </Link>
                  </div>
                  <img
                    className="lg:-mt-28 w-16 h-16 lg:w-40 lg:h-40"
                    src="https://www.eduminatti.com/enquireAvatar.png"
                    alt=""
                  />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
