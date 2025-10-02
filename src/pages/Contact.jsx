import React, { useState } from "react";
import { API_BASE_URL } from "../config";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validate form
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    return newErrors;
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMsg("");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Failed to submit contact");
      }
      setFormData({ name: "", email: "", phone: "", comment: "" });
      setErrors({});
      setSuccessMsg("✅ Your message has been sent successfully!");
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      setSuccessMsg("");
      setErrors({ submit: "Failed to send. Please try again later." });
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-[20vh] bg-black text-white flex flex-col items-center justify-center px-4 py-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact us!</h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-6"
      >
        {/* Name + Email */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-500 bg-transparent px-4 py-3 text-white focus:outline-none focus:border-white"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="flex-1">
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-500 bg-transparent px-4 py-3 text-white focus:outline-none focus:border-white"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number *"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-500 bg-transparent px-4 py-3 text-white focus:outline-none focus:border-white"
          />
            {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Comment (optional) */}
        <textarea
          rows="4"
          name="comment"
          placeholder="Comment (optional)"
          value={formData.comment}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-500 bg-transparent px-4 py-3 text-white focus:outline-none focus:border-white"
        ></textarea>

        {/* Success / Error Message */}
        {successMsg && <p className="text-green-400">{successMsg}</p>}
        {errors.submit && <p className="text-red-400">{errors.submit}</p>}

        {/* Button */}
        <button
          type="submit"
          className="w-full md:w-40 md:hover:bg-zinc-100 md:hover:text-black md:border-[1px] md:border-zinc-100 md:text-white font-medium py-3 rounded-md transition duration-200 cursor-pointer text-black bg-zinc-200 md:bg-transparent"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactUs;



 