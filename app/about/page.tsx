import { skills } from '@/global/skills';
import Separator from '@/app/components/Separator';
import TitleWithLabelInBG from '@/app/components/TitleWithLabelInBG';
import PersonalInfo from './components/PersonalInfo';
import SkillsGrid from './components/SkillsGrid';
import Statistics from './components/Statistics';
import CertificationsList from './components/CertificationsList';
import ExperienceGrid from './components/ExperienceGrid';

export default function About() {
  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title='about me' labelInBG='resume' />
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <PersonalInfo classes='lg:w-1/2 px-4' />
          <Statistics classes='lg:w-1/2' />
        </div>

        <Separator />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            my skills
          </h3>
          <SkillsGrid skills={Object.values(skills)} />
        </div>

        <Separator />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            experience & education
          </h3>
          <ExperienceGrid />
        </div>

        <Separator />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            certifications
          </h3>
          <CertificationsList />
        </div>
      </div>
    </div>
  );
}
