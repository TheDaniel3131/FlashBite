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

        <div className="text-right">
            <h3 className="uppercase text-gray-500 text-xl font-semibold leading-loose">TRY OUT OUR LATEST MENU!</h3>      
            <h3 className="text-orange-500 font-bold text-4xl italic">FlashBite&rsquo;s Crispy Fried Chicken</h3>
        </div>
    </section>

  )
}
