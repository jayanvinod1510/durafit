import React, {useState} from "react";
import { Button, Text, Img } from "./..";
import { useNavigate} from 'react-router-dom';
import SideNavBar from "components/SideNavBar";
export default function Header({ ...props }) {
  let navigate = useNavigate();
  const handleHomeRedirection = ()=>{
    window.scrollTo(0, 0)
    navigate(`/`)
  }
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  };
const toggleSideNav = () => {
  setIsSideNavOpen(!isSideNavOpen);
};

  return (
    <header {...props} style ={{"position":"fixed","width":"100%","zIndex":"1"}}>
      <div className="flex md:flex-row justify-between items-center w-full gap-5 mx-auto max-w-[1180px]">
          <Img src="images/img_image_55.png" alt="imagefiftyfive" className="w-[15%] md:w-[23%] w-full object-cover" style={{"cursor":"pointer"}} onClick={handleHomeRedirection}/>
        <div className="flex md:hidden justify-between items-center w-[70%] md:w-full gap-5">
          <ul className="flex gap-10 flex-wrap">
            <li>
              <a href="#/blackedition" onClick={scrollToTop} className="self-start opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Black Edition
                </Text>
              </a>
            </li>
            <li>
              <a href="#/mattress" onClick={scrollToTop} className="self-start opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Mattress
                </Text>
              </a>
            </li>
            <li>
              <a href="#/pillows" onClick={scrollToTop} className="self-start opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Pillows
                </Text>
              </a>
            </li>
            <li>
              <a href="#/cushioning" onClick={scrollToTop} className="self-end opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Cushioning
                </Text>
              </a>
            </li>
            <li>
              <a href="#/aboutus" onClick={scrollToTop} className="self-end opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  About Us
                </Text>
              </a>
            </li>
          </ul>
          <a href="#/contactus" onClick={scrollToTop} className="self-start opacity-0.8">
          <Button
            size="xs"
            variant="outline"
            shape="round"
            color="deep_orange_300_deep_orange_400_01"
            className="sm:px-5 font-medium min-w-[149px]"
          >
            Contact us
          </Button>
          </a>
          
</div>
<div className="hidden md:block cursor-pointer"
  onClick={() => toggleSideNav()}>
  <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.142822 0.143066H23V2.42878H0.142822V0.143066ZM5.85711 5.85735H23V8.14307H5.85711V5.85735ZM13 11.5716H23V13.8574H13V11.5716Z" fill="#737373" />
  </svg>
</div>
</div>
<SideNavBar isOpen={isSideNavOpen} onClose={toggleSideNav} />
</header>
);
}
