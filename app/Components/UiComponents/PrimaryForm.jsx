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
          setFormData({ name: "", email: "",mobileNumber: "", message: "" });
          setStatus(result.message);
        } else {
          setStatus(result.message || "Something went wrong");
        }
      };
      return (
        <div>
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label>Mobile Number:</label>
              <input
                type="number"
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                required
              />
            </div>

            <div>
              <label>Message:</label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
          {status && <p>{status}</p>}
        </div>
      );




}
    