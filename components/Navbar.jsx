"use client";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Link from "next/link";
import "react-modern-drawer/dist/index.css";
import { Icon } from "@iconify/react";
import ConsultationPopup from "@/components/ConsultationPopup";
import { Phone, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [isOpenpopup, setIsOpenpopup] = useState(false);

  const navLinks = [
    { name: "Schools", path: "/schools", icon: "iconamoon:home" },
    {
      name: "Nearby Schools",
      path: "/near-me",
      icon: "fluent-mdl2:compare-uneven",
    },
    {
      name: "Cities",
      path: "/cities",
      icon: "fluent-mdl2:compare-uneven",
    },
    {
      name: "Blogs",
      path: "",
      external: true,
      icon: "mdi:blog",
    },
    { name: "About", path: "/about", icon: "mdi:about-circle-outline" },
    { name: "Contact", path: "/contact", icon: "tabler:phone" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/share/192Nh9gFbN/",
      icon: <BsFacebook />,
      key: "facebook",
    },
    {
      href: "https://www.instagram.com/edulister_india?igsh=bXBrNGpxNzJrOWN1",
      icon: <BsInstagram />,
      key: "instagram",
    },
  ];

  const toggleDrawer = () => {
    document.body.style.overflow = isOpen ? "auto" : "hidden";
    setIsOpen((prevState) => !prevState);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
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
      {/* Desktop */}
      <nav className="hidden md:block fixed top-0 z-40 border-b border-border/60 bg-background w-full">
        <div className="container-page flex items-center justify-between h-[80px] px-6">
          <Link href={"/"} className="flex items-center gap-2">
            <img
              className="w-14  md:mx-24  lg:w-[78px]"
              src="/GoEdu (4) 3.svg"
              alt="EduLister"
              width={88}
              height={56}
            />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const hideOnMd =
                link.name === "Nearby Schools" || link.name === "Blogs";

              return (
                <li key={link.name} className={hideOnMd ? "hidden lg:block" : ""}>
                  <Link
                    href={link.path}
                    onClick={() => handleButtonClick(link.name.toLowerCase())}
                    target={link.external ? "_blank" : "_self"}
                    className={`text-sm transition-colors hover:text-primary ${
                      activeButton === link.name.toLowerCase()
                        ? "font-medium text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+919760548360"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              aria-label="Call EduLister at +91 97605 48360"
            >
              <Phone size={16} className="text-primary" />
              +91 97605 48360
            </a>
            <ThemeToggle />
            <Link
              href="/consultation"
              className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Free consultation
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="block md:hidden fixed top-0 z-40 border-b border-border/60 bg-background w-full h-[80px] px-6">
        <div className="container-page flex h-20 items-center justify-between">
          <Link href={"/"}>
            <img
              className="h-10 w-auto"
              src="/GoEdu (4) 3.svg"
              alt="EduLister"
              width={85}
              height={56}
            />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="tel:+919760548360"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground"
              aria-label="Call EduLister"
            >
              <Phone size={18} className="text-primary" />
            </a>
            <ThemeToggle />
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground"
              onClick={toggleDrawer}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpenpopup && <ConsultationPopup setClose={toggleBookingClosePopup} />}

      <React.Fragment>
        <Drawer
          direction="right"
          open={isOpen}
          onClose={toggleDrawer}
          className="!bg-background text-foreground md:hidden"
          style={{ padding: "32px", width: "300px" }}
        >
          <div className="flex justify-between">
            <Link href={"/"}>
              <img
                className="h-[60px] w-[70px]"
                src="GoEdu (4) 3.svg"
                alt="Logo"
              />
            </Link>
            <Icon
              icon="charm:cross"
              className="h-14 w-10 cursor-pointer text-foreground"
              onClick={toggleDrawer}
            />
          </div>

          <div className="mt-5 h-[1px] w-60 bg-border/60" />

          <ul className="mt-8 flex flex-col space-y-9">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="text-xl text-foreground/80 transition-colors hover:text-primary"
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
                className="rounded-full bg-primary px-5 py-3 text-[1rem] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Free consultation
              </button>
            </li>
          </ul>

          <div className="mt-8 flex justify-center gap-4">
            {socialLinks.map(({ href, icon, key }) => (
              <Link href={href} target="_blank" key={key}>
                <div className="text-foreground transition-colors hover:text-primary">
                  {icon}
                </div>
              </Link>
            ))}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Navbar;