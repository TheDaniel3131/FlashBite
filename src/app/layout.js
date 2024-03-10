import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmsans = DM_Sans({ 
  subsets: ["latin"]
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmsans.className}>
      <body>
        <main className="max-w-6xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
