import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from 'next/link'

// const discoverUrl = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

// https://api.themoviedb.org/3/trending/movie/day?language=en-US

const MovieList = ({ urlType, imageStyle, trendingTrailerBtn, divStyle, customStyle, limit }) => {
  const [ApiResponse, setApiResponse] = useState([])

  useEffect(() => {
    async function getMovies() {
      try {
        // Step 1: Get a request token
        const response = await axios({
          method: "GET",
          url: urlType,
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
      <div className={customStyle}>
        {ApiResponse && ApiResponse.slice(0, limit).map((movie) => (

          <div key={movie.id} className={divStyle ? divStyle : "w-[155px]"}>
            <img className={imageStyle} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            alt={movie.title} width={60} height={10} />
            <div>
            <h2 className='text-center'>{movie.title}</h2>
              {trendingTrailerBtn && trendingTrailerBtn()}
              </div>

          </div>

        ))}
      </div>

      
    </>
  );
};

export default MovieList;
