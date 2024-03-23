import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jumbo filmz",
  description: "Created by Collis Omondi"
}
export default function RootLayout({ children }) {
  return (
	   <ClerkProvider>
    <html lang="en">
    {/* <head>
  <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.1/dist/flowbite.min.css" />
</head> */}
      <body className={inter.className}>
        {children}
        {/* <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script> */}
        </body>
    </html>
	   </ClerkProvider>
  );
}
