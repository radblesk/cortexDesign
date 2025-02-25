import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layoutComps/header/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
