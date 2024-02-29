import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineWhatshot, MdOutlineWifiTethering, MdOutlineLibraryAdd, MdOutlinePlaylistAdd, MdOutlineAdd } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";
import { DiModernizr } from "react-icons/di";
import { AiTwotoneGold } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";

function RightNav() {
    return (
        <aside className="hidden md:flex flex-col shrink-0 sm:w-[200px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 top-[70px] right-0 bg-[#23252e] fixed-end loopple-fixed-end">

            <div className="relative pl-3 my-5">
                <div className="flex flex-col w-full font-medium">

                    <div className="block p-2">
                        <div className="">
                            <span className="font-semibold text-[0.95rem] uppercase">Genre</span>
                        </div>
                    </div>

                    <div className='hide-scrollbar h-[250px] overflow-y-auto'>
                        <div className='flex flex-row mt-2 items-center transition-all duration-300 ease-in-out bg-[#0e0d0f] hover:bg-[#b70000] rounded-3xl'>
                            <span className="select-none flex items-center p-2 cursor-pointer rounded-[.95rem]">
                                <Link href="javascript:;" className="flex items-center text-[1.15rem] text-white">Sci-Fi</Link>
                            </span>
                            <MdOutlineAdd className='ml-3' />
                        </div>

                        <div className='flex flex-row mt-2 items-center transition-all duration-300 ease-in-out bg-[#0e0d0f] hover:bg-[#b70000] rounded-3xl'>
                            <span className="select-none flex items-center p-2 cursor-pointer rounded-[.95rem]">
                                <Link href="javascript:;" className="flex items-center text-[1.15rem] text-white">Fantacy</Link>
                            </span>
                            <MdOutlineAdd className='ml-3' />
                        </div>

                        <div className='flex flex-row mt-2  items-center transition-all duration-300 ease-in-out bg-[#0e0d0f] hover:bg-[#b70000] rounded-3xl'>
                            <span className="select-none flex items-center p-2 cursor-pointer rounded-[.95rem]">
                                <Link href="javascript:;" className="flex items-center text-[1.15rem] text-white">Comedy</Link>
                            </span>
                            <MdOutlineAdd className='ml-3' />
                        </div>

                        <div className='flex flex-row mt-2  items-center transition-all duration-300 ease-in-out bg-[#0e0d0f] hover:bg-[#b70000] rounded-3xl'>
                            <span className="select-none flex items-center p-2 cursor-pointer rounded-[.95rem]">
                                <Link href="javascript:;" className="flex items-center text-[1.15rem] text-white">Thriller</Link>
                            </span>
                            <MdOutlineAdd className='ml-3' />
                        </div>

                        <div className='flex flex-row mt-2  items-center transition-all duration-300 ease-in-out bg-[#0e0d0f] hover:bg-[#b70000] rounded-3xl'>
                            <span className="select-none flex items-center p-2 cursor-pointer rounded-[.95rem]">
                                <Link href="javascript:;" className="flex items-center text-[1.15rem] text-white">Romance</Link>
                            </span>
                            <MdOutlineAdd className='ml-3' />
                        </div>

                        <div className='flex flex-row mt-2  items-center transition-all duration-300 ease-in-out bg-[#0e0d0f] hover:bg-[#b70000] rounded-3xl'>
                            <span className="select-none flex items-center p-2 cursor-pointer rounded-[.95rem]">
                                <Link href="javascript:;" className="flex items-center text-[1.15rem] text-white">Crime</Link>
                            </span>
                            <MdOutlineAdd className='ml-3' />
                        </div>

                        <div className='flex flex-row mt-2  items-center transition-all duration-300 ease-in-out bg-[#0e0d0f] hover:bg-[#b70000] rounded-3xl'>
                            <span className="select-none flex items-center p-2 cursor-pointer rounded-[.95rem]">
                                <Link href="javascript:;" className="flex items-center text-[1.15rem] text-white">Mystery</Link>
                            </span>
                            {/* <MdOutlineAdd  className='ml-3'/> */}
                        </div>

                        <div className='flex flex-row mt-2  items-center transition-all duration-300 ease-in-out bg-[#0e0d0f] hover:bg-[#b70000] rounded-3xl'>
                            <span className="select-none flex items-center p-2 cursor-pointer rounded-[.95rem]">
                                <Link href="javascript:;" className="flex items-center text-[1.15rem] text-white">Horror</Link>
                            </span>
                            <MdOutlineAdd className='ml-3' />
                        </div>

                    </div>

                    <div className="hidden border-b border-2 lg:block my-2 dark:border-neutral-700/70 border-neutral-200"></div>

                    <div className="block mt-3 p-2">
                        <div className="">
                            <span className="font-semibold text-[0.95rem] uppercase">Recent</span>
                        </div>
                    </div>
                    <div className='hide-scrollbar h-[250px] overflow-y-auto'>
                    <div className="flex flex-col w-[175px] gap-3 justify-center items-ceter rounded-2xl bg-[#23252e] mt-3">
        <Image className="rounded-2xl w-full h-full" src="/assets/shang-chi.jpeg" width={60} height={10} />
        {/* <p className="">Ant Man Quantamania</p> */}
      </div>
      <div className="flex flex-col w-[175px] gap-3 justify-center items-ceter rounded-2xl bg-[#23252e] mt-3">
        <Image className="rounded-2xl w-full h-full" src="/assets/artemis-fowl.jpg" width={60} height={10} />
        {/* <p className="">Ant Man Quantamania</p> */}
      </div>
                    </div>
                   


                </div>
            </div>
        </aside>

    )
}

export default RightNav
