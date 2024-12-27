"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";

export default function Popup() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    classes: "",
    source : "Schools123 - https://schools123.vercel.app",

  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsPopupVisible(true);
    }, 50000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    console.log(formData);
    try {
      const response = await axios.post(
        "https://goedunodemailer.onrender.com/send-email",
        formData
      );
      if (response.status === 200) {
        alert("Form submitted successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          classes: "",
          source : "Schools123 - https://schools123.vercel.app",

        });
      } else {
        alert("Try again");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative md:flex   gap-5  md:items-center bg-white rounded-lg shadow-lg w-full max-w-[90vw] md:max-w-[80vw] ">
            <button
              onClick={handleClose}
              className="absolute bg-background-dark px-1 py-1 md:px-2 z-50 rounded-full  md:py-2 top-2 right-2 text-2xl font-bold text-white hover:text-white"
            >
              <div className="flex justify-center items-center">
                <RxCross1 />
              </div>
            </button>

            <div className="w-[80vw] h-[539px] hidden md:block z-0 ">
              <Image
                src="/bookingformgoedu.svg"
                alt="School choice"
                width={1000}
                height={1000}
                className="w-[660px] h-full object-cover rounded-lg"
              />
            </div>

            <div className="w-full z-50 md:w-[470px] h-full rounded-l-2xl p-8 md:absolute md:top-0 md:right-14 bg-white">
              <h3 className=" md:text-xl mb-6 text-[#323232]">
                Fill this form and get in touch with our counsellor
              </h3>
              <form onSubmit={handleSubmit} className="space-y-7 md:space-y-6">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 border-b-2 border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded sm:w-[462px] sm:border-[#D9D9D9]"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 border-b-2 border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded sm:w-[462px] sm:border-[#D9D9D9]"
                />
                <div className="flex  md:w-[462px]">
                  <select className="w-[80px] md:w-[95px] h-[39px] border-b-2 border-[#D9D9D9] rounded-l placeholder:text-[#898989] sm:border sm:rounded-l sm:p-2 sm:border-[#D9D9D9]">
                    <option value="🇮🇳">🇮🇳 +91</option>
                    <option value="🇺🇸">🇺🇸 +1</option>
                    <option value="🇬🇧">🇬🇧 +44</option>
                    <option value="🇨🇦">🇨🇦 +1</option>
                    <option value="🇦🇺">🇦🇺 +61</option>
                    <option value="🇳🇿">🇳🇿 +64</option>
                    <option value="🇿🇦">🇿🇦 +27</option>
                    <option value="🇸🇬">🇸🇬 +65</option>
                    <option value="🇦🇪">🇦🇪 +971</option>
                    <option value="🇸🇦">🇸🇦 +966</option>
                    <option value="🇫🇷">🇫🇷 +33</option>
                    <option value="🇩🇪">🇩🇪 +49</option>
                    <option value="🇮🇹">🇮🇹 +39</option>
                    <option value="🇪🇸">🇪🇸 +34</option>
                    <option value="🇧🇷">🇧🇷 +55</option>
                    <option value="🇲🇽">🇲🇽 +52</option>
                    <option value="🇯🇵">🇯🇵 +81</option>
                    <option value="🇰🇷">🇰🇷 +82</option>
                    <option value="🇨🇳">🇨🇳 +86</option>
                    <option value="🇹🇷">🇹🇷 +90</option>
                    <option value="🇷🇺">🇷🇺 +7</option>
                    <option value="🇮🇩">🇮🇩 +62</option>
                    <option value="🇵🇭">🇵🇭 +63</option>
                    <option value="🇻🇳">🇻🇳 +84</option>
                    <option value="🇹🇭">🇹🇭 +66</option>
                    <option value="🇲🇾">🇲🇾 +60</option>
                    <option value="🇳🇬">🇳🇬 +234</option>
                    <option value="🇪🇬">🇪🇬 +20</option>
                    <option value="🇮🇱">🇮🇱 +972</option>
                    <option value="🇰🇪">🇰🇪 +254</option>
                    <option value="🇦🇷">🇦🇷 +54</option>
                    <option value="🇨🇱">🇨🇱 +56</option>
                    <option value="🇵🇪">🇵🇪 +51</option>
                    <option value="🇨🇴">🇨🇴 +57</option>
                    <option value="🇻🇪">🇻🇪 +58</option>
                    <option value="🇺🇦">🇺🇦 +380</option>
                    <option value="🇵🇱">🇵🇱 +48</option>
                    <option value="🇳🇱">🇳🇱 +31</option>
                    <option value="🇧🇪">🇧🇪 +32</option>
                    <option value="🇸🇪">🇸🇪 +46</option>
                    <option value="🇨🇭">🇨🇭 +41</option>
                    <option value="🇦🇹">🇦🇹 +43</option>
                    <option value="🇩🇰">🇩🇰 +45</option>
                    <option value="🇫🇮">🇫🇮 +358</option>
                    <option value="🇮🇪">🇮🇪 +353</option>
                    <option value="🇳🇴">🇳🇴 +47</option>
                    <option value="🇨🇿">🇨🇿 +420</option>
                    <option value="🇸🇰">🇸🇰 +421</option>
                    <option value="🇷🇴">🇷🇴 +40</option>
                    <option value="🇭🇺">🇭🇺 +36</option>
                  </select>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Your mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-[39px] p-2 border-b-2 border-[#D9D9D9] placeholder:text-[#898989] sm:border sm:rounded-r md:w-[398px] sm:border-[#D9D9D9]"
                  />
                </div>

                <div className="flex md:gap-20 gap-8">
                  <select
                    required
                    name="classes"
                    value={formData.classes}
                    onChange={handleChange}
                    className="p-2 border-b-2 border-[#D9D9D9] rounded md:w-[143px] w-[120px] h-[39px] placeholder:text-[#898989] md:border md:rounded "
                  >
                    <option value="" className="text-[#898989]">
                      Class
                    </option>
                    <option value="Nursery">Nursery</option>
                    <option value="KG">KG</option>
                    <option value="Class 1">Class 1</option>
                    <option value="Class 2">Class 2</option>
                    <option value="Class 3">Class 3</option>
                    <option value="Class 4">Class 4</option>
                    <option value="Class 5">Class 5</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                  </select>
                </div>
                <div className="md:pt-20 pt-8 cursor-pointer">
                  {/* <button
                    type="submit"
                    className="md:w-[177px] md:h-[60px] md:px-0 px-8 md:py-0 py-3  bg-[#1B6EA1] text-white p-2 rounded-lg hover:bg-[#1b6ea1c9]"
                  >
                    Submit
                  </button> */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`md:w-[177px] md:h-[60px] md:px-0 px-8 md:py-0 py-3  bg-background-dark text-white p-2 rounded-lg ${
                      loading
                        ? "cursor-not-allowed opacity-70"
                        : "hover:bg-background-light"
                    }`}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
