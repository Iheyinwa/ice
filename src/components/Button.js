export default function Button({text, type}){
  return(
    <button className="border-2 border-[#dc3545] px-12 py-4 rounded-full text-[#dc3545] md:text-lg transition-all hover:text-white hover:bg-[#dc3545]" type={type}>
      {text}
    </button>
  )
}