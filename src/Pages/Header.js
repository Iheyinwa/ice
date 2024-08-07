import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { useRef } from "react";
// import Typed from 'typed.js';


   gsap.registerPlugin(useGSAP);
export default function Header(){
  // const el = React.useRef(null);

  // React.useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ['Web Developer.'],
  //     typeSpeed: 30,
  //     backSpeed: 70,
  //     loop:true
  //   });

  //     return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);

  // const container = useRef();
  useGSAP(
    () => {
      // gsap code here...
      gsap.to(".box", { 
        rotation: 180 ,
        duration: 3,
      }); // <-- automatically reverted
    },

  );  

   

  return (
    <header id="home" className="">
      <div className="relative my-auto h-fit w-full">
        <div className="relative w-full flex justify-center items-center h-screen">
          <div className=" font-poppins flex flex-col justify-center items-center gap-4 w-[90%] md:w-fit">
            <h3 className="text-white text-3xl md:text-5xl text-center break-words">
              Hi i'm a
            </h3>
            <h3
              
              className="text-white md:text-9xl text-7xl box font-bold break-words text-center box"
            >
              Web Developer
              <span className="text-[#dc3135]" />
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}