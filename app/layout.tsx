import "./globals.css";
import { Inter } from "@next/font/google";

import Navbar from "./components/Navbar";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
