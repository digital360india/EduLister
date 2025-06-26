"use client";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import {
  BsTelephone,
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import Link from "next/link";
import "react-modern-drawer/dist/index.css";
import { Icon } from "@iconify/react";
import ConsultationPopup from "@/components/ConsultationPopup";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [isOpenpopup, setIsOpenpopup] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: "iconamoon:home" },
    { name: "About", path: "/about", icon: "mdi:about-circle-outline" },
    {
      name: "Compare Schools",
      path: "/compare-schools",
      icon: "fluent-mdl2:compare-uneven",
    },
    { name: "Contact", path: "/contact", icon: "tabler:phone" },
    {
      name: "Blogs",
      path: "",
      external: true,
      icon: "mdi:blog",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/share/192Nh9gFbN/ ",
      icon: <BsFacebook />,
      key: "facebook",
    },
    {
      href: "https://www.instagram.com/edulister_india?igsh=bXBrNGpxNzJrOWN1",
      icon: <BsInstagram />,
      key: "instagram",
    },
    
  ];

  // useEffect(() => {
  //   console.log("isOpenpopup state changed:", isOpenpopup);
  // }, [isOpenpopup]);

  const toggleDrawer = () => {
    document.body.style.overflow = isOpen ? "auto" : "hidden";
    setIsOpen((prevState) => !prevState);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const toggleBookingPopup = () => {
    setIsOpenpopup(true);
  };

  const toggleBookingPopupSmall = () => {
    setIsOpenpopup(true);
    toggleDrawer();
  };

  const toggleBookingClosePopup = () => {
    setIsOpenpopup(false);
  };

  return (
    <div>
      <nav className="hidden md:block w-full absolute top-0 z-40 bg-white border border-[#9B1750]">
        <div className="justify-between  items-center h-[80px] flex px-6">
          <div className="flex items-center justify-between py-7 ">
            <Link href={"/"}>
              <img
                className="w-14  md:mx-24  lg:w-[78px]"
                src="/GoEdu (4) 3.svg"
                alt="Logo"
                width={88}
                height={56}
              />
            </Link>
          </div>
          <div>
            <ul className="font-medium items-center w-full opacity-90 text-center justify-center flex space-x-6 py-10">
              {navLinks.map((link) => {
                const hideOnMd =
                  link.name === "Compare Schools" || link.name === "Blogs";

                return (
                  <li
                    key={link.name}
                    className={`text-background-dark text-[1rem] py-2 px-2 ${
                      activeButton === link.name.toLowerCase()
                        ? "text-[#FFFFFF] font-semibold rounded-lg"
                        : ""
                    } ${hideOnMd ? "hidden lg:block" : ""}`}
                  >
                    <Link
                      href={link.path}
                      onClick={() => handleButtonClick(link.name.toLowerCase())}
                      target={link.external ? "_blank" : "_self"}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={toggleBookingPopup}
                  className="bg-background-dark text-white rounded-lg py-2 px-4"
                >
                  Get Consultation
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="block md:hidden w-full absolute top-0 z-40 bg-white">
        <div className="justify-between px-4 mx-auto ">
          <div className="flex items-center justify-between py-3 ">
            <Link href={"/"}>
              <img
                className="w-14 h-14 mx-2 lg:w-22"
                src="/GoEdu (4) 3.svg"
                alt="Logo"
                width={1000}
                height={1000}
              />
            </Link>
            <div className="flex gap-5 text-[#02618f]">
              {/* <Link href="whatsapp://send?abid=+9557695360">
                <Icon icon="logos:whatsapp-icon" className="inline w-7 h-7" />
              </Link>
              <Link href="tel:+9557695360">
                <BsTelephone className="inline w-6 h-6" />
              </Link> */}
              <button
                className="text-gray-700 rounded-md outline-none focus:border-gray-900 focus:border"
                onClick={toggleDrawer}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpenpopup && <ConsultationPopup setClose={toggleBookingClosePopup} />}

      <React.Fragment>
        <Drawer
          direction="right"
          open={isOpen}
          onClose={toggleDrawer}
          style={{
            backgroundColor: "#FFFFFF",
            padding: "32px",
            width: "300px",
          }}
          className="text-background-light text-[14px] md:hidden"
        >
          <div className="flex justify-between">
            <Link href={"/"}>
              <img
                className="w-[70px] h-[60px]"
                src="GoEdu (4) 3.svg"
                alt="Logo"
              />
            </Link>
            <Icon
              icon="charm:cross"
              className="w-10 h-14  cursor-pointer"
              onClick={toggleDrawer}
            />
          </div>
          <div className="bg-background-light w-60 h-[1px] mt-5"></div>
          <ul className="flex flex-col  space-y-9 mt-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="text-xl"
                  onClick={() => {
                    handleButtonClick(link.name.toLowerCase());
                    toggleDrawer();
                  }}
                  target={link.external ? "_blank" : "_self"}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleBookingPopupSmall}
                className="bg-background-dark text-white rounded-lg py-3 px-5 text-[1rem] font-semibold"
              >
                Get Consultation
              </button>
            </li>
          </ul>
          <div className="flex justify-center gap-4 mt-8">
            {socialLinks.map(({ href, icon, key }) => (
              <Link href={href} target="_blank" key={key}>
                <div className="text-white">{icon}</div>
              </Link>
            ))}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Navbar;
