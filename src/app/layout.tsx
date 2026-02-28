import Footer from "@/components/general/Footer";
import Navbar from "@/components/general/navbar/Navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: "Naresh's Portfolio website",
  description: "Naresh's Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}antialiased bg-slate-950`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
