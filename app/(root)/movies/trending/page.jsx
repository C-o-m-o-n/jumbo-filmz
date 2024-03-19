"use client"

import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from 'next/link'


const trendingUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

function Trending() {

    const [ApiResponse, setApiResponse] = useState([])

  useEffect(() => {
    async function getMovies() {
      try {
        // Step 1: Get a request token
        const response = await axios({
          method: "GET",
          url: trendingUrl,
          headers: {
            Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
          },
        });

        setApiResponse(response.data.results);
        // console.log(response.data.results)
      }
      catch (error) {
        console.error(error);
      }
    }

    getMovies()

  }, [])

  return (
    <>
    <main className="flex min-h-screen flex-col items-start md:ml-[210px] md:mr-[210px]  md:mt-[80px]">

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
       {ApiResponse && ApiResponse.map((movie) => (
    <div key={movie.id} class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
        <h2 className='text-center'>{movie.title}</h2>
        </div>
   
</div>
))}
</div>
</main>
    </>
  )
}

export default Trending
