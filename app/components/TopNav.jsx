"use client"

import { useEffect, useState } from "react";
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";
import Image from 'next/image'
import { FaRegBell } from "react-icons/fa";
import { BsLightning } from "react-icons/bs";
import { RiMenu5Fill } from "react-icons/ri";
function TopNav() {


  const [isTrendingDropdownOpen, setTrendingDropdownOpen] = useState(false);
  const [isDiscoverDropdownOpen, setDiscoverDropdownOpen] = useState(false);

  const handleTrendingDropDown = () => {
    setTrendingDropdownOpen(!isTrendingDropdownOpen);
  };
  const handleDiscoverDropDown = () => {
    setDiscoverDropdownOpen(!isDiscoverDropdownOpen);
  };

  // State to keep track of the active button
  const [activeButton, setActiveButton] = useState(null);
  const [menuOpen, setmenuOpen] = useState(false)

  // Function to handle button click and update active state
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (


    <nav className="bg-white dark:bg-[#23252e] fixed w-full z-20 top-0 md:start-[200px]">
      <div className="max-w-screen-xl flex justify-center gap-[20px] md:gap-[200px] items-center mx-auto p-4">
        {/* <p>Hello</p> */}
        <form className="flex items-center ml-[1y0px] max-w-lg">
          <label for="voice-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" />
              </svg>
            </div>
            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies..." required />
            <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
              </svg>
            </button>

          </div>
          <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-[#0e0d0f] rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>Search
          </button>
        </form>
        <button
          onClick={() => setmenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden
      hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
       dark:focus:ring-gray-600" >
          <RiMenu5Fill className='ml-3 text-center md:hidden' size={30} />

        </button>
        <div className={`${menuOpen ? ('absolute transition-all duration-300 ease-in-out top-[60px] block md:hidden w-full') : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#23252e]
       md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  md:dark:bg-[#23252e] dark:border-gray-700">
            <li
              // "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              onClick={() => {
                setActiveButton(null);
                handleButtonClick("Movies")
              }}>
              <Link href="/content/movies"
                className={activeButton === "Movies" ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" :
                  'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}
                aria-current="page">Movies</Link>
            </li>
            <li
              onClick={() => {
                setActiveButton(null);
                handleButtonClick("tvshows")
              }}>
              <Link href="/content/tvshows" className={activeButton === "tvshows" ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}>Tv Shows</Link>
            </li>
            <li
              onClick={() => {
                setActiveButton(null);
                handleButtonClick("Upcoming")
              }}>
              <Link href="/content/movies/upcoming" className={activeButton === "Upcoming" ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}>Upcoming</Link>
            </li>
            
            <li
              onClick={() => {
                setActiveButton(null);
                handleButtonClick("Trending")
              }}>
              <button onClick={handleTrendingDropDown} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
               className={activeButton === "Trending" ? "flex flex-row justify-center items-center py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : 'flex flex-row justify-center items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}>Trending 
               <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
              <div id="dropdownNavbar" className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 
            dark:divide-gray-600 ${
              isTrendingDropdownOpen ? "block" : "hidden"
            }`}>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                  <li
                    onClick={() => {
                      setActiveButton(null);
                      handleButtonClick("trendingMovies")
                    }}>
                    <Link href="/content/movies/trending" className={activeButton === "trendingMovies" ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}>Movies</Link>
                  </li>
                  <li
                    onClick={() => {
                      setActiveButton(null);
                      handleButtonClick("trendingTvshows")
                    }}>
                    <Link href="/content/tvshows/trending" className={activeButton === "trendingTvshows" ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}>Tv Shows</Link>
                  </li>
                </ul>
                
              </div>
            </li>


            <li
              onClick={() => {
                setActiveButton(null);
                handleButtonClick("Discover")
              }}>
              <button onClick={handleDiscoverDropDown} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
               className={activeButton === "Discover" ? "flex flex-row justify-center items-center py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : 'flex flex-row justify-center items-center py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}>Discover 
               <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
               
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg></button>
              <div id="dropdownNavbar" className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 
            dark:divide-gray-600 ${
              isDiscoverDropdownOpen ? "block" : "hidden"
            }`}>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                  <li
                    onClick={() => {
                      setActiveButton(null);
                      handleButtonClick("discoverMovies")
                    }}>
                    <Link href="/content/movies/discover" className={activeButton === "discoverMovies" ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}>Movies</Link>
                  </li>
                  <li
                    onClick={() => {
                      setActiveButton(null);
                      handleButtonClick("discoverTvshows")
                    }}>
                    <Link href="/content/tvshows/discover" className={activeButton === "discoverTvshows" ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}>Tv Shows</Link>
                  </li>
                </ul>
                
              </div>
            </li>


            <div className="flex flex-row justify-between">
              <li>
                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <FaRegBell size={30} />
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  <BsLightning size={30} />
                </Link>
              </li>
              <li>
                <UserButton afterSignOutUrl='/' />
              </li>
            </div>
          </ul>
        </div>

        {/* <div className="w-[20px]"></div> */}

        <div className="items-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-[#23252e]">
            <li
              // "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              onClick={() => {
                setActiveButton(null);
                handleButtonClick("Movies")
              }}>
              <Link href="/content/movies"
                className={activeButton === "Movies" ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" :
                  'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}
                aria-current="page">Movies</Link>
            </li>
            <li
              onClick={() => {
                setActiveButton(null);
                handleButtonClick("tvshows")
              }}>
              <Link href="/content/tvshows" className={activeButton === "tvshows" ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}>Tv Shows</Link>
            </li>
            <li
              onClick={() => {
                setActiveButton(null);
                handleButtonClick("Anime")
              }}>
              <Link href="#" className={activeButton === "Anime" ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}>Anime</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <FaRegBell size={30} />
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <BsLightning size={30} />
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>

  )
}

export default TopNav