import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/components/Navbar/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "Users CRUD",
  description: "An Users CRUD application when you can login and create, read, update and delete users...only if you are the admin of course. Otherwise, just have fun .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <h1 className={"title"}>Users CRUD</h1>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
