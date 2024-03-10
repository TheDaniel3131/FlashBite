import Image from 'next/image';

export default function FoodItem1(){
    return( 
      <div className="p-6 rounded-lg text-center items-center justify-center hover:bg-rose-200">
        <Image src={'/nasilemak.jpg'} alt="Food" width={350} height={350}/>
        <h4 className="font-bold text-2xl my-5 mb-5">Tradisional Nasi Lemak</h4>
        <p className="text-gray-500 text-sm mb-5">
        A traditional Malay fragrant rice dish cooked in coconut milk and pandan leaf. 
        It is commonly found in Malaysia, where it is considered the national dish.
        </p>
        <button className="bg-primary font-bold shadow-xl text-white rounded-full px-8 py-2">Order for RM12.50</button>
      </div>   
    )
}

