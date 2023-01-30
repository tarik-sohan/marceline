import ActionButton from "@/shared/ActionButton"
import HText from "@/shared/HText"
import { SelectedPage, BenefitType } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon  } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import BenefitsPageImage from "@/assets/BenefitsPageImage.png"

const benefits: Array<BenefitType> =[{
  icon : <HomeModernIcon  className="h-6 w-6" />,
  title : "State of the art facilities",
  description : "lLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in blanditiis culpa doloribus reprehenderit soluta maxime quos maiores modi. Reprehenderit!"
},
{
  icon : <UserGroupIcon className="h-6 w-6" />,
  title : "100s of diverse classes",
  description : "lLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in blanditiis culpa doloribus reprehenderit soluta maxime quos maiores modi. Reprehenderit!"
},
{
  icon : <AcademicCapIcon className="h-6 w-6" />,
  title : "Expert and pro trainers",
  description : "lLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in blanditiis culpa doloribus reprehenderit soluta maxime quos maiores modi. Reprehenderit!"
}
]

const container = {
  hidden : {},
  visible : {transition : {staggerChildren :0.2 }},
  
}


type Props = {
setSelectedPage :(value :SelectedPage)=>void
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 " >
<motion.div  onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
  {/* HEADER COMMENT */}
<motion.div className="md:my-5 md:my-3/5" 
 initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:1.5, }}
 variants={{
   hidden:{opacity:0, x:-50,},
   visible :{opacity:1, x:0}
 }}
>
<HText> NOT YOUR AVERAGE GYM </HText>
<p className="my-5 text-sm" >We provide worldclass fitness equipment,
   trainers and classes to reach your fitness goals faster.
    We provide true care into each and every member.</p>
</motion.div>

{/* 
BENEFITS SECTION 
*/}
<motion.div className="md:flex items-center justify-between gap-8 mt-5" 
initial="hidden" whileInView="visible" viewport={{once:true, amount: 0.5}} variants={container}
>
{benefits.map((benefit: BenefitType)=>(<Benefit key={benefit.title} title={benefit.title} icon={benefit.icon} description={benefit.description} setSelectedPage={setSelectedPage}  />))}
  

</motion.div>
{/* GRAPHICS AND DESCRIPTION */}

<div className=" mt-16 items-center justify-between gap-20 md:mt-20 md:flex">
  {/* GRAPHIC */}

  <img src={BenefitsPageImage} alt="benefits-page-graphic" className="mx-auto" />


  {/* DESCRIPTION */}

  <div>
    {/* TITLE */}
<div className="relative" >

  <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves" >
    <motion.div  initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:1.5, }}
 variants={{
   hidden:{opacity:0, x:50,},
   visible :{opacity:1, x:0}
 }}>
      <HText>MILLIONS OF SATISFIED MEMBERS GETTING FIT</HText>
    </motion.div>
  </div>
</div>
{/* DESC */}
<motion.div initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:1.5,delay:0.2 }}
 variants={{
   hidden:{opacity:0, x:50,},
   visible :{opacity:1, x:0}
 }}>
  <p className="my-5" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, eaque consectetur.
     Asperiores error animi tempore sit molestias iusto sequi dolor,
      possimus perspiciatis consectetur odio corrupti nesciunt,
       saepe aut! Ea enim, in consequuntur debitis suscipit dolorum dolores quia tempora, ad odit odio esse,
        at ducimus nostrum inventore eius possimus quo id!</p>

  <p className="mb-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Provident nobis odio alias facere nihil libero explicabo quibusdam voluptas ad autem.</p>
</motion.div>
    {/* BUTTON */}
<div className="relative mt-16" >
<div className="before:absolute before:right-40 before:z-[-1] before:-bottom-20 before:content-sparkles" >
<ActionButton setSelectedPage={setSelectedPage} >Join Now </ActionButton>
</div>
</div>

  </div>
</div>
</motion.div>
    </section>
  )
}

export default Benefits