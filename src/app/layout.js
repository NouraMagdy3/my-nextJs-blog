import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ixartz’s Blog Next App",
  description: "Generated by Noura Magdy",
};

const Links = ["Dashboard", "Projects", "Team"];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
