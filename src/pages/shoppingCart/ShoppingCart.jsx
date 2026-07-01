
import React from 'react'
import { BlackButton } from '../../components/button/Button'
import { useCartContext } from '../../context/CartContext'
import FindItem from '../../../public/empty-cart.avif'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom'


const MyCart = () => {

  const { cartItem, totalPrice, incrementQuantity, decrementQuantity, removeFromCart } = useCartContext()


  return (
    <section className='bg-[#ffffff] '>
      <div className='max-w-7xl md:mx-auto flex flex-col '>
        <div className='flex w-full h-15  md:ml-5'>
          <Link to='/products'>
            <BlackButton content="← Back to Shop" />
          </Link>
          <h3 className='font-bold text-2xl text-zinc-800 ml-10'>Shopping Cart</h3>
        </div>

        {
          cartItem.length === 0 ? (

            <div className='flex items-center justify-center'>
              <img src={FindItem} alt="" />
            </div>

          ) : (
            <div className='w-full mt-5 flex flex-col md:flex-row justify-between'>
              <div className='lg:w-[68%] lg:h-[80vh] overflow-y-auto'>

                {
                  cartItem?.map((item) => {
                    return (
                      <div className=' w-[95%] flex md:h-28 m-2 mx-auto overflow-hidden rounded-xl bg-zinc-100'>
                        <div className='w-[66%] flex  h-full'>
                          <div className='w-[37%]  md:w-28 h-28 md:ml-10  ' >
                            <img src={item.thumbnail} className='h-full w-full object-cover' />
                          </div>

                          <div className='md:ml-10 h-28 W-[33%]  flex flex-col itmes-center justify-evenly pl-3'>
                            <h3 className='font-semibold text-sm md:text-2xl text-zinc-800'>{item.title}</h3>
                            <span className='font-semibold text-purple-700 text-sm md:text-xl'>₹ {item.price}</span>
                          </div>
                        </div>
                        <div className=' w-[29%] md:w-40  h-28 flex flex-col md:flex-row-reverse mx-auto items-center justify-center md:gap-4'>
                          <button className='h-1/2 text-center text-red-500 text-2xl cursor-pointer' onClick={() => removeFromCart(item.id)}><RxCross1 /></button>
                          <div className='w-full flex itmes-center justify-evenly'>
                            <button className='p-1.5 bg-black/10 text-zinc-500 rounded-full cursor-pointer' onClick={() => incrementQuantity(item.id)} ><FaPlus /></button>

                            <span className='text-zinc-800 '>{item.cartQuantity}</span>

                            <button className='p-1.5 bg-black/10 text-zinc-500 rounded-full cursor-pointer' onClick={() => decrementQuantity(item.id)} ><FaMinus /></button>
                          </div>
                        </div>

                      </div>
                    )
                  })
                }
              </div>


              {/* Total Summry card */}
              <div className='md:w-[27%] m-2 h-75 bg-zinc-100 rounded-xl flex flex-col items-center'>
                <h3 className='text-zinc-800 font-semibold text-2xl pl-5 pt-5'>Order Summary</h3>

                <div className='w-[88%] flex justify-between text-zinc-500 font-semibold mt-4'>
                  <h4>Items</h4>
                  <span>{cartItem.length}</span>
                </div>

                <div className='w-[88%] flex justify-between text-zinc-500 font-semibold mt-2'>
                  <h4>Subtotal</h4>
                  <span>₹{totalPrice}</span>
                </div>

                <div className='w-[88%] flex justify-between text-zinc-500 font-semibold mt-2'>
                  <h4>Delivery</h4>
                  <p className='text-emerald-500'>FREE</p>
                </div>

                <div className='w-[88%] h-px bg-zinc-500 mt-3 mx-auto '></div>

                <div className='w-[88%] flex justify-between text-zinc-800 font-bold text-xl mt-2'>
                  <h4>Total</h4>
                  <span>₹{totalPrice}</span>
                </div>
                <Link to='/checkout' className='mt-10'>
                  <span className='h-10 w-40 -mt-10'><BlackButton content='Proceed to Checkout →' /></span>
                </Link>
              </div>
            </div>
          )
        }



      </div>
    </section>
  )
}

export default MyCart
