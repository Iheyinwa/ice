
export default function ServiceTag({children, service}){
  return(
    <div className="flex justify-between gap-4 mb-8">
    {children}
      <div className="w-[80%]">
        <h3 className="text-white">{service}</h3>
        <p className="text-[#909294]">Lisque persius interesset his et, 
        in quot quidam persequeris vim, ad mea 
        essent possim iriure.</p>
      </div>
    </div>
  )
}