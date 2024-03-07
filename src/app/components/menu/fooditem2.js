import Image from 'next/image';

export default function FoodItem2(){
    return( 
        <div className="p-6 rounded-lg text-center items-center justify-center hover:bg-rose-200">
          <Image src={'/charkweyteow.png'} alt="Food" width={350} height={350}/>
          <h4 className="font-bold text-2xl my-5 mb-5">Char Kwey Teow</h4>
          <p className="text-gray-500 text-sm mb-5">
            A popular noodle dish from Malaysia, made from flat rice noodles stir-fried over high heat with light and dark soy sauce, chilli, prawns, cockles, egg, bean sprouts, and Chinese chives.
          </p>
          <button className="bg-primary font-bold shadow-xl text-white rounded-full px-8 py-2">Order for RM9.50</button>
        </div>   
    )
}

