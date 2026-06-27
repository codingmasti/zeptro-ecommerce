import React, { useEffect, useState } from "react";
import { BlackButton } from "../button/Button";
import { useAddressContext } from "../../context/AddressContext";

function DeliveryAddress() {
 

  const {location, getLocation, address, setAddress} = useAddressContext()
  console.log("location == ",location)

  console.log("Address ===" , address)



  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  useEffect(()=>{
    if(!location) return;

    setAddress((prev) =>({
      ...prev,
      city: location.city || "",
      pincode: location.postcode || "",
      state: location.city || location.state || location.state_district|| ""

    }))
  }, [location])

  return (
    <div className="max-w-3xl md:mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">
        Delivery Address
      </h2>

      <div className="grid gap-4">

        {/* Full Name */}
        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={address.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full border rounded-lg p-3 outline-none focus:border-violet-500"
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block mb-2 font-medium">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            required
            value={address.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
            className="w-full border rounded-lg p-3 outline-none focus:border-violet-500"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-2 font-medium">
            Address Line
          </label>
          <textarea
            name="addressLine"
            required
            value={address.addressLine}
            onChange={handleChange}
            rows="3"
            placeholder="House No, Street, Area"
            className="w-full border rounded-lg p-3 outline-none focus:border-violet-500"
          />
        </div>

        {/* City & State */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">
              City
            </label>
            <input
              type="text"
              name="city"
              required
              value={address.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="w-full border rounded-lg p-3 outline-none focus:border-violet-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              State
            </label>
            <input
              type="text"
              name="state"
              required
              value={address.state}
              onChange={handleChange}
              placeholder="Enter state"
              className="w-full border rounded-lg p-3 outline-none focus:border-violet-500"
            />
          </div>
        </div>

        {/* Pincode */}
        <div>
          <label className="block mb-2 font-medium">
            Pincode
          </label>
          <input
            type="number"
            name="pincode"
            value={address.pincode}
            onChange={handleChange}
            placeholder="Enter pincode"
            className="w-full border rounded-lg p-3 outline-none focus:border-violet-500"
          />
        </div>
        <div className="flex items-center justify-center font-bold text-gray-700">..........OR..........</div>
        <div className="mx-auto">
          <BlackButton content="Detect location" onClick={()=> getLocation()} />
        </div>



      </div>
    </div>
  );
}

export default DeliveryAddress;