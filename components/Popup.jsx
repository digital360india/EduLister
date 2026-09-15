"use client";
import React, { useState, useEffect } from "react";
import { LeadPopup } from "./LeadPopup";

export default function Popup() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupVisible]); 

  useEffect(() => {
    const timer = setInterval(() => {
      setIsPopupVisible(true);
    }, 40000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  return <>{isPopupVisible && <LeadPopup setClose={handleClose} />}</>;
}
