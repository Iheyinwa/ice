import Button from "../components/Button";
import NavigationText from "../components/NavigationText";
import ServiceTag from "../components/ServiceTag";
import { IoDesktopOutline, IoPeopleOutline, IoPhonePortraitOutline, IoTrendingUpSharp } from "react-icons/io5";

export default function About(){
  return (
    <section className="bg-[#343A40] p-4" id="about">
      <NavigationText text="ABOUT ME" title="Know Me More" />

      <div className="lg:ml-[20%]">
        <section className="lg:flex justify-between text-white mb-8 items-start">
          <div className="lg:w-[60%] text-center lg:text-justify">
            <h3 className="font-semibold my-4">
              I'm <span className="text-[#dc3135]">Aruogu Chidiebube</span>, a
              Web Developer
            </h3>
            <p className="text-[#909294]">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-[#909294]">
              Delivering work within time and budget which meets client’s
              requirements is our motto.
            </p>
          </div>
          <ul className="lg:w-[50%] my-20 lg:my-0 md:mx-12">
            <li className="border-b py-4">
              <b>Name: </b>Aruogu Chidiebube
            </li>
            <li className="border-b py-4">
              <b>Email: </b>
              <span className="text-[#dc3135]">aruoguchidiebube@gmail.com</span>
            </li>
            <li className="border-b-[0.5px] py-4 mb-8">
              <b>From: </b>Nigeria, Africa
            </li>
            <a href="./docs/ARUOGU-CHIDIEBUBE-RESUME.pdf" download>
              <Button text="Download CV" />
            </a>
          </ul>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-between pb-12">
          <ServiceTag
            children={
              <IoDesktopOutline
                color="#dc3435"
                size={40}
                className="border border-[rgb(17,20,24)] shadow-lg p-4 rounded-lg bg-[#111418] w-[70px] h-[70px]"
              />
            }
            service="Web Design Implementation"
          />
          <ServiceTag
            children={
              <IoPhonePortraitOutline
                color="#dc3435"
                size={40}
                className="border border-[rgb(17,20,24)] shadow-lg p-4 rounded-lg bg-[#111418] w-[70px] h-[70px]"
              />
            }
            service="Responsive Design and Cross-Browser Compatibility"
          />
          <ServiceTag
            children={
              <IoPeopleOutline
                color="#dc3435"
                size={40}
                className="border border-[rgb(17,20,24)] shadow-lg p-4 rounded-lg bg-[#111418] w-[70px] h-[70px]"
              />
            }
            service="User Interaction and Experience"
          />
          <ServiceTag
            children={
              <IoTrendingUpSharp
                color="#dc3435"
                size={40}
                className="border border-[rgb(17,20,24)] shadow-lg p-4 rounded-lg bg-[#111418] w-[70px] h-[70px]"
              />
            }
            service="Performance Optimization"
          />
        </section>
      </div>
    </section>
  );
}