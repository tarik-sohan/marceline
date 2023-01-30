

type Props = {
    name:string;
    description?: string;
    image: string
}

const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center
whitespace-normal bg-navy-100 text-white text-center opacity-0 transition duration-500 hover:opacity-90`

const Class = ({name,description,image}: Props) => {
  return (
<li className="relative inline-block mx-5 h-[380px] w-[450px] " > 
<div className={overlayStyles} >
    <p className="text-2xl" >{name}</p>
    <p className="mt-5" >{description}</p>
   
</div>
<img src={image} alt={`${image}`} />
</li>
  )
}

export default Class