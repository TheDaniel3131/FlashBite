import Link from "next/link"

export default function Header(){
    return(
        <>
            <header className="flex items-center justify-between text-white p-4">
                <Link className="text-primary text-4xl font-bold" href={''}>
                    Flash<span className="text-rose-600">Bite</span>
                </Link>
                <nav className="flex items-center gap-10 text-rose-300 font-bold">
                    <Link href={''}>Home</Link>
                    <Link href={''}>Foods</Link>
                    <Link href={''}>About Us</Link>
                    <Link href={''}>Contact Us</Link>
                    <Link href={''}>FAQ</Link>
                    <Link href={''} className="bg-rose-900 rounded-full text-white px-8 py-2">
                        Login
                    </Link>
                </nav>
            </header>
        </>

    )
}


