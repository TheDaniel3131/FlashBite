"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProcess, setLoginInProcess] = useState(false);


    async function manageSubmitForm(ev) {
        ev.preventDefault();
        setLoginInProcess(true);
        const {ok} = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (ok){

        }
        else {

        }
        setLoginInProcess(false);      
        }
    
    return(
        <section className="flex flex-col items-center justify-between mt-5 py-10">
            <div className="flex flex-col mb-10">
                <h1 className="font-bold items-center text-center text-slate-800 text-5xl" >User Login</h1>
            </div>
            {/* flex flex-col text-center items-center bg-slate-100 p-20 rounded-3x w-full mx-auto max-w-xl */}
            <form className="max-w-xl mx-auto p-20 flex flex-col text-center items-center bg-slate-100 rounded-3x w-full">
                <div className="flex items-center mb-6">
                    <h1 className="font-semibold tracking-wider text-lg">Email: &nbsp;</h1>
                    <input type="email" placeholder="Enter Your Email Address" value={email} disabled={false} onChange={ev => setEmail(ev.target.value)} className="px-6 py-2"/>
                </div>
                <div className="flex items-center mb-10">
                    <h1 className="font-semibold tracking-wider text-lg">Password: &nbsp;</h1>
                    <input type="password" placeholder="Enter Your Password" value={password} disabled={false} onChange={ev => setPassword(ev.target.value)} className="px-6 py-2"/>
                </div>
                <button type="submit" className="bg-slate-500 py-3 px-14 mb-4 rounded-full font-bold text-slate-100 text-lg tracking-normal">Login</button>
                <div className="text-center text-gray-500 text-sm mt-5">
                    Or Login With Other Services
                </div>
                <button className="flex gap-2 text-slate-700 border border-slate-600 font-semibold text-sm rounded-full py-2 px-8 justify-center my-4 mb-6" disabled={false}>
                    <Image src={'/google_logo.png'} alt="Google Logo" width={20} height={20} className="mr-2" />
                    Login with Google
                </button>
                <div className="text-center my-2">
                    Don&apos;t Have An Account? Please Register <Link className="underline font-bold" href={'/register'}>Here</Link>
                </div>
            </form>
        </section>

    );
}