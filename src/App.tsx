
import Navbar from "@/scenes/navbar/Navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"
import Home from "./scenes/home"
import Benefits from "@/scenes/benefits"
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/ContactUs";
import Footer from "@/scenes/footer"


function App() {
  const [isTopOfPage, setIsTopOfPage]= useState<boolean>(true)
  useEffect(()=>{
    const handleScroll = () =>{
    if ( window.scrollY === 0){
      setIsTopOfPage(true)
      setSelectedPage(SelectedPage.Home)
    }
    if(window.scrollY !== 0){setIsTopOfPage(false)}
    }
    window.addEventListener("scroll", handleScroll)
    return ()=>window.removeEventListener("scroll", handleScroll)
  },[])

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <div className="app bg-gray-50 " >
 <Navbar  isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}   />
 <Home setSelectedPage={setSelectedPage}  />
 <Benefits setSelectedPage={setSelectedPage}  />
 <OurClasses setSelectedPage={setSelectedPage} />
 <ContactUs setSelectedPage={setSelectedPage} />
 <Footer />
    </div>
  )
}

export default App
