export default function Button({text, type}){
  return(
    <button className="mt-2 border-2 border-[#dc3545] px-12 py-4 rounded-full text-[#dc3545] text-lg transition-all hover:text-white hover:bg-[#dc3545]" type={type}>
      {text}
    </button>
  )
}