import React from 'react'

import Image from 'next/image' 
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
            <aside class="group/sidebar flex flex-col shrink-0 sm:w-[200px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-[#23252e] sidenav fixed-start loopple-fixed-start" id="sidenav-main">

<div className='mr-5 flex items-center'>
<h1>JUMBO FILMZ</h1>
</div>

        <div class="flex items-center justify-between px-8 py-5">
            <div class="flex items-center mr-5">

            <div class="mr-2 ">
                <Link href="javascript:void(0)" class="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse">Robert Jason</Link>
                <span class="text-secondary-dark dark:text-stone-500 font-medium block text-[0.85rem]">SEO Manager</span>
            </div>
            </div>
        </div>

        <div class="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

        <div class="relative pl-3 my-5">
            <div class="flex flex-col w-full font-medium">

            <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <a href="javascript:;" class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Sales</a>
                </span>
            </div>


            <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link  href="javascript:;" class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Profile</Link>
                </span>
            </div>

            <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link href="javascript:;" class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Settings</Link>
                </span>
            </div>
            <div class="block pt-5 pb-[.15rem]">
                <div class="px-4 py-[.65rem]">
                <span class="font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">Applications</span>
                </div>
            </div>

            <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link href="javascript:;" class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Users</Link>
                </span>
            </div>


            <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link href="javascript:;" class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Orders</Link>
                </span>
            </div>

            <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link href="javascript:;" class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Track Order</Link>
                </span>
            </div>

            <div>
                <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link href="javascript:;" class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Products</Link>
                </span>
            </div>
<UserButton showName/>
            </div>
            </div>
        </aside>
     
      )
}

export default Navbar
