import Image from 'next/image';

export default function FoodItem3(){
    return( 
        <div className="p-6 rounded-lg text-center items-center justify-center hover:bg-rose-200">
          <Image src={'/roticanai.jpg'} alt="Food" width={350} height={350}/>
          <h4 className="font-bold text-2xl my-5 mb-5">Roti Canai</h4>
          <p className="text-gray-500 text-sm mb-5">
            Roti canai is a type of Indian-influenced flatbread found in Malaysia, Brunei, Indonesia and Singapore.
            It is often sold in Mamak stalls in Malaysia; also in Malay, Minangkabau and Aceh restaurants in Indonesia.
          </p>
          <button className="bg-primary font-bold shadow-xl text-white rounded-full px-8 py-2">Order for RM12.50</button>
        </div>   
    )
}

