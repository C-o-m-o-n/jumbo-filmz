"use client"

import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from 'next/link'


const discoverUrl = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

function Discover() {

    const [ApiResponse, setApiResponse] = useState([])

  useEffect(() => {
    async function getMovies() {
      try {
        // Step 1: Get a request token
        const response = await axios({
          method: "GET",
          url: discoverUrl,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
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

export default Discover
