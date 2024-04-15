"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <section className="flex flex-col items-center justify-between mt-5 py-10">
            <h1 className="font-bold items-center text-center text-slate-800 text-5xl">User Login</h1>
            <form className="max-w-xs mx-auto py-10 mt-5">
                <input type="email" placeholder="Enter Your Email Address" value={email} disabled={false} onChange={ev => setEmail(ev.target.value)} className="px-6 py-2"/>
                <input type="password" placeholder="Enter Your Password" value={password} disabled={false} onChange={ev => setPassword(ev.target.value)} className="px-6 py-2"/>
                <button type="submit" className="bg-slate-500 py-3 px-14 mb-4 rounded-full font-bold text-slate-100 text-lg tracking-normal">Login</button>
            </form>
        </section>

    );
}