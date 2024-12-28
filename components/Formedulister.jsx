"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const Formedulister= () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",

    phone: "",
    source : "Schools123 - https://schools123.vercel.app",
  });

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
          phone: "",
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

  return (
    <>
      <div className="flex gap-20 justify-between items-center">
        <div className="w-[795px] h-[539px] md:block hidden  ">
          <Image
            src="/bookingformgoedu.png"
            alt="School choice"
            width={1000}
            height={1000}
            className="w-[795px] h-[539px] object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full p-6 bg-white">
          <div className="md:hidden block w-[226px] text-[20px]">
            Confuse to choose the Best School ?
          </div>
          <h3 className="md:text-xl mt-8 text-[12px] mb-6 text-[#323232]">
            Fill this form and get in touch with our counsellor
          </h3>
          <form onSubmit={handleSubmit} className="space-y-7">
            <input
            required
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border-b-2 border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded lg:w-[498px] sm:border-[#D9D9D9]"
            />
            {/* <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border-b-2 border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded sm:w-[462px] sm:border-[#D9D9D9]"
          /> */}
            <div className="flex">
              <select className="w-[80px] md:w-[100px] h-[39px] border-b-2 border-[#D9D9D9] rounded-l placeholder:text-[#898989] sm:border sm:rounded-l sm:p-2 sm:border-[#D9D9D9]">
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
                className="w-full h-[39px] p-2 border-b-2 border-[#D9D9D9] placeholder:text-[#898989] sm:border sm:rounded-r sm:w-[398px] sm:border-[#D9D9D9]"
              />
            </div>

            {/* <div className="flex md:gap-20 gap-8">
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="p-2 border-b-2 border-[#D9D9D9] rounded md:w-[143px] w-[120px] h-[39px] placeholder:text-[#898989] md:border md:rounded "
            >
              <option value="" className="text-[#898989]">
                Class
              </option>
              
            </select>
            <select
              name="board"
              value={formData.board}
              onChange={handleChange}
              className="p-2 border-b-2 border-[#D9D9D9] rounded md:w-[143px] w-[120px] h-[39px] placeholder:text-[#898989] md:border md:rounded"
            >
              <option value="" className="text-[#898989]">
                BOARD
              </option>
              
            </select>
          </div> */}
            <div className="md:pt-2 pt-8 cursor-pointer">
              {/* <button
                type="submit"
                className="md:w-[160px] md:h-[50px] md:px-0 px-8 md:py-0 py-3  bg-[#1B6EA1] text-white p-2 rounded-lg hover:bg-[#1b6ea1c9]"
              >
                Submit
              </button> */}
              <button
                type="submit"
                disabled={loading}
                className={`md:w-[160px] md:h-[50px] md:px-0 px-8 md:py-0 py-3 bg-background-dark text-white p-2 rounded-lg ${
                  loading
                    ? "cursor-not-allowed opacity-70"
                    : "hover:bg-[#9b1750b0]"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Formedulister;
