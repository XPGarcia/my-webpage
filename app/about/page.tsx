import Separator from '../../components/Separator';
import TitleWithLabelInBG from '../../components/TitleWithLabelInBG';
import ExperienceList from './components/ExperienceList';
import PersonalInfo from './components/PersonalInfo';
import SkillsGrid from './components/SkillsGrid';
import Statistics from './components/Statistics';

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
          <SkillsGrid />
        </div>

        <Separator />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            experience & education
          </h3>
          <ExperienceList />
        </div>
      </div>
    </div>
  );
}
