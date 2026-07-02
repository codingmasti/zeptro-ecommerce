import React from 'react'
import CheckoutStepper from '../../components/checkout/CheckoutStepper'
import PaymentMethod from '../../components/checkout/PaymentMethod'
import OrderReview from '../../components/checkout/OrderReview'
import DeliveryAddress from '../../components/checkout/DeliveryAddress'


const stepsConfig = [
  {
    name: "Customer Info",
    Component: DeliveryAddress
  },
  {
    name: "Payment",
    Component: PaymentMethod
  },
  {
    name: "Order Summary",
    Component: OrderReview
  },
]

function Checkout() {
  return (
    <div className='max-w-6xl flex  md:mx-auto'>
      <div className='w-full lg:mx-auto'>
        <CheckoutStepper stepsConfig={stepsConfig} />
      </div>
    </div>
  )
}

export default Checkout
