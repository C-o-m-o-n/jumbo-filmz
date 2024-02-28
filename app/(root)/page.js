import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import TopNav from "../components/TopNav";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start ml-[210px] mt-[80px]">
      {/* <TopNav /> */}
      <div className="flex flex-row gap-5">
        <div className="relative">
          <Image className="rounded-2xl" src="/assets/spider-verse.jpg" width={700} height={250} />
          {/* banner overlay */}
          <div>
            <div className="absolute ml-12 border border-2 border-[red] top-[240px] flex flex-col justify-center items-ceter">
              <p className="font-semibold text-[35px] uppercase">Spiderman into the spider verse</p>
              <p >Tom Holland</p>
              <div className='w-32 transition-all duration-300 ease-in-out bg-[#b70000] rounded-3xl'>
                {/* <MdOutlinePlaylistAdd  className='ml-3'/> */}
                <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]">
                <Link href="javascript:;" className="flex items-center flex-grow hover:text-white">Watch Now</Link>
                </span>
            </div>
            </div>
          </div>

        </div>


        <div>
          <div className="flex flex-row items-ceter justify-between">
            <p>Check These out</p>
            <Link href='/'>All</Link>
          </div>
          <div className="flex flex-row w-[250px] gap-3 items-ceter rounded-2xl bg-[#23252e] mt-3">
            <Image className="rounded" src="/assets/jack-reacher.jpeg" width={60} height={10} />
            <div className="flex flex-col justify-center items-ceter">
              <p className="font-semibold text-[0.95rem] uppercase">Jack Reacher</p>
              <p >Tom Cruise</p>
            </div>
          </div>

          <div className="flex flex-row w-[250px] gap-3 items-ceter rounded-2xl bg-[#23252e] mt-3">
            <Image className="rounded" src="/assets/dismissed.jpeg" width={60} height={10} />
            <div className="flex flex-col justify-center items-ceter">
              <p className="font-semibold text-[0.95rem] uppercase">dismissed</p>
              <p >Tom Cruise</p>
            </div>
          </div>

          <div className="flex flex-row w-[250px] gap-3 items-ceter rounded-2xl bg-[#23252e] mt-3">
            <Image className="rounded" src="/assets/avatar1.jpeg" width={60} height={10} />
            <div className="flex flex-col justify-center items-ceter">
              <p className="font-semibold text-[0.95rem] uppercase">Avata Way of water</p>
              <p >Tom Cruise</p>
            </div>
          </div>

          <div className="flex flex-row w-[250px] gap-3 items-ceter rounded-2xl bg-[#23252e] mt-3">
            <Image className="rounded" src="/assets/quantamania.jpg" width={60} height={10} />
            <div className="flex flex-col justify-center items-ceter">
              <p className="font-semibold text-[0.95rem] uppercase">Ant Man Quantamania</p>
              <p >Paul Rudd</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
