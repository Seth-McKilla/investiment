import "./globals.css";
import { Inter } from "@next/font/google";

import AuthContext from "./AuthContext";
import Navbar from "./Navbar";

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
        <AuthContext>
          <Navbar />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
