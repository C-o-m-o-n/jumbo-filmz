import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineWhatshot, MdOutlineWifiTethering, MdOutlineLibraryAdd, MdOutlinePlaylistAdd } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";
import { DiModernizr } from "react-icons/di";
import { AiTwotoneGold } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import Image from 'next/image' 
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";

function RightNav() {
  return (
            <aside className="flex flex-col shrink-0 sm:w-[200px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 top-[70px] right-0 bg-[#23252e] fixed-end loopple-fixed-end">

        <div className="relative pl-3 my-5">
            <div className="flex flex-col w-full font-medium">
                
            <div className='flex flex-row  items-center transition-all duration-300 ease-in-out hover:bg-[#b70000] rounded-3xl'>
                <MdOutlineWifiTethering  className='ml-3'/>
                <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">New</Link>
                </span>
            </div>

            <div className='flex flex-row items-center transition-all duration-300 ease-in-out hover:bg-[#b70000] rounded-3xl'>
                <MdOutlineWhatshot className='ml-3'/>
                <span className="select-none flex items-center px-4 py-2 cursor-pointer my-2 rounded-[.95rem]">
                <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">Trending</Link>
                </span>
            </div>

            <div className='flex flex-row  items-center transition-all duration-300 ease-in-out hover:bg-[#b70000] rounded-3xl'>
                <MdOutlinePlaylistAdd  className='ml-3'/>
                <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">Playlist</Link>
                </span>
            </div>

            <div className='flex flex-row  items-center transition-all duration-300 ease-in-out hover:bg-[#b70000] rounded-3xl'>
                <MdOutlineLibraryAdd  className='ml-3'/>
                <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">Library</Link>
                </span>
            </div>
            
            <div className="hidden border-b border-2 lg:block dark:border-neutral-700/70 border-neutral-200"></div>

            <div className='flex flex-row  items-center transition-all duration-300 ease-in-out hover:bg-[#b70000] rounded-3xl'>
                <FaRegUser className='ml-3' />
                <span className="select-none flex items-center px-4 py-2 cursor-pointer my-2 rounded-[.95rem]">
                <Link  href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-white">Profile</Link>
                </span>
            </div>

            
            <div className="block pt-5 pb-[.15rem]">
                <div className="px-4 py-[.65rem]">
                <span className="font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">Applications</span>
                </div>
            </div>

            <div>
                <span className="select-none flex items-center px-4 py-2 cursor-pointer my-2 rounded-[.95rem]">
                <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Users</Link>
                </span>
            </div>


            <div>
                <span className="select-none flex items-center px-4 py-2 cursor-pointer my-2 rounded-[.95rem]">
                <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Orders</Link>
                </span>
            </div>

            <div>
                <span className="select-none flex items-center px-4 py-2 cursor-pointer my-2 rounded-[.95rem]">
                <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Track Order</Link>
                </span>
            </div>

            <div>
                <span className="select-none flex items-center px-4 py-2 cursor-pointer my-2 rounded-[.95rem]">
                <Link href="javascript:;" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Products</Link>
                </span>
            </div>
<UserButton showName/>
            </div>
            </div>
        </aside>
     
      )
}

export default RightNav
