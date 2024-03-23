"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import MovieList from "../../../components/MovieList";
import axios from "axios";

const discoverUrl = "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
const trendingUrl = "https://api.themoviedb.org/3/trending/tv/day?language=en-US"

function trendingTrailerBtn() {
  return (
    <div className='flex flex-row items-center mt-3 w-[100px] transition-all duration-300 ease-in-out bg-[#b70000] rounded-3xl'>
      <FaEye size={25} className='ml-3' />
      <span className="select-none flex items-center px-3 py-2 cursor-pointer rounded-[.95rem]">
        <Link href="javascript:;" className="flex items-center flex-grow hover:text-white">Trailer</Link>
      </span>
    </div>
  )
}

export default function Home() {

  const [Loading, setLoading] = useState(true)
  const [randomMovie, setRandomMovie] = useState()
  const [ApiResponse, setApiResponse] = useState([])

  //for getting and desplaying random bunners
  useEffect(() => {
    // setLoading()
    async function getMovies() {
      try {
        const response = await axios.get(discoverUrl, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
          },
        });
        setApiResponse(response.data.results);

        const randomMovieIndex = Math.floor(Math.random() * response.data.results.length);
        const selectedMovie = response.data.results[randomMovieIndex];
        setRandomMovie(selectedMovie);
        console.log("selectedMovie: ", response.data.results);

      } catch (error) {
        console.error(error);
      }finally {
        setLoading(false); // Set loading to false after the API call completes
      }
    }

    getMovies();
  }, []);



function getVideo(series_id){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    }
  };
  
  fetch(`https://api.themoviedb.org/3/tv/${series_id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then((response) => {
      console.log("trailer esponse ", response)

      const trailer = response.results[1];
      setTrailerKey(trailer.key);
    })
    .catch(err => console.error(err));
}

  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');


    // Function to handle the click event on the "watch trailer" button
    const handleWatchTrailerClick = () => {
      getVideo(randomMovie.id)
      setShowVideoPlayer(true);
    };
  
    // Function to close the video player
    const closeVideoPlayer = () => {
      setShowVideoPlayer(false);
    };


  return (
    <main className="flex min-h-screen flex-col items-start md:ml-[210px] md:mt-[80px]">

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
            

            {/* Video */}
              {/* <source src="/videoNextjs.mp4" type="video/mp4" />
              Your browser does not support the video tag. */}
              {trailerKey && (
                <>
     {/* Close button */}
     <button className='close-button' onClick={closeVideoPlayer}>
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

      <div className={`${showVideoPlayer && 'blur-bg'} flex flex-row gap-5`}>
        <div className="mt-20 md:mt-auto h-auto relative">
          {/* <Image className="md:rounded-2xl w-[700px] h-[400px]" src="/assets/spider-verse.jpg" width={700} height={250} /> */}
          {randomMovie && (
            <>
              <img
                className="w-screen md:rounded-2xl w-auto md:w-full h-auto md:h-[400px]"
                src={`https://image.tmdb.org/t/p/w500/${randomMovie.backdrop_path}`}
                alt=""
              />
          {/* banner overlay */}
          <div className="absolute md:rounded-2xl bg-[black] opacity-50 h-full top-0  w-full">
          <div>
            <div className="absolute md:ml-12 top-[100px] md:top-[200px] flex flex-col justify-center items-ceter">
              <p className=" text-left  font-bold text-[18px] text-[#efefef] md:text-[20px] uppercase">{randomMovie.name}</p>
              {/* <p className="text-center md:text-left text-[#efefef]">{randomMovie.overview}.</p> */}


              <div className="flex flex-row items-center md:mt-3 gap-3">
                <div onClick={handleWatchTrailerClick} className='flex flex-row items-center w-[132px] transition-all duration-300 ease-in-out bg-[#b70000] rounded-3xl'>
                  <FaEye size={25} className='ml-3' />
                  <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]">
                    <Link href="javascript:;" className="flex items-center flex-grow hover:text-white">Trailer</Link>
                  </span>
                </div>

                <div className='flex flex-row items-center w-[132px] transition-all duration-300 ease-in-out bg-[#383e52] rounded-3xl'>
                  <MdOutlinePlaylistAdd size={25} className='ml-3' />
                  <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]">
                    <Link href="javascript:;" className="flex items-center flex-grow hover:text-white">Save</Link>
                  </span>
                </div>
              </div>
            </div>

          </div>
          </div>


            </>
          )}

        </div>


        <div className="hidden md:block">
          {Loading == false && (
            <div className="hidden md:flex flex-row items-ceter justify-between">
            <p>Trending</p>
            <Link className="flex flex-row items-center" href='/content/tvshows/trending'><p>All</p> <IoIosArrowForward /></Link>
          </div>
          )}

          <MovieList showName={true} tvshows={true} urlType={trendingUrl} trendingTrailerBtn={trendingTrailerBtn} divStyle={"flex flex-row w-[270px] gap-3 items-ceter rounded-2xl bg-[#23252e] mt-3"} imageStyle={"rounded w-[60px] h-[100px]"} customStyle={'hidden md:flex flex-col gap-3 justify-center items-center w-auto md:w-full'} limit={3} />

        </div>
      </div>

      <div className="w-auto mt-5 ">
        {
          Loading == false && (
            <div className="hidden md:flex flex-row items-ceter justify-between">
          <p>Discover</p>
          <Link className="flex flex-row items-center" href='/content/tvshows/discover'><p>All</p> <IoIosArrowForward /></Link>
        </div>
          )
        }

<div className={`${showVideoPlayer && 'blur-bg'}`} >
<MovieList showName={false} tvshows={true} urlType={discoverUrl} imageStyle={" rounded w-full h-full"} customStyle={'hidden md:flex flex-row gap-3 justify-center items-ceter md:w-full'} limit={6} />
</div>

        <div className={`${showVideoPlayer && 'blur-bg'} grid grid-cols-2 md:hidden gap-4`}>
       {ApiResponse && ApiResponse.slice(0, 4).map((movie) => (
    <div key={movie.id} class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
        <h2 className='text-center'>{movie.title}</h2>
        </div>
   
</div>
))}
</div>
      </div>

    </main>
  );
}