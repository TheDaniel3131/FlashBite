import Link from "next/link"
import { LogIn } from 'lucide-react';

export default function Header(){
    return(
        <>
            <header className="flex items-center justify-between text-white py-4">
                <Link className="text-primary text-4xl font-bold" href={''}>
                    Flash<span className="text-rose-600">Bite</span>
                </Link>
                <nav className="flex items-center gap-12 text-rose-400 text-xl justify-between">
                    <div className="flex items-center gap-12 text-rose-400 text-xl justify-between font-semibold">
                        <Link href={''}>Home</Link>
                        <Link href={''}>Foods</Link>
                        <Link href={''}>About Us</Link>
                        <Link href={''}>Contact Us</Link>
                        <Link href={''}>FAQ</Link>
                    </div>
                    <Link href={'/login'} className="flex gap-2 text-2xl bg-rose-900 rounded-full text-white font-bold tracking-tight px-10 py-2 mr-auto">
                        Login<LogIn size={36} />
                    </Link>
                </nav>
            </header>
        </>

    )
}


