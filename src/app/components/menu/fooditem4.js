import Image from 'next/image';

export default function FoodItem4(){
    return( 
        <div className="p-6 rounded-lg text-center items-center justify-center hover:bg-rose-200">
          <Image src={'/asamlaksa.jpg'} alt="Food" width={350} height={350}/>
          <h4 className="font-bold text-2xl my-5 mb-5">Asam Laksa</h4>
          <p className="text-gray-500 text-sm mb-5">
            Asam laksa is a sour, fish-based soup. Asam is Malay for &quot;sour&quot;, and the soup is often served with either mackerel or sardines. 
            It is a popular dish in Malaysia, and also in Indonesia and Singapore. 
          </p>
          <button className="bg-primary font-bold shadow-xl text-white rounded-full px-8 py-2">Order for RM12.50</button>
        </div>   
    )
}

