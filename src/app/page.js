import Header from "./components/layout/header"
import Hero from "./components/layout/hero"
import MainMenu from "./components/layout/mainmenu"
import NewSectionHeaders from "./components/layout/newSectionHeaders"

export default function Home(){
  // React Fragment <></> is used to wrap multiple elements without adding an extra node to the DOM.

  return(
    <>  
      <Header />
      <Hero />
      <MainMenu />
      <section className="py-20 text-center">
        <NewSectionHeaders mainHeader={'Our Story'} subHeader={'The Origin of FlashBites'} />
      </section>
    </>
  )
}

