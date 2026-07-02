import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-700">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-3">
          Have questions? We're here to help.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-purple-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-purple-600"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-purple-600"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-purple-600"
            />

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-purple-600 text-white rounded-2xl p-8">

          <h2 className="text-2xl font-semibold mb-8">
            Get In Touch
          </h2>

          <div className="space-y-6">

            <div className="flex gap-4">
              <FiMail size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>support@zaptor.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FiPhone size={24} />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FiMapPin size={24} />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>New Delhi, India</p>
              </div>
            </div>

            <div className="flex gap-4">
              <FiClock size={24} />
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p>Mon - Sat : 9:00 AM - 8:00 PM</p>
              </div>
            </div>

          </div>

          <div className="mt-10 border-t border-purple-400 pt-6">
            <h3 className="font-semibold mb-2">
              Customer Support
            </h3>
            <p className="text-sm">
              Our support team usually replies within 24 hours.
            </p>
          </div>

        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <div className="border rounded-xl p-4">
            <h3 className="font-semibold">
              How can I track my order?
            </h3>
            <p className="text-gray-600 mt-2">
              You can track your order from the Orders section in your account.
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <h3 className="font-semibold">
              What is your return policy?
            </h3>
            <p className="text-gray-600 mt-2">
              Products can be returned within 7 days of delivery.
            </p>
          </div>

          <div className="border rounded-xl p-4">
            <h3 className="font-semibold">
              How long does shipping take?
            </h3>
            <p className="text-gray-600 mt-2">
              Usually 2-5 business days depending on your location.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default ContactUs;