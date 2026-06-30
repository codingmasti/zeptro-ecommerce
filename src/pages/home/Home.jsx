import React, { lazy, Suspense } from 'react'
import Carousel from '../../components/carousel/Carousel'
const CategorySlider = lazy(() => import('../../components/category/CategorySlider'))
const BestDeal = lazy(() => import('../../components/bestdeal/BestDeals'))
const WinterWear = lazy(() => import('../../components/winter-ware/WinterWear'))
import Adds from '../../components/ads/Adds'
import PromotionBanner from '../../components/PromotionalBanner/PromotionBanner'




function Home() {
  return (
    <div >
      <Carousel />
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySlider />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <BestDeal />
      </Suspense>

      <Adds />

      <Suspense fallback={<div>Loading...</div>}>
        <WinterWear />
      </Suspense>
      
      <PromotionBanner />

    </div>
  )
}

export default Home
