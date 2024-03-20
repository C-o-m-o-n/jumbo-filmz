
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import TopNav from "../../components/TopNav";
import RightNav from "../../components/RightNav";
import Footer from "../../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        
      <body >
      <div>
      <Navbar />
      <TopNav />
      <RightNav />
      </div>
        {children}
        {/* <Footer /> */}
        </body>
    </html>
  );
}
