import NavigationText from "../components/NavigationText";
import work from '../img/ABCD.png' 
import ABCD from '../img/ABCD.png' 
import work2 from '../img/cactus.png'
import cactus from '../img/cactus.png'
import anonime from '../img/anonime.png'

export default function Portfolio(){
  return (
    <section className="bg-[#343A40] p-4" id="portfolio">
      <NavigationText text="PORTFOLIO" title="My Work" />

      <div className="lg:ml-[20%] border border-red-700">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] justify-around pb-12">
          <div className="border border-[#343a40] rounded-lg h-[300px]">
            <img
              src={work2}
              alt="Anonime"
              className="border border-[#343a40] rounded-lg h-full object-cover"
            />
          </div>

          <div className="border border-[#343a40] rounded-lg w-full h-[300px]">
            <img
              src={work}
              alt="Rhinospine"
              className="border border-[#343a40] rounded-lg w-full h-full object-cover"
            />
          </div>

          <div className="border border-[#343a40] rounded-lg w-full h-[300px] md:col-span-2 lg:col-span-1">
            <img
              src={anonime}
              alt="anonime"
              className="border border-[#343a40] rounded-lg object-cover w-full h-full"
            />
          </div>

          <div className="border border-[#343a40] rounded-lg w-full h-[300px] lg:col-span-2">
            <img
              src={cactus}
              alt="Cactus"
              className="border border-[#343a40] rounded-lg lg:object-contain  w-full h-full"
            />
          </div>

          <div className="border border-[#343a40] rounded-lg w-full h-[300px]">
            <img
              src={ABCD}
              alt="A.B.C.D"
              className="border border-[#343a40] rounded-lg w-full h-full object-fill"
            />
          </div>
        </section>
      </div>
    </section>
  );
}