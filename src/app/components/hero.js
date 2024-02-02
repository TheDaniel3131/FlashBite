import Image from "next/image";

export default function Hero(){
    return(
        <>
            <section className="grid grid-cols-2">
                <div>
                    <h1 className="text-4xl font-semibold">Welcome to FlashBite, No. 1 Food App In Malaysia.</h1>  
                    <p className="mt-4 text-gray-500">Order Now To Get Your Foods Fast!</p>
                </div>
                <div>
                    <button className=" bg-orange-700 px-10 py-3 rounded-full">Order Food</button>
                    <button>Learn More</button>
                </div>
                <div className="relative">
                    <Image src={'/welcome.png'} layout={'fill'} objectFit={'contain'} alt={'Welcome'} />
                </div>
            </section>
        </>
    )
}