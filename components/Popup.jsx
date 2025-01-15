"use client";
import React, { useState, useEffect } from "react";
import ConsultationPopup from "./ConsultationPopup";

export default function Popup() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsPopupVisible(true);
    }, 40000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  return <>{isPopupVisible && <ConsultationPopup setClose={handleClose} />}</>;
}
