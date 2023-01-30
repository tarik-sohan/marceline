import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant = {
  hidden : {opacity : 0, scale : 0.9},
  visible : {opacity : 1, scale : 1}
}

type Props = {
    icon : JSX.Element;
    description : String;
    title : String;
    setSelectedPage : (value: SelectedPage)=> void;
}

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div className='mt-5 rounded-md border-2 px-5 py-16 border-violet-100 text-center' 
    variants={childVariant}>
        <div className='mb-4 flex justify-center' >
<div className='rounder-full border-2 border-violet-100 p-4' >
    {icon}
</div>
        </div>
        <h4 className='font-bold text-navy-100 '>{title}</h4>
        <p className='my-3 text-violet-100' >{description}</p>
        <AnchorLink>
            
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit