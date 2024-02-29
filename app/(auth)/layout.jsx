import React from 'react'
export default function Layout({ children }) {
  return (  
      <main className="flex justify-center items-center min-h-screen w-full">
        {children}
        </main>
  );
}
