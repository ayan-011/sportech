
import { FloatingDock } from '@/components/ui/floating-dock';
import { IconHome, IconUser, IconSettings } from "@tabler/icons-react";

const items = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/sportechgreno/",
    icon: (
      <a
        href="https://www.instagram.com/sportechgreno/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"> <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /> <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </a>
    ),
  },
  {
    title: "Facebook",
    href: "/Facebook",
    icon: (
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
       </a>
    ),
  },
  {
    title: "Email",
    href: "/Email",
     icon: (
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      > <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
       </a>
    ),
  },
]; 

export default function Page() {
  return (
    <div className="min-h-fit border-t-[1px] border-zinc-800  sm:flex-row  flex flex-col bg-black">


      {/* Details */}
      <div className="sm:w-1/2 w-full flex flex-col bg-red-">
        <div className="py-10 flex items-center justify-center   ">
          <img src="/Loading.gif" alt="" className='w-32' />
        </div>
        <div className=" md:flex hidden bg-red-9   ">
          <FloatingDock
            items={items}
            desktopClassName="shadow-lg"
            mobileClassName="shadow-lg"
            className=""
          />
        </div>
        <div className="detail w-full flex items-center justify-center py-3 text-zinc-400 text-[12px]">Ph: +1 234 567 890</div>


        {/* for mobile  */}
        <div className="flex md:hidden p-3 bg-red- items-center justify-center">
          <div className="containr flex gap-5 rounded-lg border-[1px] border-zomc-200 text-zinc-200 p-1">
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></a>
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg></a>
          </div>
        </div>

      </div>


      {/* map  */}
      <div className="sm:w-1/2 flex py-10 justify-center  lg:px-20 md:px-10 sm:px-7 px-2 flex-col ">


        <a href="https://www.google.com/maps/place/sportech-+Car+repair+and+service+In+Greater+Noida/@28.4463951,77.5391623,7049m/data=!3m1!1e3!4m14!1m7!3m6!1s0x390cc1575cc263fd:0x45de433971d08666!2ssportech-+Car+repair+and+service+In+Greater+Noida!8m2!3d28.4545944!4d77.5370692!16s%2Fg%2F11nrxynmrw!3m5!1s0x390cc1575cc263fd:0x45de433971d08666!8m2!3d28.4545944!4d77.5370692!16s%2Fg%2F11nrxynmrw?entry=ttu&g_ep=EgoysmI1smkyNC4wIKXsmSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer">

          <img src="/map.png" alt="" className='hover:opacity-50   transition-all duration-200 rounded' />
        </a>

        <div className="location py-1 flex gap-2">
          <span className='flex gap-1 text-blue-400'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>location</span>
          <p className='text-[12px] text-zinc-400 py-1'>Plot no 46 sector 31, Industrial Area, Surajpur Site V, Greater Noida, Uttar Pradesh 201308</p>

        </div>
      </div>
      {/* 👇 Dock is just a normal component inside the scrollable flow */}


    </div>
  );
}
