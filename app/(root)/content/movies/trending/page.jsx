"use client"

import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const trendingUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

function Trending() {
  const [Loading, setLoading] = useState(true)
    const [ApiResponse, setApiResponse] = useState([])
    const [trailerKey, setTrailerKey] = useState('');
    const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        // Step 1: Get a request token
        const response = await axios({
          method: "GET",
          url: trendingUrl,
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
          },
        });

        setApiResponse(response.data.results);
        // console.log(response.data.results)
      }
      catch (error) {
        console.error(error);
      }finally {
        setLoading(false); // Set loading to false after the API call completes
      }
    }

    getMovies()

  }, [])

    // Function to handle the click event on the "watch trailer" button
    const handleWatchTrailerClick = (movie) => {
      getVideo(movie.id)
      setShowVideoPlayer(true);
    };
  
    // Function to close the video player
    const closeVideoPlayer = () => {
      setShowVideoPlayer(false);
    };

    function getVideo(movie_id) {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
        }
      };
  
      fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then((response) => {
          console.log("trailer esponse ", response)
  
          const trailer = response.results[0];
          setTrailerKey(trailer.key);
        })
        .catch(err => console.error(err));
    }

  return (
    <>
    <main className="mt-20 flex min-h-screen flex-col items-start md:ml-[210px] md:mr-[210px]  md:mt-[80px]">
   {/* loader */}
   {Loading == true && (
              <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]">
        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#b70000]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div>
  
  )}

     {/* Video player */}
     {showVideoPlayer && (
        <div className="video-player-overlay">
          <div className="video-player">
            {trailerKey && (
              <>
                {/* Close button */}
                <button className="close-button" onClick={closeVideoPlayer}>
                  Close
                </button>

                <iframe
                  className="absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:rounded-2xl h-full w-screen md:w-[750px] md:h-[400px]"
                  src={`https://www.youtube.com/embed/${trailerKey}` || `https://www.youtube.com/watch?v=${trailerKey}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </>
            )}
          </div>
        </div>
      )}


<div className={`${showVideoPlayer && 'blur-bg'} grid grid-cols-2 md:grid-cols-4 gap-4`}>
       {ApiResponse && ApiResponse.map((movie) => (
    <div key={movie.id} class="card grid gap-4">
      <div className="button-grp ">
                <FaEye
                  onClick={()=>handleWatchTrailerClick(movie)} size={35} color='white'
                  className='item-button cursor-pointer likes ml-3' />
                <MdOutlinePlaylistAdd size={35} color='white'
                  className='item-button download cursor-pointer ml-3' />
              </div>

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
