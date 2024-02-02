import Image from "next/image";

export default function Hero(){
    return(
        <>
            <section className="grid grid-cols-2">
                <div>
                    <h1 className="text-4xl font-semibold">Welcome to FlashBite, No. 1 Food App In Malaysia.</h1>  
                    <p className="mt-4 text-gray-500">Order Now To Get Your Foods Fast!</p>
                        <div>
                            <button className=" bg-orange-300 px-16 py-2 text-white rounded-full">Learn More</button>
                            <button className="rounded-full">Order Food</button>
                        </div>
                </div>

                <div className="relative">
                    <Image src={'/welcome.png'} layout={'fill'} objectFit={'contain'} alt={'Welcome'} />
                </div>
            </section>
        </>
    )
}