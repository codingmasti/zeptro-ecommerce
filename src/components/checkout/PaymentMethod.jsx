import React, { useState } from "react";
import { useAddressContext } from "../../context/AddressContext";

function PaymentMethod() {
  const {paymentMethod, setPaymentMethod} = useAddressContext()

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">
        Select Payment Method
      </h2>

      <div className="space-y-4">
        {/* Cash on Delivery */}
        <label className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer hover:border-violet-500">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span>Cash on Delivery (COD)</span>
        </label>

        {/* UPI */}
        <label className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer hover:border-violet-500">
          <input
            type="radio"
            name="payment"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span>UPI Payment</span>
        </label>

        {/* Card */}
        <label className="flex items-center gap-3 border p-4 rounded-lg cursor-pointer hover:border-violet-500">
          <input
            type="radio"
            name="payment"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span>Credit / Debit Card</span>
        </label>
      </div>

      {/* Card Details */}
      {paymentMethod === "card" && (
        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border rounded-lg p-3"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="border rounded-lg p-3"
            />

            <input
              type="text"
              placeholder="CVV"
              className="border rounded-lg p-3"
            />
          </div>

          <input
            type="text"
            placeholder="Card Holder Name"
            className="w-full border rounded-lg p-3"
          />
        </div>
      )}

      {/* UPI Details */}
      {paymentMethod === "upi" && (
        <div className="mt-6">
          <input
            type="text"
            placeholder="Enter UPI ID"
            className="w-full border rounded-lg p-3"
          />
        </div>
      )}
    </div>
  );
}

export default PaymentMethod;