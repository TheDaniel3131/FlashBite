import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmsans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--dmsans-font"
});

export const metadata = {
  title: "Flashbite | Malaysian #1 Fast Food Ordering App",
  description: "Created & founded by Daniel Poh Ting Fong. FlashBite is a Malaysian fast food ordering application that revolutionizes the way people order and enjoy their favorite meals. With a user-friendly interface and a wide range of delicious options, FlashBites makes it convenient for customers to browse through menus, customize their orders, and have their meals delivered right to their doorstep.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmsans.variable}`}>
      <head>
        {/* Favicon.ico. Add favicon in any sizes */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* For icon, Support any image types/formats */}
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />

        {/*Apple icon for the apple users */}
      <link
        rel="apple-touch-icon"
        href="/apple-icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />

      </head>
      <body>
        <main className="max-w-6xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
