import Carosal1 from '../../assets/carousel/carosal.webp'
import Sale from '../../assets/carousel/electronic_sale.webp'
import Fishon from '../../assets/carousel/carosal_faishon.webp'
import X1pro from '../../assets/carousel/x1_pro.webp'
import Sumsung_Banner from '../../assets/carousel/Samsung_banner.webp'
import Apple_16pro from '../../assets/carousel/16pro_apple.avif'
import Watch_bannner from '../../assets/carousel/watch_banner.webp'
import Titne_watch from '../../assets/carousel/Titne_watches.jpg'
import Rolex_watch from '../../assets/carousel/Rolex-Sea-Dweller.webp'
import Kids_faishon from '../../assets/carousel/Kids_faishon.webp'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css'



function Carousel() {
  return (
    <div className='h-50 md:h-107.5 my-5 '>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}>

        <SwiperSlide>
          <div className='max-w-7xl h-50 mx-auto flex items-center justify-between gap-4 lg:h-96'>
            <div className='w-full h-45 m-1 lg:h-96 lg:w-[70%] rounded-2xl overflow-hidden '>
              <img src={Carosal1} alt=""
                className='w-full h-full object-cover' />
            </div>

            <div className='hidden lg:flex lg:w-[29%] md:h-96 flex-col justify-between'>

              <div className='w-full md:block lg:h-[49%] rounded-2xl overflow-hidden'>
                <img src={Fishon} alt=""
                  className='w-full h-full object-cover' />
              </div>

              <div className=' lg:block w-full h-[49%] rounded-2xl overflow-hidden'>
                <img src={Kids_faishon} alt=""
                  className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className='max-w-7xl h-50 lg:h-96 flex mx-auto justify-between'>
            <div className='w-full md:w-[70%] h-45 m-1 md:h-full overflow-hidden rounded-2xl '>
              <img src={Sale} alt=""
                className='w-full h-full object-cover' />
            </div>

            <div className='w-[29%]h-full hidden md:flex flex-col justify-between overflow-hidden rounded-2xl'>
            <img src={X1pro} alt="" 
            className='w-full h-full object-cover'/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='max-w-7xl h-50 lg:h-96 flex mx-auto justify-between'>
            <div className='w-full md:w-[70%] h-45 m-1 md:h-full overflow-hidden rounded-2xl '>
              <img src={Watch_bannner} alt=""
                className='w-full h-full object-cover' />
            </div>

            <div className='hidden md:w-[29%] h-96 md:flex flex-col justify-between'>

              <div className='w-full h-[49%] bg-emerald-300 rounded-2xl overflow-hidden'>
                <img src={Titne_watch} alt=""
                  className='w-full h-full object-cover' />
              </div>

              <div className='w-full h-[49%] bg-blue-300 rounded-2xl overflow-hidden'>
                <img src={Rolex_watch} alt=""
                  className='w-full h-full object-cover' />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='max-w-7xl h-50 lg:h-96 flex mx-auto justify-between'>
            <div className='w-full h-45 m-1 md:w-[70%] md:h-full overflow-hidden rounded-2xl '>
              <img src={Sumsung_Banner} alt=""
                className='w-full h-full object-cover ' />
            </div>

            <div className='hidden md:w-[29%] h-full md:flex flex-col justify-between overflow-hidden rounded-2xl'>
            <img src={Apple_16pro} alt="" 
            className='w-full h-full object-cover'/>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>




    </div>
  )
}

export default Carousel
