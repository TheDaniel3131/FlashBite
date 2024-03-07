import Image from 'next/image';

export default function FoodItem6(){
    return( 
        <div className="p-6 rounded-lg text-center items-center justify-center hover:bg-rose-200">
          <Image src={'/hainanchickenrice.jpg'} alt="Food" width={350} height={350}/>
          <h4 className="font-bold text-2xl my-5 mb-5">Hainan Chicken Rice</h4>
          <p className="text-gray-500 text-sm mb-5">
            Hainanese chicken rice is a dish of poached chicken and seasoned rice, served with chilli sauce and usually comes with cucumber garnishes. 
            Chicken rice is most commonly associated with Hainanese, Malaysian and Singaporean cuisines, although it is also commonly sold in Thailand and Vietnam.
          </p>
          <button className="bg-primary font-bold shadow-xl text-white rounded-full px-8 py-2">Order for RM12.50</button>
        </div>   
    )
}

