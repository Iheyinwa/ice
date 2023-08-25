import Button from "../components/Button";
import {CSS, HTML5, JS, NEXTJS, REACTJS, TAILWINDCSS }from "../components/Icons";
import NavigationText from "../components/NavigationText";
import ResumeCard from "../components/ResumeCard";
import SkillsCard from "../components/SkillsCard";

export default function Resume(){
  return(
    <section id="resume">
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
        <h3 className="font-bold text-2xl text-white mb-4">My Skills</h3>
      <div className="flex flex-wrap justify-between gap-2 mb-4">
      <SkillsCard
      children={
        <HTML5 />
      }
      text='HTML5' />

      <SkillsCard
      children={
        <CSS/>
      }
      text='CSS3' />

      <SkillsCard
      children={
        <JS />
      }
      text='JavaScript' />

      <SkillsCard
      children={
        <REACTJS />
      }
      text='React JS' />

      <SkillsCard
      children={
        <TAILWINDCSS />
      }
      text='Tailwind CSS' />

      <SkillsCard
      children={
       <NEXTJS />
      }
      text='Next JS' />

      </div>
        <Button text='Download CV' />
      </section>
    </section>
  )
}