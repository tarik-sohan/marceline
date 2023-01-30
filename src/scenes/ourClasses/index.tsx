import { ClassType, SelectedPage } from '@/shared/types'
import Image1 from "@/assets/Image1.png"
import Image2 from "@/assets/Image2.png"
import Image3 from "@/assets/Image3.png"
import Image4 from "@/assets/Image4.png"
import Image5 from "@/assets/Image5.png"
import Image6 from "@/assets/Image6.png"
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from "./Class";

const classes : Array<ClassType> = [
  {
    name:"Beginner Classes",
    description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
     image: Image4
  },
  {

    name:"Power Classes",
    description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
     image: Image1
  },
  {
    name:"Full Body Training Classes",
     image: Image2
  },
  {
    name:"Abs Classes",
     image: Image3,
  },
  {
    name:"Calisthenics Classes",
    description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
     image: Image5
  },
  {
    name:"Weight Training Classes",
    description:" Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit ",
     image: Image6
  },
]

type Props = {
  
    setSelectedPage : (value : SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className='w-full bg-gray-50' >
<motion.div onViewportEnter={()=>{setSelectedPage(SelectedPage.OurClasses)}} >
<motion.div className='mx-auto w-5/6'
   initial="hidden" whileInView="visible" viewport={{once:true, amount:0.5}} transition={{duration:1.5, }}
   variants={{
     hidden:{opacity:0, x:-50,},
     visible :{opacity:1, x:0}
   }}
>
<div className='md:w-3/5' >
  <HText>Our Classes</HText>
  <p className='py-5' > Lorem ipsum dolor sit amet consectetur, adipisicing elit.
     Illum aut error tenetur fugiat ullam totam, doloremque odit fuga obcaecati,
      dolores animi delectus. Temporibus, dolores adipisci.</p>
</div>
</motion.div>
<div className='mt-10 h-[353px] overflow-x-auto overflow-y-hidden w-full' >
<ul className='w-[28000px] whitespace-nowrap' >
{classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
</ul>
</div>
</motion.div>
    </section>
  )
}

export default OurClasses