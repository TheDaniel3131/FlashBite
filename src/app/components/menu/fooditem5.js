import Image from 'next/image';

export default function FoodItem5(){
    return( 
        <div className="p-6 rounded-lg text-center items-center justify-center hover:bg-rose-200">
          <Image src={'/penangprawnnoodle.jpg'} alt="Food" width={350} height={350}/>
          <h4 className="font-bold text-2xl my-5 mb-5">Penang Prawn Noodle</h4>
          <p className="text-gray-500 text-sm mb-5">
            A spicy noodle soup of Chinese origin, made with prawn stock, as well as a mix of spices, which can include lemongrass, garlic, ginger, shallot, and chilli. 
            It is served with a variety of ingredients, which can include prawns, chicken, sliced pork, fish cake, fish balls, and sliced hard-boiled egg.
          </p>
          <button className="bg-primary font-bold shadow-xl text-white rounded-full px-8 py-2">Order for RM12.50</button>
        </div>   
    )
}

