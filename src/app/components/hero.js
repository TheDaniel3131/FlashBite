import Image from "next/image";
import Forward from "./icons/Forward";

export default function Hero(){
    return(
        <>
            <section className="grid grid-cols-2 mt-12">
                <div className="py-10">
                    <h1 className="mt-5 py-5 text-6xl font-bold  leading-none">Welcome to <span className="">FlashBite! </span>No. 1 Food App In Malaysia.</h1>  
                    <p className="py-5 mb-5 tracking-widest text-xl text-gray-500">Order Now To Get Your Foods Fast!</p>
                        <div className="flex gap-4 text-sm mr-auto">
                            <button className="flex gap-2 bg-orange-300 px-6 py-3 text-white items-center font-bold rounded-full">Learn More <Forward /></button>
                            <button className="flex gap-2 bg-orange-500 font-bold text-white uppercase items-center px-6 py-3 rounded-full">Order Food <Forward /></button>
                        </div>
                </div>
                <div className="relative gap-3 mt-5 py-5">

                    <Image src={'/welcome.png'} layout={'fill'} objectFit={'contain'} alt={'Welcome'} />
                </div>
            </section>
        </>
    )
}