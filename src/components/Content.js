import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";
import Portfolio from "../Pages/Portfolio";
import Resume from "../Pages/Resume";
import Services from "../Pages/Services";

export default function Content(){
  return(
   <div>
    <Header />
    <About />
    <Services />
    <Resume />
    <Portfolio />
    <Contact />
    <Footer />
   </div>
  )
}