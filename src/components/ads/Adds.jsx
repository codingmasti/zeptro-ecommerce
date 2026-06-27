import { Button } from '../button/Button'
import Vegitable from '../../assets/vegitables.jpg'
import Vivo_banner from '../../assets/vivo-V40E-Banner.webp'
import iPhone_16 from '../../assets/carousel/16pro_apple.avif'

function Adds() {
    return (
        <section>
            <div className='max-w-7xl mt-3 mx-auto md:h-87.5 flex items-center'>
                <div className=" h-full mx-auto w-7xl flex justify-around" >
                    <div className='hidden md:flex w-[20%] rounded-2xl overflow-hidden hover:shadow-lg'>
                        <img src={Vegitable} alt=""
                            className='w-full h-full object-cover' />
                    </div>
                    <div className='md:w-[50%] m-1 rounded-2xl overflow-hidden hover:shadow-lg'>
                        <img src={Vivo_banner} alt=""
                            className='w-full h-full object-cover' />
                    </div>
                    <div className='hidden md:flex w-[28%] h-full rounded-2xl overflow-hidden hover:shadow-lg '>
                        <img src={iPhone_16} alt=""
                            className='w-full h-full object-cover' />
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Adds
