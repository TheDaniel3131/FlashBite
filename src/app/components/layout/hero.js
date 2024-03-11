"use client";

import Image from "next/image";
import Forward from "../icons/Forward";
import { Zap } from "react-feather";
import { motion } from "framer-motion";

export default function Hero(){
    return(
        <>
            <section className="grid grid-cols-2 mt-12">
                <div className="py-10">
                    <h1 className="mt-5 py-5 text-6xl font-bold leading-none">
                        Welcome to <span className="flex items-center text-yellow-500">FlashBite <Zap size={48} className="ml-2" /></span>
                        No.1&nbsp;Food App In Malaysia.
                    </h1>
                    <p className="py-5 mb-5 tracking-widest text-xl text-gray-500">Order Now To Get Your Foods Fast!</p>
                        <div className="flex gap-4 text-sm mr-auto">
                            <button className="flex gap-2 bg-orange-300 px-6 py-3 text-white items-center font-bold rounded-full text-xl align-middle">Learn More <Forward /></button>
                            <button className="flex gap-2 bg-orange-600 text-white items-center font-bold px-10 py-3 rounded-full text-xl align-middle">Order Food <Forward /></button>
                        </div>
                </div>
                <div className="relative gap-4 mt-5 py-6">
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}>
                      <Image src={'/welcome.png'} layout={'fill'} objectFit={'contain'} alt={'Welcome'} />
                  </motion.div>
                </div>
            </section>
        </>
    )
}