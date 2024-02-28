
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        
      <body >
      <div>
      <Navbar />
      </div>
        {children}


        </body>
    </html>
  );
}
