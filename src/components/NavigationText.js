
export default function NavigationText({text, title}){
  return(
    <div className="flex justify-center items-center lg:ml-[20%]">
    <div className="mx-4 md:mx-12 relative flex flex-col justify-center items-center">
      <h3 className="font-poppins uppercase text-[50px] md:text-[120px] px-4 font-bold text-[#2c3135] w-fit opacity-100 tracking-wide relative flex flex-col justify-center items-center">{text}</h3>
      <section className="absolute mx-auto flex flex-col justify-center items-center">
        <h3 className="text-3xl md:text-5xl font-bold text-white w-fit flex flex-col justify-center items-center overflow-y-hidden">{title}</h3>
        <hr className="border-2 border-[#dc3545] w-20 mx-auto"/>
      </section>
    </div>
    </div>
  )
}