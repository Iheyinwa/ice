import { FaChevronDown } from "react-icons/fa";
import React from "react";
import Button from "../components/Button";
import Typed from 'typed.js';

export default function Header(){
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer.', 'Technical Writer.'],
      typeSpeed: 30,
      backSpeed: 30,
      loop:true
    });

      return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return(
    <header>
      <div className='my-auto h-fit w-full bg-[url("/src/img/ice-hero.jpg")] bg-no-repeat bg-cover bg-center'>
        <div className="w-full h-screen bg-[#111418]-600/30 flex justify-center items-center backdrop-brightness-50">
          <div className="text-center font-poppins">
            <h3 className="text-white md:text-3xl text-lg text-center font-bold mb-12">Welcome</h3>
            <h3 className="text-white md:text-7xl text-5xl text-center mb-12">I'm a <span className='text-[#dc3135]' ref={el} /></h3> 
            <h3 className="text-white md:text-3xl text-lg text-center mb-8">based in Africa</h3>
            <Button text='Hire Me' />
            <FaChevronDown size={20} className="text-white animate-bounce mx-auto relative top-[120px]" />
          </div>
        </div>
      </div>
    </header>
  )
}