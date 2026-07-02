import React from 'react'
import Home_Kitchen from '../../assets/home&kitchen.png'
import Personal_Care from '../../assets/personalcare.webp'
import Tech from '../../assets/tech.avif'
import Kids_Product from '../../assets/kids-porduct.png'
import Food_Groceries from '../../assets/food&groceries.png'


function PromotionBanner() {


    const categories = [
        { image: Home_Kitchen, title: "Home & Kitchen" },
        { image: Personal_Care, title: "Personal Care" },
        { image: Tech, title: "Tech & Gadgets" },
        { image: Kids_Product, title: "Kids Products" },
        { image: Food_Groceries, title: "Food & Groceries" },
    ];

    return (
        <section>
            <div className="max-w-6xl hidden md:flex md:flex-col my-10 mx-auto">

                {/* Banner */}
                <div className="bg-purple-700 border border-purple-800 h-70 rounded-xl relative px-10 py-8">
                    <h1 className="text-5xl text-white font-bold">
                        Shop Eco-Friendly, Live Sustainably!
                    </h1>

                    <p className="mt-3 text-white">
                        Good for you, great for the Earth.
                    </p>

                    
                </div>

                {/* Cards */}
                <div className="flex justify-center gap-4 -mt-16 relative z-10">
                    {categories.map((item, index) => (
                        <div key={index} className="w-52 bg-white rounded-lg shadow-md p-4">
                            <img src={item.image} 
                            alt={item.title}
                            width={300}
                            height={300}
                            loading='lazy'
                            decoding='async'
                            className="h-32 mx-auto" />
                            <h2 className="text-center mt-3">{item.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PromotionBanner
