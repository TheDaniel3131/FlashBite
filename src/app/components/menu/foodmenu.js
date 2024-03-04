import Image from 'next/image';

export default function FoodMenu(){
    return(
        <div className="bg-gray-300 p-4 rounded-lg text-center items-center justify-center">
          <Image src={'/nasilemak.jpg'} alt="Food" width={350} height={350}/>
          <h4 className="font-bold text-2xl my-5 mb-5">Tradisional Nasi Lemak</h4>
          <p className="text-gray-500 text-sm mb-5">
            A traditional Malay fragrant rice dish cooked in coconut milk and pandan leaf.
          </p>
          <button className="bg-primary text-white rounded-full px-8 py-2">Order for RM12.50</button>
        </div>   
    )
}