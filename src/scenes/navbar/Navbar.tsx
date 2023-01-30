import {useState } from "react"
import {Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Marceline from '@/assets/Marceline.png'
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
 isTopOfPage : boolean;
    selectedPage : SelectedPage;
    setSelectedPage : (value :SelectedPage)=>void;

}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {


    const flexBetween = 'flex items-center justify-between';
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-[#E3F6FF] drop-shadow text-white";
  return (

   <nav>
    <div className={`${navbarBackground}${flexBetween} fixed z-30 top-0 w-full py-6`} >
<div className={`${flexBetween} mx-auto w-5/6`} >
<div className={`${flexBetween} w-full gap-16`}>
    {/* {LEFT SIDE} */}

    <img src={Marceline} alt="logo" className="w-22 h-22"/>

    {/* {RIGHT SIDE} */}
   {isAboveMediumScreens ? (<div className={`${flexBetween} w-full `}>
<div className={`${flexBetween} gap-8 text-sm`} >
   <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
   <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
   <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
   <Link page="Contacts us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
    <div  className={`${flexBetween} gap-8`} >
<p>Sign In</p>
<ActionButton setSelectedPage={setSelectedPage} >Become a member</ActionButton>
    </div>
    </div>)

    : (<button className="rounded-full bg-violet-100 p-2" onClick={()=>{setIsMenuToggled(!isMenuToggled)}} >
        <Bars3Icon className="h-6 w-6 text-white"  />
         </button>)}
</div>
</div>
    </div>
 
    {/* Mobile menu modal */}
  {  !isAboveMediumScreens && isMenuToggled &&
    (<div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-violet-100 drop-shadow-xl" >

{/* CLOSE ICON */}

<div className="flex justify-end p-12" >
    <button onClick={()=>{setIsMenuToggled(!isMenuToggled)}} >
<XMarkIcon className="h-6 w-6 text-white"  />
    </button>
</div>


{/* MENU ITEMS */}

<div className="ml-[33%] flex flex-col gap-10 text-2xl text-white ">
   <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
   <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
   <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
   <Link page="Contacts us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  </div>)}


   </nav>
  )
}

export default Navbar