import Header from "@/components/layout/header"
import Hero from "@/components/layout/hero"
import MainMenu from "@/components/layout/mainmenu"
import Footer from "@/components/layout/footer";
import ContactUs from "@/components/layout/contactus";
import OurStory from "@/components/layout/ourstory";


export default function Home(){
  // React Fragment <></> is used to wrap multiple elements without adding an extra node to the DOM.
  return (
    <>
      <Header />
      <Hero />
      <MainMenu />
      <OurStory />
      <ContactUs />
      <Footer />
    </>
  );
}

