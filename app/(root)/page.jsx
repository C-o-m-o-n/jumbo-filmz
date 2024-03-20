
import Link from 'next/link'
import React from 'react';
// import { useEffect, useState } from "react";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>

            <Link href="/content/movies/" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">Movies</Link>
            <Link href="/content/tvshows/" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">TV Shows
            </Link>
        </div>
        )
}
