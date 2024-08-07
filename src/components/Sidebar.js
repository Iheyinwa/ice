import { useState } from 'react'
import ice from '../img/ice-image.jpg'
import Navigation from './Navigation'
import {FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import {IoClose, IoMenu} from 'react-icons/io5'
import NavigationMenu from './NavigationMenu'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function SideBar(){
const [menu, setMenu] = useState(false);

  const openMenu=()=>{
    setMenu(!menu)
  }

 
  return (
    <div className="m-4 md:mx-0">
      <aside
        id="card"
        className={`flex justify-between items-center lg:block p-4 border-[rgba(33, 37, 41, 0.57)]  ${
          menu ? "rounded-t-xl" : "rounded-xl"
        }  `}
      >
        <div className="hidden lg:block">
          <img
            src={ice}
            alt="ice"
            className="border-8 border-[#343A40] rounded-full w-44 h-44 mx-auto"
          />
        </div>
        <h3 className="text-white lg:text-center font-bold lg:mt-4 w-full text-3xl">
          ice
        </h3>
        <ul className="text-white text-center hidden lg:block">
          <AnchorLink href="#home">
            <Navigation text="Home" />
          </AnchorLink>
          <AnchorLink href="#about">
            <Navigation text="About" />
          </AnchorLink>
          <AnchorLink href="#resume">
            <Navigation text="Resume" />
          </AnchorLink>
          <AnchorLink href="#portfolio">
            <Navigation text="Portfolio" />
          </AnchorLink>
          <AnchorLink href="#contact">
            <Navigation text="Contact" />
          </AnchorLink>
        </ul>
        <ul className="w-full m-4 flex gap-4 items-center lg:justify-center justify-end">
          <li>
            <FaGithub
              size={20}
              className="text-white hover:text-[#dc3435] hover:cursor-pointer"
            />
          </li>
          <li>
            <FaLinkedinIn
              size={20}
              className="text-white hover:text-[#dc3435] hover:cursor-pointer"
            />
          </li>
          <li>
            <FaTwitter
              size={20}
              className="text-white hover:text-[#dc3435] hover:cursor-pointer"
            />
          </li>
          {menu ? (
            <IoClose
              size={30}
              className="lg:hidden hover:cursor-pointer text-white"
              onClick={openMenu}
            />
          ) : (
            <IoMenu
              size={30}
              className="lg:hidden hover:cursor-pointer text-white"
              onClick={openMenu}
            />
          )}
        </ul>
      </aside>
      {menu && <NavigationMenu onclick={openMenu} />}
    </div>
  );
}