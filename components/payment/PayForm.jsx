"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
const PayForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    amount: "",
    muid: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: formData.amount,
          mobile: formData.mobile,
          muid: formData.muid,
        }),
      });
      const data = await response.json();
      if (data.redirectUrl) {
        router.push(data.redirectUrl);
      } else {
        console.error("Payment initiation failed:", data);
      }
    } catch (error) {
      console.error("Error during payment initiation:", error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">PhonePe Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Mobile No.
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Enter mobile no."
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Enter the amount"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">MUID</label>
          <input
            type="text"
            name="muid"
            value={formData.muid}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Enter MUID"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600"
        >
          Pay
        </button>
      </form>
    </div>
  );
};
export default PayForm;
