import React from 'react';
import Image from 'next/image';
import FoodMenu from "../menu/foodmenu";

export default function MainMenu() {
  return (
    <section className="relative mt-20 py-10">
        <div className="text-right relative">
            <h3 className="uppercase text-gray-500 text-xl font-semibold leading-loose mt-10 mr-5">TRY OUT OUR LATEST MENU!</h3>      
            <h3 className="text-orange-500 font-bold text-4xl italic mr-5">FlashBite&rsquo;s Crispy Fried Chicken</h3>
            <p className="absolute right-0 top-24 text-gray-700 mt-4 mr-5 w-2/3 h-40 leading-snug">
                Deliciously crispy and flavorful fried chicken that will leave you wanting more. 
                Made from locally sourced farm-fresh chicken, our dish is a perfect blend of 
                traditional flavors and modern cooking techniques. Experience the taste of 
                quality ingredients and indulge in the ultimate comfort food.
            </p>
        </div>
        

      <div className="text-center mb-20 mt-80">
        <h3 className="uppercase text-gray-500 font-semibold leading-4">Check out</h3>
        <h2 className="text-primary font-bold text-4xl italic">MORE MENU</h2>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <FoodMenu />
        <FoodMenu />
        <FoodMenu />
        <FoodMenu />
        <FoodMenu />
        <FoodMenu />
      </div>

      {/* Image */}
      <div className="absolute left-0 top-12 h-80 w-80">
        <Image src={'/friedchicken.png'} layout={'fill'} objectFit={'contain'} alt={'Fried Chicken'} className="rounded-full"/>
      </div>
    </section>
  );
}