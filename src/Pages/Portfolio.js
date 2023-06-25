import NavigationText from "../components/NavigationText";
import work from '../img/ice-hero.jpg' 
import work2 from '../img/ice-image.jpg'

export default function Portfolio(){
  return(
     <section className='bg-[#343A40]'>
      <NavigationText
      text='PORTFOLIO'
      title='My Work' />
      <section className="grid grid-cols-3 grid-rows-2 gap-3 justify-between mx-12 pb-12">
        <img src={work} alt='Anonime' className="border border-[#343a40] rounded-lg " />
      
        <img src={work2} alt='Rhinospine' className="border border-[#343a40] rounded-lg row-span-2" />
      
      
        <img src={work} alt='Ice' className="border border-[#343a40] rounded-lg" />
      
        {/* <div>
          <img src={work2} alt='ABCD' className="border border-[#343a40] rounded-lg" />
        </div> */}
        <img src={work} alt='Cactus' className="border border-[#343a40] rounded-lg" />
        
        <img src={work} alt='Black and White' className="border border-[#343a40] rounded-lg" />

      </section>
    </section>
  )
}