"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);
    
    async function manageSubmitForm(ev) {
        ev.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        // console.log(response);
        if (response.ok){
            setUserCreated(true);
        }
        else {
            setError(true);
        }
        setCreatingUser(false);      
        }
    
    return (
        <section className="flex flex-col items-center justify-between mt-5 py-10">
            <div className="flex flex-col mb-10">
                <h1 className="font-bold items-center text-center text-slate-800 text-5xl">User Registration</h1>
                {userCreated && <p className="text-green-500 text-center mt-10">Congratulation! Your User Account Has Created Successfully. Please Proceed to Login.</p>}
            </div>      
            {error && <p className="text-red-500 text-center mb-8 py-2">Your Email Has Been Created With Other User Account Before. Please Try Another One!</p>}
            <form className="flex flex-col text-center items-center bg-slate-100 p-20 rounded-3x w-full mx-auto max-w-xl" onSubmit={manageSubmitForm}>
                <div className="flex items-center mb-6">
                    <h1 className="font-semibold tracking-wider text-lg">Email: &nbsp;</h1>
                    <input type="email" placeholder="Enter Your Email Address" value={email} disabled={creatingUser} onChange={ev => setEmail(ev.target.value)} className="px-10 py-2"/>
                </div>
                <div className="flex items-center mb-10">
                    <h1 className="font-semibold tracking-wider text-lg">Password: &nbsp;</h1>
                    <input type="password" placeholder="Enter Your Password" value={password} disabled={creatingUser} onChange={ev => setPassword(ev.target.value)} className="px-6 py-2"/>
                </div>
                <button type="submit" className="bg-slate-500 py-3 px-14 mb-4 rounded-full font-bold text-slate-100 text-lg tracking-normal">Register Now</button>
                <div className="text-center text-gray-500 text-sm mt-5">
                    Or Signup With Other Services
                </div>
                <button className="flex gap-2 text-slate-700 border border-slate-600 font-semibold text-sm rounded-full py-2 px-8 justify-center my-4 mb-6" disabled={creatingUser}>
                    <Image src={'/google_logo.png'} alt="Google Logo" width={20} height={20} className="mr-2" />
                    Sign-Up with Google
                </button>
                <div className="text-center my-2">
                    Already have an account? Please Login <Link className="underline font-bold" href={'/login'}>Here</Link>
                </div>
            </form>
        </section>
    );
}
