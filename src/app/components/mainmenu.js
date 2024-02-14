import React from 'react'
import Image from 'next/image'

export default function MainMenu() {
  return (
    <section className="relative mt-10 py-10">
        <div className="absolute left-0 right-0">
            <div className="h-80 w-80 absolute left-0 top-0"> 
                <Image src={'/friedchicken.png'} layout={'fill'} objectFit={'contain'} alt={'Fried Chicken'} className="rounded-full"/>
            </div>
        </div>

        <div className="text-right relative">
            <h3 className="uppercase text-gray-500 text-xl font-semibold leading-loose">TRY OUT OUR LATEST MENU!</h3>      
            <h3 className="text-orange-500 font-bold text-4xl italic">FlashBite&rsquo;s Crispy Fried Chicken</h3>
            <p className="absolute right-0 top-24 text-gray-700 mt-4 mr-5 w-1/2 h-40 leading-snug">
                Deliciously crispy and flavorful fried chicken that will leave you wanting more. 
                Made from locally sourced farm-fresh chicken, our dish is a perfect blend of 
                traditional flavors and modern cooking techniques. Experience the taste of 
                quality ingredients and indulge in the ultimate comfort food.
            </p>
        </div>
    </section>

  )
}
