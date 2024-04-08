import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from 'next/link'
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaEye } from "react-icons/fa";

// const discoverUrl = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

// https://api.themoviedb.org/3/trending/movie/day?language=en-US

const MovieList = ({ urlType, showName, tvshows, discoverMovieIdSetter,  showOverlayBtns, imageStyle, trendingTrailerBtn, divStyle, customStyle, limit }) => {
  const [ApiResponse, setApiResponse] = useState([])
  const [trailerKey, setTrailerKey] = useState('');

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

  // function getVideo(movie_id) {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
  //     }
  //   };
    
  //   fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, options)
  //   .then(response => response.json())
  //   .then((response) => {
  //     console.log("trailer esponse ", response)
  //     const trailer = response.results[0];
  //     trailerKeysetter(trailer.key);
  //   })
  //   .catch(err => console.error(err));
  // }

  return (
    <>
      <div className={customStyle}>
        {ApiResponse && ApiResponse.slice(0, limit).map((movie) => (
          <div key={movie.id} className={`card ${divStyle ? divStyle : "w-[155px]"}`}>
            {showOverlayBtns && (<div className="button-grp ">
              
            <FaEye 
            onClick={() => discoverMovieIdSetter(movie)} size={35} color='white'
             className='item-button cursor-pointer likes ml-3' />
            <MdOutlinePlaylistAdd size={35} color='white'
             className='item-button download cursor-pointer ml-3' />
      
    </div>)}
            <img className={imageStyle} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
            alt={movie.title} width={60} height={10} />
            <div>

            {showName == true ? (<h2 className='text-center'>
              {tvshows == true ? movie.name : movie.title }
              </h2>) : null}
              {trendingTrailerBtn && trendingTrailerBtn()}
              
              </div>

          </div>

        ))}
      </div>
        
      
    </>
  );
};

export default MovieList;
