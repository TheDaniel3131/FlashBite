import React from 'react'
import Image from 'next/image'

export default function MainMenu() {
  return (
    <section className="">
        <div>
            <Image src={'/menu.png'} layout={'fill'} objectFit={'contain'} alt={'Menu'} />
        </div>
        <div className="text-center">
            <h3 className="uppercase text-gray-500 font-semibold">Check Out</h3>      
            <h3 className="text-primary font-bold text-4xl italic">Menu</h3>
        </div>
    </section>

  )
}
