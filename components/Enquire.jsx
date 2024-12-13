"use client";
import { base } from "@/app/api/airtable";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

export default function Enquire({ isOpen, onClose, school }) {
  const currentPage = usePathname();
  const [details, setDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    class: "",
  });

  const [msg, setMsg] = useState("");
  const [btn, setBtn] = useState(false);
  const [phoneNumberValid, setPhoneNumberValid] = useState(false);

  const createCounsellorForm = async () => {
    setBtn(true);
    base("enquiryForm").create(
      [
        {
          fields: {
            Name: details.name,
            email: details.email,
            Mobile: details.phoneNumber,
            grade: details.class,
            SchoolName: school,
            Url: currentPage,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          setMsg("Form Submitted Successfully");
          toast.success("Form Submitted Successfully");
          setDetails({
            ...details,
            class: "",
            email: "",
            phoneNumber: "",
            name: "",
          });
          setBtn(false);
          onClose();
        });
      }
    );
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setDetails({ ...details, phoneNumber: value });
      setPhoneNumberValid(value.length === 10);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed backdrop-blur-[1px] min-w-[100vw] h-[100vh] top-0 left-0 z-[50]">
      <div className="flex justify-center items-center mt-10">
        <div className="bg-[#02618f] text-white h-[80vh] md:h-[90%] w-[90vw] md:w-[30vw] mx-auto rounded-lg p-3 md:p-6">
          <div className="flex justify-between">
            <p className="text-[24px] font-semibold">Enquire for {school}</p>
            <div>
              <Icon icon="charm:cross" className="w-10 h-10" onClick={onClose} />
            </div>
          </div>
          <div className="mt-10">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (phoneNumberValid) {
                  createCounsellorForm();
                } else {
                  toast.error("Please enter a valid 10-digit phone number.");
                }
              }}
              className="flex flex-col space-y-5 text-white"
            >
              <div className="flex flex-col">
                <label>Name*</label>
                <input
                  value={details.name}
                  onChange={(event) => setDetails({ ...details, name: event.target.value })}
                  type="text"
                  className="border border-[#FFE3E8] bg-[#FFE3E8] p-2 rounded outline-none text-black"
                />
              </div>

              <div className="flex flex-col">
                <label>Mobile*</label>
                <input
                  value={details.phoneNumber}
                  onChange={handlePhoneNumberChange}
                  type="text"
                  className={`border border-[#FFE3E8] bg-[#FFE3E8] p-2 rounded outline-none text-black ${phoneNumberValid ? "" : ""}`}
                />
                {!phoneNumberValid && details.phoneNumber.length > 0 && (
                  <span className="text-red-500 text-sm">Please enter exactly 10 digits for the phone number.</span>
                )}
              </div>

              <div className="flex flex-col">
                <label>Email</label>
                <input
                  value={details.email}
                  onChange={(event) => setDetails({ ...details, email: event.target.value })}
                  type="email"
                  className="border border-[#FFE3E8] bg-[#FFE3E8] p-2 rounded outline-none text-black"
                />
              </div>

              <div className="flex flex-col">
                <label>Grade</label>
                <input
                  type="text"
                  value={details.class}
                  onChange={(event) => setDetails({ ...details, class: event.target.value })}
                  className="border w-44 border-[#FFE3E8] bg-[#FFE3E8] p-2 rounded outline-none text-black"
                />
              </div>

              <input
                className={`bg-[#666666] rounded-lg text-white p-2 w-3/5 mt-3 ${!phoneNumberValid ? "opacity-50 cursor-not-allowed" : ""}`}
                type="submit"
                value="Submit"
                disabled={!phoneNumberValid}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
