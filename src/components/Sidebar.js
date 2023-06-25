import ice from '../img/ice-image.jpg'
import Navigation from './Navigation'
import {FaBars, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

export default function SideBar(){
  return(
    <aside className='flex justify-between items-center lg:block p-4'>
      <div className='hidden lg:block'>
        <img src={ice} alt='ice' className='border-8 border-[#343A40] rounded-full w-44 h-44 mx-auto' />
      </div>
      <h3 className='text-white lg:text-center font-bold lg:mt-4 w-full'>Aruogu Chidiebube</h3>
      <ul className='text-white text-center'>
        <Navigation text='Home'/>
        <Navigation text='About'/>
        <Navigation text='What I Do'/>
        <Navigation text='Resume'/>
        <Navigation text='Portfolio'/>
        <Navigation text='Contact'/>
      </ul>
      <ul className='w-full my-4 flex gap-4 lg:justify-center justify-end'>
        <li><FaGithub size={20} className='text-white hover:text-[#dc3435] hover:cursor-pointer' /></li>
        <li><FaLinkedinIn size={20} className='text-white hover:text-[#dc3435] hover:cursor-pointer' /></li>
        <li><FaTwitter size={20} className='text-white hover:text-[#dc3435] hover:cursor-pointer' /></li>
      <FaBars size={20} className='lg:hidden hover:cursor-pointer text-white' />
      </ul>
      
    </aside>
  )
}