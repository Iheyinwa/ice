import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";
import Resume from "../Pages/Resume";

export default function Content(){
  return (
    <div>
      <Header />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}