import Button from "../components/Button";
import NavigationText from "../components/NavigationText";
import ResumeCard from "../components/ResumeCard";

export default function Resume(){
  return(
    <section>
      <NavigationText
      text='SUMMARY'
      title='Resume' />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-12 my-12 text-white">
        <div>
          <h3 className="font-bold text-2xl">My Education</h3>
          <ResumeCard
          course='Computer Engineering'
          role='Enugu State University of Science and Technology'
          description='Lisque persius interesset his et, 
          in quot quidam persequeris vim, ad mea essent possim iriure.' />
          <ResumeCard
          course='Computer Engineering'
          role='Enugu State University of Science and Technology'
          description='Lisque persius interesset his et, 
          in quot quidam persequeris vim, ad mea essent possim iriure.' />
        </div>
        <div>
          <h3 className="font-bold text-2xl">My Experience</h3>
          <ResumeCard
          course='Computer Engineering'
          role='Enugu State University of Science and Technology'
          description='Lisque persius interesset his et, 
          in quot quidam persequeris vim, ad mea essent possim iriure.' />
          <ResumeCard
          course='Computer Engineering'
          role='Enugu State University of Science and Technology'
          description='Lisque persius interesset his et, 
          in quot quidam persequeris vim, ad mea essent possim iriure.' />
        </div>
      </section>
      <section className="m-12">
        <h3 className="font-bold text-2xl text-white">My Skills</h3>
        <Button text='Download CV' />
      </section>
    </section>
  )
}