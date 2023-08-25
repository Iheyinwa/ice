import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarker, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";
import NavigationText from "../components/NavigationText";
import Button from "../components/Button";

export default function Contact(){
  return(
    <section id='contact'>
      <NavigationText
      text='CONTACT'
      title='Get In Touch' />
      <section className="md:flex md:justify-between md:gap-4 mx-12 md:items-start my-8">
        <div className="md:w-[65%] w-full md:order-last">
          <h2 className="font-semibold text-lg text-white mb-4">SEND US A NOTE</h2>
          <form className="font-poppins">
            <div className="flex justify-between mb-4 gap-4">
              <div className="w-[50%]">
                <input 
                placeholder="Name" 
                type="text"
                id='name'
                name='client_name'
                className="p-4 bg-[#232a31] border border-[#232a31] rounded-lg w-full " />
              </div>
              <div className="w-[50%]">
                <input 
                placeholder="Email" 
                type="email"
                id="email"
                email='client_email'
                className="p-4 bg-[#232a31] border border-[#232a31] rounded-lg w-full "/>
              </div>
            </div>
            <textarea 
            placeholder="Tell me more about your needs..." 
            id="msg"
            name="client_message"
            className="p-4 bg-[#232a31] border border-[#232a31] rounded-lg w-full" rows={5} />
          </form>
          <div className="my-8 text-center">
          <Button type= 'submit' text='Send Message' />
          </div>
        </div>

        <div className="md:w-[40%] text-[#909294] flex flex-col justify-center items-center  md:text-justify">
          <h2 className="font-semibold text-lg text-white font-poppins">ADDRESS</h2>
          <div className="flex items-center gap-2 mt-4">
          <FaMapMarker color="#dc3435" size={20} />
          <address className="font-poppins">Enugu, Nigeria</address>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <FaPhone color="#dc3435" size={20} /> 
            <p className="font-poppins">09072931688</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <FaWhatsapp color="#dc3435" size={20} /> 
            <p className="font-poppins">08171681400</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <FaEnvelope color="#dc3435" size={20} /> 
            <p className="font-poppins">aruoguchidiebube@gmail.com</p>
          </div>
          <h2 className="font-semibold text-lg text-white mt-28 font-poppins">FOLLOW ME</h2>
          <ul className="flex gap-4 list-none mt-4 mx-[40%] md:mx-0">
            <li>
              <a href="https://github.com/Iheyinwa">
                <FaGithub color="#dc3435" size={20} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/aruogu-chidiebube">
                <FaLinkedin color="#dc3435" size={20} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/abubay28">
                <FaTwitter color="#dc3435" size={20} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/Iheyinwa_28">
                <FaInstagram color="#dc3435" size={20} />
              </a>
            </li>
          </ul>
        </div>

        
      </section>
    </section>
  )
}