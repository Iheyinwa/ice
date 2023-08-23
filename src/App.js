import Content from "./components/Content";
import SideBar from "./components/Sidebar";
import './App.css'

function App() {
  return (
    <div className="flex justify-between font-poppins">
      <section className="w-screen lg:h-full lg:w-1/5 bg-[#111418] fixed z-10 font-poppins">
        <SideBar />
      </section>
      <section className="w-screen lg:ml-[20%] lg:w-4/5">
        <Content />
      </section>
    </div>
  );
}

export default App;
