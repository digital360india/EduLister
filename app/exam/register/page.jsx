"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [formData, setFormData] = useState({
    studentName: "",
    mobile: "",
    email: "",
    grade: "",
    message: "",
    userRegistered: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage button disable
  const router = useRouter();

  const generateUniqueId = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (formData.userRegistered || isSubmitting) {
      return;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      message: "",
    }));

    if (
      formData.studentName !== "" &&
      formData.mobile !== "" &&
      formData.grade !== ""
    ) {
      try {
        setIsSubmitting(true); // Disable the button when submitting

        const uniqueId = generateUniqueId();
        const updatedFormData = {
          ...formData,
          uniqueId,
        };

        const response = await axios.post(
          "https://edu-green.vercel.app/register",
          updatedFormData
        );

        if (response.status === 200) {
          const userId = response.data._id;

          // Ensure this runs only on the client side
          if (typeof window !== "undefined") {
            localStorage.setItem(
              "user",
              JSON.stringify({
                uniqueId,
                grade: formData.grade,
                studentName: formData.studentName,
                userId,
              })
            );
          }

          setFormData((prevFormData) => ({
            ...prevFormData,
            userRegistered: true,
          }));

          router.push("/exam/instructions");
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        setFormData((prevFormData) => ({
          ...prevFormData,
          message: "Error submitting the form",
        }));
        setIsSubmitting(false); // Re-enable the button if there's an error
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        message: "* All Fields Are Mandatory",
      }));
      setIsSubmitting(false); // Re-enable the button if validation fails
    }
  };

  return (
    <div>
      <div
        className="bg-cover bg-center lg:h-[97vh]"
        style={{ backgroundImage: 'url("/background.svg")' }}
      >
        <form
          className="w-[100vw] md:w-[70vw] mx-auto pt-[60px] p-5 mt-6"
          onSubmit={handleFormSubmit}
        >
          <div className="bg-white rounded-lg h-[80vh] p-5 md:p-8 rounded-md">
            <p className="text-[36px] font-semibold text-[#02618f] pt-4">
              Registration Form
            </p>

            <div className="flex justify-between h-full py-2">
              <div>
                <div className="space-y-2 ">
                  <div className="flex flex-col gap-6 text-[16px]">
                    <div className="flex flex-col space-y-1 pt-2">
                      <label className="text-[#02618f]">
                        Name <span className="text-red-700">*</span>
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        required
                        className="bg-[#F8F8F8] rounded-lg w-[300px] md:w-[400px] border border-[#02618f] h-[40px] p-2"
                      />
                    </div>

                    <div className="flex flex-col space-y-1">
                      <label className="text-[#02618f]">
                        Mobile <span className="text-red-700">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        pattern="[0-9]{10}"
                        value={formData.mobile}
                        required
                        onChange={handleInputChange}
                        className="bg-[#F8F8F8] rounded-lg  w-[300px] md:w-[400px] border border-[#02618f] h-[40px] p-2"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label className="text-[#02618f]">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-[#F8F8F8] rounded-lg  w-[300px] md:w-[400px] border border-[#02618f] h-[40px] p-2"
                      />
                    </div>
                    <div className="flex flex-col space-y-1 pt-2">
                      <label className="text-[#02618f]">
                        Grade <span className="text-red-700">*</span>
                      </label>
                      <input
                        type="number"
                        name="grade"
                        required
                        placeholder="Enter class { eg : 1,2,3...}"
                        min={1}
                        max={12}
                        value={formData.grade}
                        onChange={handleInputChange}
                        className="bg-[#F8F8F8] rounded-lg  w-[300px] md:w-[400px] border border-[#02618f] h-[40px] p-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[80px] pt-10">
                  <button
                    type="submit"
                    disabled={isSubmitting} // Disable button while submitting
                    className={`text-white rounded-lg w-[160px] md:w-[200px] h-[40px] ${
                      isSubmitting ? "bg-gray-400" : ""
                    }`}
                    style={{
                      backgroundColor: !isSubmitting ? "#02618f" : "gray",
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
                <p className="text-red-500">{formData.message}</p>
              </div>
              <div className="hidden lg:block w-full h-[80vh]">
                <img
                  className="h-[100%]  w-[60vw]"
                  src="https://res.cloudinary.com/eduminatti-com/image/upload/v1726726068/Edu123/Eduimages/Untitled_design.png"
                  alt="hero"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
