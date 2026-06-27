import React, { useEffect } from 'react'
import { useMyContext } from '../../context/DataContext'

function FilterSection({ brand, search, setSearch, setBrand, priceRange, setPriceRange, category, setCategory, handleBrandChange, handleCategoryChange}) {
  const { categoryOnlyData, brandOnlyData } = useMyContext()

  




  return (
    <div className='bg-gray-100 p-4 rounded-md h-max '>
      {/* categroy only data */}

      <h1 className='mt-5 font-semibold text-xl'>Category</h1>
      <div className='flex flex-col gap-2 '>
        
        {
          categoryOnlyData?.map((item, index) => {
            //console.log("filter ==", handleCategoryChange)
            return <div key={index} className='flex gap-2'>
              <input type="checkbox"
                name={item}
                checked={category === item}
                value={item}
                onChange={handleCategoryChange} />
              <button className='cursor-pointer uppercase'>{item}</button>
            </div>
          })
        }
      </div>

      {/* Brand only data */}
      <h1 className='mt-5 font-semibold text-xl mb-3'>Brand</h1>
      <select className='bg-white w-full text-xl border-gray-200 border-2 rounded-md'
        value={brand}
        onChange={handleBrandChange}>
        {
          brandOnlyData?.map((item, index) => {
            return <option key={index} value={item} className='uppercase'>{item}</option>
          })
        }

      </select>

      {/* Price range */}

      <h1 className='mt-5 font-semibold text-xl mb-3'>Price Range</h1>
      <div className='flex flex-col gap-2'>
        <label htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
        <input type="range"
          value={priceRange[1]}
          min="0" max="1000"
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
      </div>
      <button className='bg-[#7c3aed] text-white rounded-md px-3 py-1 mt-5 cursor-pointer'
      onClick={() => {console.log("clicked reset"); setSearch(""); setCategory('All'); setBrand('All'); setPriceRange([0,1000])} }>Reset Filter</button>


    </div>
  )
}

export default FilterSection
