import { BlackButton, Button } from "../../components/button/Button";
import { useState } from "react";
import { FaHeart, FaTrash, FaShoppingCart } from "react-icons/fa";
import { useWishlistContext } from "../../context/WishlistContext";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Wishlist = () => {


  const { wishlistItem, RemoveFromWishlist } = useWishlistContext()
  const { addToCart } = useCartContext()

  console.log("wishlist me data show huaa ===", wishlistItem)
  const removeItem = (id) => {
    //setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-8">
        <FaHeart className="text-red-500 text-3xl" />
        <h1 className="text-3xl font-bold">
          My Wishlist
        </h1>
      </div>

      {wishlistItem.length > 0 ? (
        <div className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlistItem.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md  overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-[60%] w-full lg:h-64 bg-gray-100 flex justify-center items-center">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:p-5">
                <h2 className="text-md px-2 font-semibold line-clamp-1 mt-1">
                  {item.title}
                </h2>

                <p className="text-sm font-bold text-purple-700 px-2 mb-1 md:mb-4">
                  ₹{item.price}
                </p>

                <div className="flex gap-1 md:gap-3 p-1 ">
                  <Button content="Add to cart" onClick={() => addToCart(item)} />

                  <button
                    onClick={() => RemoveFromWishlist(item.id)}
                    className="bg-gray-100 transition-all duration-200 px-2 md:px-4 rounded-lg border border-purple-700"
                  >
                    <FaTrash  className="text-rose-400"/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty Wishlist */
        <div className="text-center py-20 flex flex-col items-center justify-center">
          <FaHeart className="text-7xl text-gray-300 mx-auto mb-5" />

          <h2 className="text-3xl font-bold mb-3">
            Your Wishlist is Empty
          </h2>

          <p className="text-gray-500 mb-6">
            Save your favorite products here.
          </p>
          <Link to='/products'>
            <BlackButton content='Continue Shopping' />
          </Link>

        </div>
      )}
    </div>
  );
};

export default Wishlist;