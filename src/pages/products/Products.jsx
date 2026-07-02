import React, { useEffect, useMemo, useState } from 'react'

import { FaStar } from 'react-icons/fa6';
import { Button } from '../../components/button/Button';
import { useMyContext } from '../../context/DataContext';
import ProductCard from '../../components/product_cart/ProductCard';
import FilterSection from '../../components/filter/FilterSection';
import Pagination from '../../components/pagination/Pagination';
import Loader from '../../../public/loader.gif'
import { useDebounce } from '../../hooks/useDebounce';
import NodataFound from '../../../public/nodata.png'
import { PiSlidersHorizontalThin } from "react-icons/pi";

const Products = () => {

  const { data, search, setSearch, fetchAllProducts, selectedCategory, setSelectedCategory } = useMyContext();
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [page, setPage] = useState(1)
  const [showFilter, setShowFilter] = useState(false)

  const deboncedSearch = useDebounce(search, 500);
  const searchValue = deboncedSearch.trim().toLowerCase()



  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
    setSelectedCategory("All")
    setPage(1)
  }


  const activeCategory = selectedCategory !== "All" ? selectedCategory : category



  const filteredData = useMemo(() => {
    return data?.filter((item) => {
      const matchesSearch =
        searchValue === "" ||
        item.title?.toLowerCase().includes(searchValue) ||
        item.brand?.toLowerCase().includes(searchValue) ||
        item.category?.toLowerCase().includes(searchValue);

      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory;

      return (
        matchesSearch &&
        matchesCategory &&
        (brand === "All" || item.brand === brand) &&
        item.price >= Number(priceRange[0]) &&
        item.price <= Number(priceRange[1])
      );
    })
  },[data, activeCategory, brand, priceRange, searchValue])

  const PageHandler = (selectedPage) => {
    setPage(selectedPage)
  }



  const DynamicPage = useMemo(() => {
    return Math.ceil(filteredData?.length / 12)
  },[filteredData])

  //Handle show filter menue
  const handleFilterMenu = () => {
    setShowFilter(!showFilter)
  }


  const noProductDueToPrice = filteredData.length === 0 && priceRange[1] < Math.max(...data?.map((item) => item.price))


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (selectedCategory !== "All") {
      setCategory("All");

    }
  }, [selectedCategory]);


  useEffect(() => {
    if (deboncedSearch.trim() !== "") {
      setPriceRange([0, 2000]);
      setBrand("All")
      setCategory("All")
      setPage(1);
    }
  }, [deboncedSearch]);






  return (
    <div className=' max-w-6xl mx-auto text-black md:mt-10  mt-2'>

      {
        data?.length > 0 ? (
          <div className='flex w-full'>
            <div className='  md:w-[20%] '>
              {showFilter && (
                <>
                  <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setShowFilter(false)}
                  />

                  <div className="fixed top-0 left-0 w-72 h-full bg-white z-50 p-4 overflow-y-auto lg:hidden">
                    <div className="flex justify-end mb-4">
                      <button
                        onClick={() => setShowFilter(false)}
                        className="text-2xl"
                      >
                        ✕
                      </button>
                    </div>

                    <FilterSection
                      brand={brand}
                      setBrand={setBrand}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      category={category}
                      setCategory={setCategory}
                      handleBrandChange={handleBrandChange}
                      handleCategoryChange={handleCategoryChange}
                      setSearch={setSearch}
                    />
                  </div>
                </>
              )}
              <div className='hidden md:flex'>
                <FilterSection
                  brand={brand}
                  setBrand={setBrand}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  category={category}
                  setCategory={setCategory}
                  handleBrandChange={handleBrandChange}
                  handleCategoryChange={handleCategoryChange}
                  setSearch={setSearch}
                />
              </div>

            </div>
            {
              filteredData?.length > 0 ? (
                <div className='w-full m-2 items-center md:w-[79%] '>
                  <div className='flex md:hidden justify-between'>
                    <div className='flex items-center gap-2'
                      onClick={handleFilterMenu}>
                      <PiSlidersHorizontalThin />
                      <h2>filter & short</h2>
                    </div>

                    <div>{data.length} Products</div>
                  </div>

                  <hr className='mt-3 md:hidden' />



                  <div className='grid grid-cols-2 md:grid-cols-3 place-items-center lg:grid-cols-3 mt-7 md:mt-0 gap-4'>
                    {
                      
                      filteredData?.slice(page * 9 - 9, page * 9).map((product) => {
                        return (<ProductCard key={product.id} product={product} />)
                      })
                    }
                  </div>
                  <div className='mx-auto w-[80%]'>
                    <Pagination PageHandler={PageHandler} page={page} DynamicPage={DynamicPage}
                    />
                  </div>


                </div>
              ) : (
                <div className='flex items-center justify-center w-full '>
                  <img src={NodataFound} className='w-125 h-100 object-cover' />
                </div>
              )
            }


          </div>
        ) : (
          <div className='flex items-center justify-center h-100'>

            <img src={Loader} alt={Loader} />
          </div>
        )
      }

    </div>
  )
}

export default Products
