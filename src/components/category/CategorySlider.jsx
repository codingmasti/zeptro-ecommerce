import React, { useRef, useState, useEffect, useMemo } from "react";

import Beauty from '../../assets/beauty.webp'
import HomeDecoration from '../../assets/homedecoration.webp'
import Fragnence from '../../assets/fragnence.webp'
import Kitchen from '../../assets/kitchen.webp'
import Furniture from '../../assets/furniture.webp'
import SkinCare from '../../assets/skin-care.webp'
import Tshirt from '../../assets/white-tshirt.png'
import Women_Dress from '../../assets/women-dress.jpg'
import { Link } from "react-router-dom";
import { useMyContext } from "../../context/DataContext";
import ProductCard from "../product_cart/ProductCard";




const categories = [
  {
    id: 1,
    category: "fragrances",
    image: Fragnence
  },
  {
    id: 2,
    category: "beauty",
    image: Beauty
  },
  {
    id: 3,
    category: "furniture",
    image: Furniture
  },
  {
    id: 4,
    category: "skin-care",
    image: SkinCare
  },
  {
    id: 5,
    category: "mens-shirts",
    image: Tshirt
  },
  {
    id: 6,
    category: "womens-dresses",
    image: Women_Dress
  },
  {
    id: 7,
    category: "home-decoration",
    image: HomeDecoration
  },
  {
    id: 8,
    category: "kitchen-accessories",
    image: Kitchen
  },
]



export default function CategorySlider() {
  const sliderRef = useRef(null);

  const { data, selectedCategory, setSelectedCategory } = useMyContext()

  //const newFilterdData = data?.filter((product) => product.category === selectedCategory)

  const newFilterdData = useMemo(() => {
    return data?.filter((product) => product.category === selectedCategory)
  }, [data, selectedCategory])

  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const updateButtons = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setShowPrev(slider.scrollLeft > 0);

    setShowNext(
      slider.scrollLeft + slider.clientWidth <
      slider.scrollWidth - 5
    );
  };

  const scroll = (direction) => {
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    updateButtons();

    slider?.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    return () => {
      slider?.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);


  console.log("Category slider run huaa.....")



  return (
    <section className="mt-10">
      <div className="relative flex flex-col justify-center max-w-6xl mx-auto my-5">
        <div className="flex justify-between items-center px-2">
          <h3 className=" text-xl md:text-3xl font-bold my-5">Explore Popular Categories</h3>
          <Link to="/products" className="text-purple-500">Viwe all</Link>
        </div>
        {showPrev && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
          >
            ❮
          </button>
        )}

        <div
          ref={sliderRef}
          className="flex w-full gap-1 lg:gap-15 text-center overflow-x-hidden scroll-smooth scrollbar-hide px-12"
        >
          {categories?.map((category) => (

            <div
              key={category.id}
              className=" flex flex-col md:h-50 w-30 shrink-0 items-center justify-center "
              onClick={() => setSelectedCategory(category.category)}
            >
              <div className="bg-gray-200 w-20 h-20 md:h-32.5 md:w-32.5 rounded-full overflow-hidden">
                <img src={category.image} alt={category.category}
                  width={300}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
              <h3 className="text-sm md:text-lg font-semibold mt-2">{category.category}</h3>
            </div>
          ))}
        </div>

        {showNext && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
          >
            ❯
          </button>
        )}
      </div>

      {/* Product list */}

      <div className="grid grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto gap-4">
        {
          newFilterdData?.slice(0, 5).map((item) => {
            return (
              <div key={item.id}
                className="m-2" >
                <ProductCard product={item} />
              </div>
            )
          })
        }
      </div>
    </section>
  );
}



