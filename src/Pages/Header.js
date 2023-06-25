import { FaChevronDown } from "react-icons/fa";
import Button from "../components/Button";

export default function Header(){
  return(
    <header>
      <div className='h-screen w-full bg-[url("/src/img/ice-hero.jpg")] bg-no-repeat bg-cover bg-fixed bg-center'>
        <div className="w-full h-screen bg-[#111418]-600/30 flex justify-center items-center backdrop-brightness-50">
          <div className="text-center font-poppins">
            <h3 className="text-white text-3xl text-center font-bold mb-12">Welcome</h3>
            <h3 className="text-white text-7xl text-center mb-12">I'm a <span>Developer</span></h3> 
            <h3 className="text-white text-3xl text-center mb-8">based in Africa</h3>
            <Button text='Hire Me' />
            <FaChevronDown size={20} className="text-white animate-bounce mx-auto relative top-[120px]" />
          </div>
        </div>
      </div>
    </header>
  )
}