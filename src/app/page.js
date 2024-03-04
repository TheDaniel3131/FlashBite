import Header from "./components/layout/header"
import Hero from "./components/layout/hero"
import MainMenu from "./components/layout/mainmenu"

export default function Home(){
  // React Fragment <></> is used to wrap multiple elements without adding an extra node to the DOM.

  return(
    <>  
      <Header />
      <Hero />
      <MainMenu />
    </>
  )
}

