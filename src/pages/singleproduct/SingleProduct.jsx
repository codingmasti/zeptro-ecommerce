import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../public/loader.gif";
import { FaStar, FaHeart, FaShoppingCart, FaTruck, FaUndo } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import BreadCrums from "../../components/breadcrums/BreadCrums";
import { BlackButton, Button } from "../../components/button/Button";

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import BestDeal from "../../components/bestdeal/BestDeals";
import { useWishlistContext } from "../../context/WishlistContext";
import { useCartContext } from "../../context/CartContext";


const SingleProduct = () => {

  const [singleProduct, setSingleProduct] = useState("")
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { AddToWishlist } = useWishlistContext()
  const { addToCart } = useCartContext()

  const param = useParams()

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${param.id}`
      );

      const product = res.data;

      setSingleProduct(product);
      setMainImage(product.thumbnail); // default image
    } catch (error) {
      console.log(error);
    }
  };

  console.log(singleProduct)

  useEffect(() => {
    getSingleProduct()
  }, [])

  console.log("thumbnail = ", singleProduct.thumbnail)
  console.log("images = ", mainImage)

  return (
    <>
      {
        singleProduct ? (
          <div className="max-w-7xl mx-auto md:px-4 py-10">
            <BreadCrums title={singleProduct.title} />
            <div className="grid lg:grid-cols-2 gap-10 px-4">
              {/* Left Side */}
              <div>
                <div className="border rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={mainImage}
                    alt="product"
                    className="w-full md:h-125 object-cover"
                  />
                </div>

                {/* Gallery */}
                <div className="flex gap-3 mt-4">
                  {singleProduct.images?.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt=""
                      onClick={() => setMainImage(img)}
                      className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${mainImage === img ? "border-[#7c3aed]" : "border-gray-200"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div>
                <p className="text-green-600 font-semibold mb-2">
                  {singleProduct.availabilityStatus}
                </p>

                <h1 className="text-4xl font-bold mb-4">
                  {singleProduct.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                    <Rating
                      name="text-feedback"
                      value={singleProduct.rating}
                      readOnly
                      precision={0.5}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                  </Box>

                  <span className="text-gray-600">
                    ({singleProduct.rating} • 245 Reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-bold text-[#7c3aed]">
                    ₹ {singleProduct.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {singleProduct.description}
                </p>

                <div className="flex flex-col">
                  {
                    singleProduct.brand ? (
                      <h3 className="font-semibold">Brand: <span className="font-normal"> {singleProduct.brand}</span></h3>
                    ) : ('')
                  }
                  {
                    singleProduct.warrantyInformation ? (
                      <h3 className="font-semibold">Warrenty: <span className="font-normal"> {singleProduct.warrantyInformation}</span></h3>
                    ) : ('')
                  }

                </div>


                {/* Quantity */}
                <div className="flex mt-4 items-center gap-4 mb-6">
                  <span className="font-semibold">Quantity:</span>

                  <button
                    onClick={() =>
                      quantity > 1 && setQuantity(quantity - 1)
                    }
                    className="w-10 h-10 border rounded-lg"
                  >
                    -
                  </button>

                  <span className="font-bold text-lg">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border rounded-lg"
                  >
                    +
                  </button>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mb-8">

                  <Button content='Add to cart' onClick={() => addToCart(singleProduct, quantity)} />

                  <button className="flex items-center gap-2 border px-6 py-3 rounded-lg hover:bg-gray-100"
                    onClick={() => AddToWishlist(singleProduct)}>
                    <FaHeart />
                    Wishlist
                  </button>
                </div>

                {/* Features */}
                <div className="space-y-4 border-t pt-6">
                  <div className="flex items-center gap-3">
                    <FaTruck className="text-[#7c3aed] text-xl" />
                    <span>Free Delivery Available</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaUndo className="text-[#7c3aed] text-xl" />
                    <span>{singleProduct.returnPolicy}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-16 px-4">
              <h2 className="text-3xl font-bold mb-4">
                Product Details
              </h2>

              <h3 className="font-semibold">Shipping: <span className="font-normal"> {singleProduct.shippingInformation}</span></h3>

              <p className="text-gray-600 leading-relaxed">
                {singleProduct.description}
              </p>
            </div>

            {/* Top Review============================================ */}
            <div className="mt-10 px-4">
              <h1 className="text-gray-800 font-bold text-3xl mb-4">Top reviews</h1>
              {
                singleProduct.reviews?.map((review) => {
                  return (
                    <div className="flex flex-col gap-1 mb-10 p-2 rounded-md">
                      <h3 className="flex items-center gap-3"><Avatar src="/broken-image.jpg" />{review.reviewerName}</h3>
                      <div className="ml-10 gap-2">
                        <Rating
                          name="text-feedback"
                          value={review.rating}
                          readOnly
                          precision={0.5}
                          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <p>{review.comment}</p>
                        <button className="px-3 py-1 border rounded-md border-b-purple-900 text-gray-700 mt-2">Helpful</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="bg-gray-50 gap-2 w-full md:p-2 rounded-md px-2">
              <BestDeal onClick={singleProduct} />
              <Link to="/products"><BlackButton content="Shop Now" /></Link>
            </div>
          </div>
          // ============================================
        ) : (
          <div className='flex items-center justify-center h-100'>

            <img src={Loader} alt={Loader} />
          </div>
        )
      }
    </>
  );
};

export default SingleProduct;