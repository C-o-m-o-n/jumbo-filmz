"use client"

import Image from "next/image";
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";
import TopNav from "../components/TopNav";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import MovieList from "../components/MovieList";

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
  return (
    <main className="flex min-h-screen flex-col items-start md:ml-[210px] md:mt-[80px]">
      {/* <TopNav /> */}
      <div className="flex flex-row gap-5">
        <div className="relative">
          <Image className="md:rounded-2xl w-[700px] h-[400px]" src="/assets/spider-verse.jpg" width={700} height={250} />

          {/* banner overlay */}
          <div className="absolute md:rounded-2xl bg-[black] opacity-50 h-full top-0 w-full"></div>
          <div>
            <div className="absolute ml-12  top-[150px] md:top-[200px] flex flex-col justify-center items-ceter">
              <p className="font-bold text-[18px] md:text-[20px] uppercase">Spiderman into the spider verse</p>
              <p className="text-center">Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.</p>

              <div className="flex flex-row items-center mt-3 gap-3">
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


        <div className="hidden md:block">
          <div className="flex flex-row items-ceter justify-between">
          <p>Trending</p>
            <Link className="flex flex-row items-center" href='/movies/trending'><p>All</p> <IoIosArrowForward /></Link>
          </div>

         <MovieList urlType={trendingUrl} trendingTrailerBtn={trendingTrailerBtn} divStyle={"flex flex-row w-[270px] gap-3 items-ceter rounded-2xl bg-[#23252e] mt-3"} imageStyle={"rounded w-[60px] h-[100px]"}  customStyle={'flex flex-col gap-3 justify-center items-ceter hide-scrollbar overflow-x-scroll  w-full'} limit={3} />
         
        </div>
      </div>

<div className="mt-5 ">
<div className="flex flex-row items-ceter justify-between">
            <p>Discover</p>
            <Link className="flex flex-row items-center" href='/movies/discover'><p>All</p> <IoIosArrowForward /></Link>
          </div>


          <MovieList urlType={discoverUrl} imageStyle={"rounded w-full h-full"} customStyle={'flex flex-row gap-3 justify-center hide-scrollbar overflow-x-scroll items-ceter w-full'} limit={6} />

      <div className="flex flex-row items-ceter justify-between gap-3 mt-5">



      </div>
</div>

    </main>
  );
}
