export default function SkillsCard({children, text}){
  return(
    <div className="border border-[rgb(17,20,24)] shadow-lg p-4 rounded-lg bg-[#111418]">
      {children}
      <p className="text-white text-center">{text}</p>
    </div>
  )
}