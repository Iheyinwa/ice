import NavigationText from "../components/NavigationText";
import ServiceTag from "../components/ServiceTag";
import { IoDesktopOutline, IoPeopleOutline, IoPhonePortraitOutline, IoTrendingUpSharp } from "react-icons/io5";

export default function Services(){
  return(
    <section className='bg-[#343A40]'>
      <NavigationText
      text='SERVICES'
      title='What I Do?' />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-between mx-12 pb-12">
        <ServiceTag
          children={
          <IoDesktopOutline color='#dc3435' size={40} className="border border-[rgb(17,20,24)] shadow-lg p-4 rounded-lg bg-[#111418] w-[70px] h-[70px]" />
          }
          service='Web Design Implementation'
        />
        <ServiceTag 
          children={
          <IoPhonePortraitOutline color='#dc3435' size={40} className="border border-[rgb(17,20,24)] shadow-lg p-4 rounded-lg bg-[#111418] w-[70px] h-[70px]" />
          }
          service='Responsive Design and Cross-Browser Compatibility'
        />
        <ServiceTag 
          children={
          <IoPeopleOutline color='#dc3435' size={40} className="border border-[rgb(17,20,24)] shadow-lg p-4 rounded-lg bg-[#111418] w-[70px] h-[70px]" />
          }
          service='User Interaction and Experience'
        />
        <ServiceTag
        children={
          <IoTrendingUpSharp color='#dc3435' size={40} className="border border-[rgb(17,20,24)] shadow-lg p-4 rounded-lg bg-[#111418] w-[70px] h-[70px]" />
          }
          service='Performance Optimization'
         />
      </section>
    </section>
  )
}