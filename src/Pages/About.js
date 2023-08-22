import Button from "../components/Button";
import NavigationText from "../components/NavigationText";

export default function About(){
  return(
    <section>
    <NavigationText
    text= 'ABOUT ME'
    title= 'Know Me More' />
    
    <section className="lg:flex justify-between text-white mx-12 mb-8 items-start">
      <div className="lg:w-[60%] text-center lg:text-justify">
        <h3 className="font-semibold my-4">I'm <span className="text-[#dc3135]">Aruogu Chidiebube</span>, a Web Developer</h3>
        <p className="text-[#909294]">I help you build brand for your business at an affordable price. 
        Thousands of clients have procured exceptional results while working 
        with our dedicated team. when an unknown printer took a galley of type 
        and scrambled it to make a type specimen book.</p>
        <p className="text-[#909294]">Delivering work within time and budget which meets client’s requirements is our motto.</p>      
      </div>
      <ul className="lg:w-[50%] my-20 lg:my-0 mx-12">
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
        <Button text='Download CV' />
      </ul>
    </section>
    </section>
  )
}