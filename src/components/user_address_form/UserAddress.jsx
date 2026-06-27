import React, { useState } from 'react';

function DeliveryAddress() {
  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    addressLine: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(address);
    alert("Address Saved Successfully");
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6">
          Delivery Address
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={address.fullName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={address.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border"
            required
          />

          <textarea
            name="addressLine"
            placeholder="House No, Street, Area"
            value={address.addressLine}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-lg border resize-none"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              className="p-3 rounded-lg border"
              required
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleChange}
              className="p-3 rounded-lg border"
              required
            />

          </div>

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={address.pincode}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border"
            required
          />

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-3 rounded-lg font-semibold hover:bg-violet-700 transition"
          >
            Save Address
          </button>

        </form>
      </div>
    </section>
  );
}

export default DeliveryAddress;