import Header from "./components/layout/header"
import Hero from "./components/layout/hero"
import MainMenu from "./components/layout/mainmenu"
import NewSectionHeaders from "./components/layout/newSectionHeaders"
import Image from "next/image";

export default function Home(){
  // React Fragment <></> is used to wrap multiple elements without adding an extra node to the DOM.
  return (
    <>
      <Header />
      <Hero />
      <MainMenu />
      <section className="py-20 items-center text-center">
        <NewSectionHeaders mainHeader={'Our Story'} subHeader={'The Origin of FlashBites'} />
        <div className="flex flex-col flex-wrap gap-5 justify-between">
          <div className="inline-block text-slate-600 text-xl mt-10">
            <p className="mb-6 text-justify"> 
              FlashBite is a Malaysian fast food ordering application that revolutionizes the way people order and enjoy their favorite meals. With a user-friendly interface and a wide range of delicious options, FlashBites makes it convenient for customers to browse through menus, customize their orders, and have their meals delivered right to their doorstep.
            </p>
            {/* <Image src="/welcome.png" width={350} height={350} alt="Flashbite Story" className="mt-10" /> */}
            <p className="mb-6 text-justify">
              Whether you&apos;re craving traditional Malaysian dishes, international cuisines, or even healthy alternatives, FlashBites has got you covered. Our extensive network of partner restaurants ensures that you have access to a diverse selection of food options, catering to all tastes and dietary preferences.
            </p>
            <p className="mb-6 text-justify"> 
              But FlashBites is more than just a food delivery app. We strive to provide a seamless and enjoyable experience for our users. Our innovative features include real-time order tracking, secure payment options, and personalized recommendations based on your previous orders and preferences.
            </p>
            <p className="mb-6 text-justify"> 
              At FlashBites, we understand the importance of speed and efficiency. That&apos;s why we have optimized our app to ensure that your orders are processed quickly and accurately. Our dedicated team of delivery drivers works tirelessly to ensure that your food arrives fresh and on time, so you can enjoy your meal without any hassle.
            </p>
            <p className="mb-6 text-justify"> 
              Join the growing community of satisfied FlashBites customers and experience the convenience and joy of ordering food with just a few taps on your phone. Browse through the FlashBites website and our mobile application now!
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col text-center items-center my-8">
        <NewSectionHeaders mainHeader={'Our Team'} subHeader={'Meet the People Behind FlashBites'} />
        <div className="flex p-6 gap-16 items-center text-right text-xl">
          <Image src="/about_us.png" width={350} height={350} alt="Flashbite Story" className="text-center py-2 mb-5" />
          <p className="mb-6 w-[550px]  ">
            At FlashBites, we are proud to have a team of dedicated and passionate individuals who are committed to providing the best possible experience for our customers. Our team is made up of talented professionals from various backgrounds, each bringing their unique skills and expertise to the table.
          </p>
        </div>
      </section>
      <section className="text-center my-12">
        <NewSectionHeaders mainHeader={'Contact Us'} subHeader={'We Welcome Any Inquiries!'} />
        <div className="mt-8">
          <a className="text-2xl underline text-slate-500" href="+60 10-848 3602">
            +60 10-848 3602 (WhatsApp)
          </a>
        </div>
      </section>
      <footer className="border-t p-10 text-center text-slate-500">
        <p>&copy; 2024 FlashBites. All rights reserved.</p>
      </footer>
    </>
  );
}

