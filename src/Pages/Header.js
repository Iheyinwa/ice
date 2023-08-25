import { FaChevronDown } from "react-icons/fa";
import React from "react";
import Button from "../components/Button";
import Typed from 'typed.js';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header(){
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer.', 'Technical Writer.'],
      typeSpeed: 30,
      backSpeed: 70,
      loop:true
    });

      return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return(
    <header id="home">
      <div className='my-auto h-fit w-screen md:w-full bg-[url("/src/img/ice-hero.jpg")] bg-no-repeat bg-cover bg-center'>
        <div className="w-full h-screen bg-[#111418]-600/30 backdrop-brightness-50">
            <div className="relative top-[30%] font-poppins flex flex-col justify-center items-center gap-4">
              <h3 className="text-white md:text-3xl text-lg text-center font-bold">Welcome</h3>
              <h3 className="text-white md:text-7xl text-2xl text-center">I'm a <span className='text-[#dc3135]' ref={el} /></h3> 
              <h3 className="text-white md:text-3xl text-lg text-center">based in Africa</h3>
              <Button text='Hire Me' />
              <AnchorLink href='#about'>
                <FaChevronDown size={20} className="text-white animate-bounce mt-12 lg:mt-[120px]" />
              </AnchorLink>
            </div>
        </div>
      </div>
    </header>
  )
}