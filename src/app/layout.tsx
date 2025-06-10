import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dorbane",
  description: "Dorbane Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth  ">
      <body className="min-h-screen  bg-slate-800  overflow-x-hidden ">
      {children}
       </body>
      
    </html>
  );
}
