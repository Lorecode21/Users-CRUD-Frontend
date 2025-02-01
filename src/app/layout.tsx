import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"]
});

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
      <body className={`${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
