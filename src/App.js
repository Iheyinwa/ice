import Content from "./components/Content";
import SideBar from "./components/Sidebar";
import './App.css'

function App() {
  return (
    <div className="flex justify-between font-poppins">
      <section className="w-screen lg:h-full lg:w-1/5 fixed z-10 font-poppins lg:flex lg:justify-center lg:items-center">
        <SideBar />
      </section>
     
        <Content />
      
    </div>
  );
}

export default App;
