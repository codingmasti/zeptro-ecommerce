import React from 'react'
import { Button } from '../button/Button'
import { FaHeart, FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { useWishlistContext } from '../../context/WishlistContext'

function ProductCard({ product }) {
    const navigate = useNavigate()


    // console.log(product)
    const { AddToWishlist } = useWishlistContext()
    const { addToCart } = useCartContext()
    return (
        <div key={product.id} className='w-43 md:w-60 h-65 md:h-85 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden'>
            <div className='w-full h-[70%] overflow-hidden bg-gray-200 relative rounded-md'>
                <span className='absolute md:top-1 right-0 bg-white z-10 rounded-full mr-3 mt-3 p-2 ' onClick={() => { AddToWishlist(product) }}><FaHeart className='text-gray-400 hover:text-rose-500 transition-all duration-300 hover:scale-110 text-2xl ' /></span>

                <img src={product?.thumbnail}
                    onClick={() => navigate(`/products/${product.id}`)}
                    alt=""
                    className='hover:scale-105 transition duration-300' />
                <div className='bg-purple-100 w-16 px-1 ml-2 rounded-md absolute flex items-center gap-1.5 -mt-4 md:-mt-7 z-10'>{product?.rating} <span className='text-purple-700'> <FaStar /></span></div>
            </div>
            <div className='w-full h-[30%]'>
                <h3 className='text-xl font-semibold m-2 line-clamp-1'>{product?.title}</h3>
                <div className='flex text-purple-700 font-medium items-center justify-between my-2 mx-2 -mt-1'>
                    <span>$ {product?.price}</span>
                    <Button onClick={() => {
                        //console.log("clicked")
                        addToCart(product)
                    }} content="ADD" />
                </div>

            </div>
        </div>
    )
}

export default ProductCard
