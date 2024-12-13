"use client";

import React, { useState } from "react";
import EnquireForm from "./EnquireForm";
import { base } from "@/app/api/airtable";
import { toast } from "react-toastify";

export const EnquireNow = () => {
  const [details, setDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    class: "",
  });

  const [msg, setMsg] = useState("");
  const [btn, setBtn] = useState(false);

  const createCounsellorForm = async () => {
    setBtn(true);
    base("counsellorForm").create(
      [
        {
          fields: {
            firstName: details.name,
            email: details.email,
            phoneNumber: details.phoneNumber,
            class: details.class,
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
        });
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (details.name === "" || details.phoneNumber === "") {
      toast.error("Name and Contact Number are mandatory fields.");
      return;
    }
    if (details.phoneNumber.length !== 10) {
      toast.error("Contact Number must be exactly 10 digits.");
      return;
    }
    createCounsellorForm();
  };

  return (
    <>
      <div className="-mt-5 sm:mt-0">
        <p className="text-[24px] sm:text-[28px] font-semibold w-[84vw] mx-auto mb-[40px]">
          Enquire Now
        </p>
      </div>
      <div className="bg-cover hidden md:block relative bg-center h-[420px] w-[98.9vw] mx-auto mb-4 bg-[url('/enquirebackground.png')]">
        <div className="w-[30vw] ml-20 pt-10">
          <EnquireForm />
        </div>
      </div>
      <div className="bg-cover -mt-4 md:hidden relative bg-center h-[360px] w-[98.9vw] mx-auto mb-4 bg-[url('/enquirebackground.png')]">
        <div className="relative py-10 w-[90vw] md:w-[84vw] mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <input
              value={details.name}
              onChange={(value) =>
                setDetails({ ...details, name: value.target.value })
              }
              type="text"
              placeholder="Full name*"
              className="border p-2 rounded"
              required
            />
            <input
              value={details.phoneNumber}
              onChange={(value) =>
                setDetails({ ...details, phoneNumber: value.target.value })
              }
              type="number"
              placeholder="Contact Number*"
              className="border p-2 rounded"
              required
            />
            <input
              value={details.email}
              onChange={(value) =>
                setDetails({ ...details, email: value.target.value })
              }
              type="Email"
              placeholder="Email Id*"
              className="border p-2 rounded"
            />
            <div className="flex justify-between items-center">
              <input
                type="number"
                placeholder="Grade"
                maxLength={12}
                value={details.class}
                onChange={(value) =>
                  setDetails({ ...details, class: value.target.value })
                }
                className="border p-2 rounded"
              />
            </div>
            <input
              className="bg-[#02618f] rounded-lg text-white p-2 w-3/5 mt-3"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};
