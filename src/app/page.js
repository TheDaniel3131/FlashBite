import Header from "./components/header"
import Hero from "./components/hero"
import Link from "next/link"

export default function Home(){
  // React Fragment <></> is used to wrap multiple elements without adding an extra node to the DOM.

  return(
    <>  
      <Header />
      <Hero />
    </>
  )
}

