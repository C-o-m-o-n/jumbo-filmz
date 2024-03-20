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

const discoverUrl = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
const trendingUrl = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

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

  return (
    <main className="flex min-h-screen flex-col items-start md:ml-[210px] md:mt-[80px]">

      {/* loader */}
      {Loading == true && (
              <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]">
        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#b70000]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div>
  
  )}


      <div className="flex flex-row gap-5">
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
              <p className=" text-left  font-bold text-[18px] text-[#efefef] md:text-[20px] uppercase">{randomMovie.title}</p>
              {/* <p className="text-center md:text-left text-[#efefef]">{randomMovie.overview}.</p> */}


              <div className="flex flex-row items-center md:mt-3 gap-3">
                <div className='flex flex-row items-center w-[132px] transition-all duration-300 ease-in-out bg-[#b70000] rounded-3xl'>
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
            <Link className="flex flex-row items-center" href='/content/movies/trending'><p>All</p> <IoIosArrowForward /></Link>
          </div>
          )}

          <MovieList urlType={trendingUrl} trendingTrailerBtn={trendingTrailerBtn} divStyle={"flex flex-row w-[270px] gap-3 items-ceter rounded-2xl bg-[#23252e] mt-3"} imageStyle={"rounded w-[60px] h-[100px]"} customStyle={'hidden md:flex flex-col gap-3 justify-center items-center w-auto md:w-full'} limit={3} />

        </div>
      </div>

      <div className="w-auto mt-5 ">
        {
          Loading == false && (
            <div className="hidden md:flex flex-row items-ceter justify-between">
          <p>Discover</p>
          <Link className="flex flex-row items-center" href='/content/movies/discover'><p>All</p> <IoIosArrowForward /></Link>
        </div>
          )
        }


<MovieList urlType={discoverUrl} imageStyle={" rounded w-full h-full"} customStyle={'hidden md:flex flex-row gap-3 justify-center items-ceter md:w-full'} limit={6} />
{/* <MovieList urlType={discoverUrl} imageStyle={" rounded w-[300px] h-full"} customStyle={'flex flex-row gap-2 justify-center items-ceter w-full xsm:hidden md:hidden'} limit={2} /> */}

        <div className="flex flex-row items-ceter justify-between gap-3 mt-5">



        </div>
      </div>

    </main>
  );
}