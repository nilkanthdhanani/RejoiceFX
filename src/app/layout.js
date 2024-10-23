import { Inter } from "next/font/google";
import "../app/globals.css";
import "../assets/styles/main.scss";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "@/components/modules/header";
import Footer from "@/components/modules/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rejoice FX",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
