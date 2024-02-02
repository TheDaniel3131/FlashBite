import Link from "next/link"

export default function Header(){
    return(
        <>
            <header>
                <a href="/">FlashBite</a>
                <nav>
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


