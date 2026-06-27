import { Button } from '../button/Button'
import { useMyContext } from '../../context/DataContext'
import { useEffect } from 'react';
import ProductCard from '../product_cart/ProductCard';
import { Link } from 'react-router-dom';
const WinterWear = () => {



  const { data, fetchAllProducts } = useMyContext();

  useEffect(() => {
    fetchAllProducts()
  }, [])
  return (
    <section className='mt-4' >
      <div className="max-w-7xl bg-gray-100 mx-auto px-4 py-8 rounded-md">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className=" text-xl md:text-3xl font-bold">
              60% Off Or More On Winter-Wear
            </h2>
            <p className="text-gray-500 mt-2">
              Grab the hottest deals before they're gone.
            </p>
          </div>


          <Link to="/products" className='text-purple-500'>View all</Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {data.slice(88, 93).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WinterWear