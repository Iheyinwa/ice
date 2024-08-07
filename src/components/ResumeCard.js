export default function ResumeCard({role, course, description, range }){
  return(
    <div className="bg-[#111418] border-[#111418] rounded-lg p-[20px] mt-4">
      <p className="rounded bg-[#dc3545] text-white w-fit px-2 my-4">{range}</p>
      <p className="my-4">{course}</p>
      <p className="text-[#dc3545] my-4">{role}</p>
      <p className="text-[#909294]">{description}</p>
    </div>
  )
}