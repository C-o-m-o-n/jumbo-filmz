import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineWhatshot, MdOutlineWifiTethering, MdOutlineLibraryAdd, MdOutlineHome, MdOutlineShoppingCart, MdOutlinePlaylistAdd, MdOutlinePeopleAlt } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";
import { DiModernizr } from "react-icons/di";
import { AiTwotoneGold } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";

function Navbar() {
    return (
        <aside className="group/sidebar hidden md:flex flex-col justify-between shrink-0 sm:w-[200px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-[#23252e] sidenav h-[100svh] fixed-start loopple-fixed-start" id="sidenav-main">



            <div className="relative pl-3 my-5">
            <div className="flex items-center -mt-3 justify-between px-1 py-3">
                <div className="flex items-center">

                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/jumbofilmz.jpeg" className="rounded-full w-[40px] h-[40px]" width={150} height={150} alt="JUMBO FILMZ Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">JUMBO FILMZ</span>
                    </Link>
                </div>
            </div>
            <div className="hidden border-b border-2 lg:block dark:border-neutral-700/70 border-neutral-200"></div>
                <div className="flex  flex-col w-full font-medium">

                    <div className='flex flex-row  items-center transition-all duration-300 ease-in-out hover:bg-[#b70000] rounded-3xl'>
                        <MdOutlineHome className='ml-3' />
                        <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]">
                            <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">Home</Link>
                        </span>
                    </div>

                    <div className='flex flex-row  items-center transition-all duration-300 ease-in-out hover:bg-[#b70000] rounded-3xl'>
                        <MdOutlineWifiTethering className='ml-3' />
                        <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]">
                            <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">New</Link>
                        </span>
                    </div>

                    <div className='flex flex-row items-center transition-all duration-300 ease-in-out hover:bg-[#b70000] rounded-3xl'>
                        <MdOutlineWhatshot className='ml-3' />
                        <span className="select-none flex items-center px-4 py-2 cursor-pointer my-2 rounded-[.95rem]">
                            <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">Trending</Link>
                        </span>
                    </div>

                    <div className='flex flex-row  items-center transition-all duration-300 ease-in-out hover:bg-[#b70000] rounded-3xl'>
                        <MdOutlinePlaylistAdd className='ml-3' />
                        <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]">
                            <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">Watchlist</Link>
                        </span>
                    </div>

                    <div className='flex flex-row  items-center transition-all duration-300 ease-in-out hover:bg-[#b70000] rounded-3xl'>
                        <MdOutlineLibraryAdd className='ml-3' />
                        <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]">
                            <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">Library</Link>
                        </span>
                    </div>

                    <div className="hidden border-b border-2 lg:block dark:border-neutral-700/70 my-2 border-neutral-200"></div>


                    <div className='flex flex-row  items-center transition-all duration-300 ease-in-out hover:bg-[#b70000] rounded-3xl'>
                        <MdOutlinePeopleAlt className='ml-3' />
                        <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]">
                            <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">Users</Link>
                        </span>
                    </div>

                    <div className='flex flex-row  items-center transition-all duration-300 ease-in-out hover:bg-[#b70000] rounded-3xl'>
                        <MdOutlineShoppingCart className='ml-3' />
                        <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]">
                            <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">Orders</Link>
                        </span>
                    </div>

                </div>
            </div>
            <div className="flex items-center m-3">
                <UserButton afterSignOutUrl='/' showName />
            </div>
        </aside>

    )
}

export default Navbar
