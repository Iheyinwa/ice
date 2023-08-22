import NavigationText from "../components/NavigationText";
import work from '../img/ice-hero.jpg' 
import work2 from '../img/ice-image.jpg'

export default function Portfolio(){
  return(
    <section className='bg-[#343A40]'>
      <NavigationText
      text='PORTFOLIO'
      title='My Work' />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] justify-around mx-12 pb-12">
      <div className="border border-[#343a40] rounded-lg w-full h-[500px] p-4">
        <img src={work2} alt='Anonime' className="border border-[#343a40] rounded-lg object-cover w-full h-full" />
        </div>
      
        <div className="border border-[#343a40] rounded-lg w-full h-[500px] p-4">
        <img src={work} alt='Rhinospine' height='500px' className="border border-[#343a40] rounded-lg object-cover w-full h-full" />
        </div>
    
        <div className="border border-[#343a40] rounded-lg w-full h-[500px] p-4 lg:col-span-2">
        <img src={work} alt='Ice' className="border border-[#343a40] rounded-lg object-cover w-full h-full " />
        </div>
      
        <div className="border border-[#343a40] rounded-lg w-full h-[500px] p-4">
        <img src={work2} alt='Cactus' className="border border-[#343a40] rounded-lg object-cover w-full h-full " />
        </div>
        
        <div className="border border-[#343a40] rounded-lg w-full h-[500px] p-4">
        <img src={work2} alt='Black and White' className="border border-[#343a40] rounded-lg object-cover w-full h-full" />
        </div>

      </section>
    </section>
  )
}