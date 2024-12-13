"use client";

import { base } from "@/app/api/airtable";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";

export default function EnquireForm() {
  const [details, setDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    class: "",
  });

  const [msg, setMsg] = useState("");
  const [btn, setBtn] = useState(false);
  const [toggle, setToggle] = useState(false);
  const currentPage = usePathname();

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
          setToggle(true);
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
    setToggle(!toggle);
  };

  return (
    <>
      <div className="p-5 space-y-5">
        <div className="">
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
                type="text"
                placeholder="Grade"
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
}
