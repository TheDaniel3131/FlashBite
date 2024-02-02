import Link from "next/link"

export default function Header(){
    return(
        <>  
            <header className="flex items-center">    
                <Link className="text-primary text-2xl font-bold" href={''}>FlashBite</Link>
                <nav className="flex">
                    <Link href={''}>Home</Link>
                    <Link href={''}>Foods</Link>
                    <Link href={''}>About Us</Link>
                    <Link href={''}>Contact Us</Link>
                    <Link href={''}>FAQ</Link>
                    <Link href={''}>Login</Link>
                </nav>
            </header>
        </>

    )
}


