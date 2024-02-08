import Image from "next/image";

export default function Hero(){
    return(
        <>
            <section className="grid grid-cols-2 mt-12">
                <div>
                    <h1 className="text-4xl font-semibold">Welcome to FlashBite, No. 1 Food App In Malaysia.</h1>  
                    <p className="mt-4 text-gray-500">Order Now To Get Your Foods Fast!</p>
                        <div className="flex gap-4">
                            <button className=" bg-orange-300 px-9 py-3 text-white font-bold rounded-full">Learn More</button>
                            <button className="bg-orange-500 font-bold px-9 py-3 rounded-full">Order Food</button>
                        </div>
                </div>

                <div className="relative">
                    <Image src={'/welcome.png'} layout={'fill'} objectFit={'contain'} alt={'Welcome'} />
                </div>
            </section>
        </>
    )
}