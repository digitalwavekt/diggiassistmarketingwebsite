'use client'
import React from 'react'
import { useState } from "react";

export default function PrimaryForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setFormData({ name: "", email: "", mobileNumber: "", message: "" });
      setStatus(result.message);
    } else {
      setStatus(result.message || "Something went wrong");
    }
  };
  return (
    <div>
      <h1 className='text-2xl font-semibold text-Tcolor capitalize mb-3 lg:mb-5'>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className='space-y-5'>
          <div>
            <input
              className="bg-gray-50 border border-BorderColor rounded-lg focus:ring-0 focus:border-Pcolor block w-full h-14 px-5 py-2 font-Manrope text-base text-Tcolor"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder='Name'
              required
            />
          </div>
          <div>
            <input
              className="bg-gray-50 border border-BorderColor rounded-lg focus:ring-0 focus:border-Pcolor block w-full h-14 px-5 py-2 font-Manrope text-base text-Tcolor"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder='Email'
              required
            />
          </div>
          <div>
            <input
              className="bg-gray-50 border border-BorderColor rounded-lg focus:ring-0 focus:border-Pcolor block w-full h-14 px-5 py-2 font-Manrope text-base text-Tcolor"
              type="number"
              value={formData.mobileNumber}
              onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
              placeholder='Mobile Number'
              required
            />
          </div>

          <div>
            <textarea
              className="bg-gray-50 border border-BorderColor rounded-lg  focus:ring-0 focus:border-Pcolor block w-full h-32 px-5 py-2 font-Manrope text-base text-Tcolor"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder='Message'
              required
            />
          </div>
          <button type="submit" className='text-base uppercase font-medium text-white bg-Pcolor rounded-lg px-10 py-4 transition-all hover:text-white hover:bg-Hcolor'>Send Message</button>
        </div>
      </form>
      {status && <p>{status}</p>}
    </div>
  );




}
