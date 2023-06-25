
export default function NavigationText({text, title}){
  return(
    <div className="relative flex text-center my-12 items-center">
      <h3 className="font-poppins uppercase text-[120px] font-bold text-[#2c3135] w-full opacity-100 tracking-wide">{text}</h3>
      <section className="absolute w-full mx-auto self-center">
        <h3 className="text-5xl font-bold text-white w-full">{title}</h3>
        <hr className="border-2 border-[#dc3545] w-20 mx-auto mt-4"/>
      </section>
    </div>
  )
}