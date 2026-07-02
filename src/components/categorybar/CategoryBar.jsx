import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useMyContext } from '../../context/DataContext'



const CategoryBar = () => {

  const { categoryOnlyData, setSelectedCategory } = useMyContext()


  

  return (
    <div className="w-full bg-white scrollbar-none shadow-sm overflow-x-auto">
      <div className="max-w-6xl mx-auto flex items-center gap-6 px-4 py-3 whitespace-nowrap">
        {categoryOnlyData.map((category) => (
          <NavLink
            key={category}
            to={`/products?category=${category.toLowerCase()}`}
            className="text-gray-700 font-medium hover:text-[#7c3aed] transition cursor-pointer"
            
          >
            <button onClick={() => setSelectedCategory(category)}>
              {category}
            </button>

          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;