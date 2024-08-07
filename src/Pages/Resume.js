import NavigationText from "../components/NavigationText";
import cactus from "../img/cactus.png";
import anonime from "../img/anonime.png";

export default function Resume() {
  return (
    <section id="portfolio">
      <NavigationText text="PORTFOLIO" title="My Work" />

      <div className="lg:ml-[20%] mx-4">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-[10px] justify-around pb-12 items-center h-full">
          <div className="bg-[#111418] border-[#111418] rounded-lg p-[20px] h-full">
            <p className="rounded bg-[#dc3545] text-white w-fit px-2 my-4">
              2000-2004
            </p>
            <p className="my-4">Cactus</p>
            <p className="text-[#dc3545] my-4">Cactus is an Insurance company that helps Nigerians to save for the rainy days.</p>
            <p className="text-[#909294]">Stack: REACTJS || TAILWINDCSS</p>
          </div>
        <div className="border border-[#343a40] rounded-lg w-full h-full">
          <img
            src={cactus}
            alt="Cactus"
            className="border border-[#343a40] rounded-lg w-full h-full object-contain"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-[10px] justify-around pb-12 ">
        <div className="border border-[#343a40] rounded-lg w-full h-fit">
          <img
            src={anonime}
            alt="anonime"
            className="border border-[#343a40] rounded-lg object-contain w-full h-full"
          />
        </div>
        <section>
          <p>Another text for content purposes</p>
        </section>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-[10px] justify-around pb-12">
        <section>
          <p>Another text for content purposes</p>
        </section>
        <div className="border border-[#343a40] rounded-lg w-full h-fit">
          <img
            src={cactus}
            alt="cactus"
            className="border border-[#343a40] rounded-lg object-contain w-full h-fit"
          />
        </div>
      </section>
      </div>
    </section>
  );
}
