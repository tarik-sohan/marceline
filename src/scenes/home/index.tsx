import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import Marcel from "@/assets/Marcel.png"
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import HomePageImage from '@/assets/HomePageImage.png'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"



type Props = {
    setSelectedPage : (value : SelectedPage) =>void
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section
    id="home"
    className="gap-16 bg-gray-100 py-10 md:h-full md:pb-0"
    >

      {/* IMAGE AND MAIN HEADER */}
      <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 "
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5  " >
          {/* HEADNGS */}
          <motion.div className="md:-mt-20"
          initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:1.5, }}
          variants={{
            hidden:{opacity:0, x:-50,},
            visible :{opacity:1, x:0}
          }}
          >
            <div className="relative ">
              <div  >
                <img src={Marcel} alt="home-image-text"  />
              </div>
            </div>
            <p className="mt-8 text-sm " >Marceline is an elite gym for those who want to be the best.
               Bring out your inner beast and strive to be the best version of yourself.
                With wordlclass trainers you'll achieve our goals faster than you expected.
                 Join fast before membership is fullfiled.</p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div className="mt-8 flex items-center gap-8" 
            initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:1.5, delay:0.2 }}
            variants={{
              hidden:{opacity:0, x:-50,},
              visible :{opacity:1, x:0}
            }}
          >
           <ActionButton setSelectedPage={setSelectedPage} >Join Now</ActionButton>
           <AnchorLink className="text-sm font-bold text-navy-100 underline hover:text-gray-50" 
           onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
           href={`#${SelectedPage.ContactUs}`}
           >


           </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
<img src={HomePageImage} alt="Home page image"  />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreens &&
       (<div className="h-[150px] w-full bg-gray-100 py-10 ">
<div className="mx-auto w-5/6 " >
  <div className="flex w-3/5 items-center justify-between gap-8">
    <img src={SponsorRedBull} alt="Red bull sponssor" />
    <img src={SponsorForbes} alt="Forbes sponssor" />
    <img src={SponsorFortune} alt="Fortune sponssor" />
  </div>
</div>
      </div>)}
    </section>
  )
}

export default Home