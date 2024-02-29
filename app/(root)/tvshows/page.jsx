import Image from "next/image";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import Link from 'next/link'

export default function TvShows() {
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
          <p>Check These out</p>
            <Link className="flex flex-row items-center" href='/'><p>All</p> <IoIosArrowForward /></Link>
          </div>
          
          <div className="flex flex-row w-[270px] h-[100px] gap-3 items-ceter rounded-2xl bg-[#23252e] mt-5">
            <Image className="rounded" src="/assets/jack-reacher.jpeg" width={60} height={10} />
            <div className="flex flex-col justify-center items-ceter">
              <p className="font-semibold text-[0.95rem] uppercase">Jack Reacher</p>
              <p >Tom Cruise</p>
            </div>
          </div>

          <div className="flex flex-row w-[270px] h-[100px] gap-3 items-ceter rounded-2xl bg-[#23252e] mt-5">
            <Image className="rounded" src="/assets/dismissed.jpeg" width={60} height={10} />
            <div className="flex flex-col justify-center items-ceter">
              <p className="font-semibold text-[0.95rem] uppercase">dismissed</p>
              <p >Tom Cruise</p>
            </div>
          </div>

          <div className="flex flex-row w-[270px] h-[100px] gap-3 items-ceter rounded-2xl bg-[#23252e] mt-5">
            <Image className="rounded" src="/assets/avatar1.jpeg" width={60} height={10} />
            <div className="flex flex-col justify-center items-ceter">
              <p className="font-semibold text-[0.95rem] uppercase">Avatar Way of water</p>
              <p >Tom Cruise</p>
            </div>
          </div>

        </div>
      </div>

<div className="mt-5 ">
<div className="flex flex-row items-ceter justify-between">
            <p>Trending</p>
            <Link className="flex flex-row items-center" href='/'><p>All</p> <IoIosArrowForward /></Link>
          </div>
      <div className="flex flex-row items-ceter justify-between gap-3 mt-5">


      <div className="flex flex-col w-[155px] gap-3 justify-center items-ceter rounded-2xl bg-[#23252e]">
        <Image className="rounded w-full h-full" src="/assets/jrngb.jpg" width={60} height={10} />
        {/* <p className="">Ant Man Quantamania</p> */}
      </div>
      <div className="flex flex-col w-[155px] gap-3 justify-center items-ceter rounded-2xl bg-[#23252e] mt-3">
        <Image className="rounded w-full h-full" src="/assets/quantamania.jpg" width={60} height={10} />
        {/* <p className="">Ant Man Quantamania</p> */}
      </div>
      <div className="flex flex-col w-[155px] gap-3 justify-center items-ceter rounded-2xl bg-[#23252e] mt-3">
        <Image className="rounded w-full h-full" src="/assets/onward.jpeg" width={60} height={10} />
        {/* <p className="">Ant Man Quantamania</p> */}
      </div>
      <div className="flex flex-col w-[155px] gap-3 justify-center items-ceter rounded-2xl bg-[#23252e] mt-3">
        <Image className="rounded w-full h-full" src="/assets/a-bugs-life.jpeg" width={60} height={10} />
        {/* <p className="">Ant Man Quantamania</p> */}
      </div>
      <div className="flex flex-col w-[155px] gap-3 justify-center items-ceter rounded-2xl bg-[#23252e] mt-3">
        <Image className="rounded w-full h-full" src="/assets/brahmastra.jpg" width={60} height={10} />
        {/* <p className="">Ant Man Quantamania</p> */}
      </div>
      <div className="flex flex-col w-[155px] gap-3 justify-center items-ceter rounded-2xl bg-[#23252e] mt-3">
        <Image className="rounded w-full h-full" src="/assets/avatar3.jpeg" width={60} height={10} />
        {/* <p className="">Ant Man Quantamania</p> */}
      </div>
      </div>
</div>

    </main>
  );
}
