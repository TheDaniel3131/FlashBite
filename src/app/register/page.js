"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function manageSubmitForm(ev) {
        ev.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); 
        })
        .catch(error => {
            console.error('Error:', error); 
        });
    }

    return (
        <section className="flex flex-col items-center justify-between mt-5 py-10">
            <div className="flex flex-col mb-10">
                <h1 className="font-bold items-center text-center text-slate-800 text-4xl">Member Registration</h1>
            </div>      
            <form className="flex flex-col text-center items-center bg-slate-100 p-20 rounded-3x w-full mx-auto max-w-xl" onSubmit={manageSubmitForm}>
                <div className="flex items-center mb-6">
                    <h1 className="font-normal tracking-wider text-lg">Email: &nbsp;</h1>
                    <input type="email" placeholder="Enter Your Email Address" value={email} onChange={ev => setEmail(ev.target.value)} className="px-10 py-2"/>
                </div>
                <div className="flex items-center mb-10">
                    <h1 className="font-normal tracking-wider text-lg">Password: &nbsp;</h1>
                    <input type="password" placeholder="Enter Your Password" value={password} onChange={ev => setPassword(ev.target.value)} className="px-6 py-2"/>
                </div>
                <button type="submit" className="bg-slate-500 py-3 px-14 mb-4 rounded-full font-bold text-slate-100 text-lg tracking-normal">Register Now</button>
                <div className="text-center text-gray-500 text-sm my-4">
                    Or Login With Other Services
                </div>
                <button className="flex gap-2 text-slate-700 border border-slate-600 font-semibold text-sm rounded-full py-2 px-8 justify-center">
                    <Image src={'/google_logo.png'} alt="Google Logo" width={20} height={20} className="mr-2" />
                    Login with Google
                </button>
            </form>
        </section>
    );
}
