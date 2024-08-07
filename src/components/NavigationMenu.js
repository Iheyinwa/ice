import AnchorLink from "react-anchor-link-smooth-scroll";
import Navigation from "./Navigation";

export default function NavigationMenu({onclick}){
  return (
    <ul id="card" className="text-white h-screen flex flex-col justify-center items-center">
      <AnchorLink offset={() => 0} href="#home" onClick={onclick}>
        <Navigation text="Home" />
      </AnchorLink>
      <AnchorLink offset={() => 90} href="#about" onClick={onclick}>
        <Navigation text="About" />
      </AnchorLink>
      <AnchorLink offset="90" href="#resume" onClick={onclick}>
        <Navigation text="Resume" />
      </AnchorLink>
      <AnchorLink offset={() => 90} href="#portfolio" onClick={onclick}>
        <Navigation text="Portfolio" />
      </AnchorLink>
      <AnchorLink offset={() => 90} href="#contact" onClick={onclick}>
        <Navigation text="Contact" />
      </AnchorLink>
    </ul>
  );
}