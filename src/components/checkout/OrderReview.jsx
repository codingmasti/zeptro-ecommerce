import React from "react";
import OrderSuccessPopup from "./Popup";
import { useAddressContext } from "../../context/AddressContext";
import { useCartContext } from "../../context/CartContext";

function OrderReview() {
  const { address, paymentMethod } = useAddressContext()
  const { cartItem, totalPrice } = useCartContext()


  console.log("cart item ===", cartItem)


  

  return (
    <div className="max-w-7xl mx-auto bg-white  p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">
        Review Your Order
      </h2>

      <div className="md:flex justify-between">
        {/* Products */}
        <div className="md:w-[49%]">
          <h3 className="text-lg font-semibold mb-2">
            Order Items
          </h3>

          <div className="max-w-3xl border rounded-lg divide-y">
            {cartItem?.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4"
              >
                <div className="flex gap-10">
                  <div className="w-20">
                    <img src={item.thumbnail} alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.cartQuantity}
                    </p>
                  </div>
                </div>

                <p>
                  ₹{item.price * item.cartQuantity}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-[49%] mt-10">
          {/* Address */}
          <div className="mb-6 ">
            <h3 className="text-lg font-semibold mb-2">
              Delivery Address
            </h3>

            <div className="border rounded-lg p-4">
              <p>{address.fullName}</p>
              <p>{address.mobile}</p>
              <p>{address.addressLine}</p>
              <p>
                {address.city}, {address.state}
              </p>
              <p>{address.pincode}</p>
            </div>
          </div>

          {/* Payment */}
          
            <div className="mb-6 max-w-3xl ">
              <h3 className="text-lg font-semibold mb-2">
                Payment Method
              </h3>

              <div className="border rounded-lg p-4">
                {paymentMethod}
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center border-t pt-4">
              <h3 className="text-xl font-bold">
                Total Amount
              </h3>

              <p className="text-xl font-bold">
                ₹{totalPrice}
              </p>
            </div>
          
        </div>

      </div>



      {/* Place Order */}
      {/* <button
        className="w-full mt-6 bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-700 transition"
      >
        Place Order
      </button> */}
      <OrderSuccessPopup />
    </div>
  );
}

export default OrderReview;