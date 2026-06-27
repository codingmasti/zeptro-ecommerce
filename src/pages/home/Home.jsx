import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import CategorySlider from '../../components/category/CategorySlider'
import BestDeal from '../../components/bestdeal/BestDeals'
import WinterWear from '../../components/winter-ware/WinterWear'
import Adds from '../../components/ads/Adds'
import ProductCard from '../../components/product_cart/ProductCard'
import PromotionBanner from '../../components/PromotionalBanner/PromotionBanner'




function Home() {
  return (
    <div >
      <Carousel />
      <CategorySlider />
      <BestDeal />
      <Adds />
      <WinterWear /> 
      <PromotionBanner />
     
    </div>
  )
}

export default Home
