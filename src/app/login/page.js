"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <section className="flex flex-col items-center justify-between mt-5 py-10">
            <h1 className="font-bold items-center text-center text-slate-800 text-4xl">User Login</h1>
            <form action>
                <input type="email" placeholder="Enter Your Email Address" value={email} disabled={false} onChange={ev => setEmail(ev.target.value)} className="px-10 py-2"/>
                <input type="password" placeholder="Enter Your Password" value={password} disabled={false} onChange={ev => setPassword(ev.target.value)} className="px-6 py-2"/>
            </form>
        </section>

    );
}