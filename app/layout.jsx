import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] });
import Head from 'next/head'

export const metadata = {
  title: "Jumbo filmz",
  description: "Created by Collis Omondi"
}
export default function RootLayout({ children }) {
  return (
	   <ClerkProvider>
    <html lang="en">
    <Head>
        <link rel="icon" href="/assets/jumbofilmz.jpeg" />
      </Head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
	   </ClerkProvider>
  );
}
