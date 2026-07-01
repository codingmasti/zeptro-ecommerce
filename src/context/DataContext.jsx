import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [categories, setCategores] = useState([])
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState("All")



  //Fetch all product from Api====================================================================================================

  const fetchAllProducts = async () => {
    try {
      const URL = "https://dummyjson.com/products?limit=194"

      const res = await axios.get(URL);
      setData(res.data.products);
    } catch (error) {
      console.log("Product API ERROR =", error);
    }
  };



  useEffect(() => {
    fetchAllProducts();
  }, []);



  //Filter category from api==============================================================================================================
  const allowedCategories = [
    "groceries",
    "kitchen-accessories",
    "mobile-accessories",
    "smartphones",
    "sports-accessories",
    "womens-bags",
    //"sunglasses",
    //"womens-shoes",
    "womens-dresses",
    "home-decoration",
    "fragrances",
    "beauty"
  ];



  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property]
    })
    newVal = ["All", ...new Set(newVal)]
    return newVal
  }


  const categoryOnlyData = [
    "All",
    ...getUniqueCategory(data, "category")
      .filter(cat => allowedCategories.includes(cat))
  ];

  const allowedProducts = data.filter((item) =>
    allowedCategories.includes(item.category)
  );

  const brandOnlyData = getUniqueCategory(
    allowedProducts,
    "brand"
  );

  const value = useMemo(() => ({
    data,
    setData,
    fetchAllProducts,

    categoryOnlyData,
    brandOnlyData,


    categories,


    search,
    setSearch,

    selectedCategory,
    setSelectedCategory,
  }), [data, search, selectedCategory])


  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};








// ===========================================================================

const useMyContext = () => {
  return useContext(DataContext)
}

export { DataProvider, useMyContext };