import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};



const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
<AnchorLink className='rounded-md bg-violet-300 px-10 py-2 hover:bg-violet-100 text-white' 
  onClick={() => setSelectedPage(SelectedPage.ContactUs)}
  href={`#${SelectedPage.ContactUs}`}
>
    {children}
</AnchorLink>
  )
}

export default ActionButton