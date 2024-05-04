import { certifications } from '@/global/certifications';
import { experienceList } from '@/global/experienceList';
import { skills } from '@/global/skills';
import {
  CertificationsList,
  Divider,
  ExperienceGrid,
  PersonalInfo,
  SkillsGrid,
  StatisticsGrid,
  TitleWithLabelInBG
} from '@/src/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xavier García - About me',
  description: `Full-Stack developer with technical skills in: ${Object.keys(skills).join(', ')}.`
};

export default function About() {
  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title='about me' labelInBG='resume' />
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <PersonalInfo classes='lg:w-1/2 px-4' />
          <StatisticsGrid classes='lg:w-1/2' />
        </div>

        <Divider />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            my skills
          </h3>
          <SkillsGrid skills={Object.values(skills)} />
        </div>

        <Divider />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            experience
          </h3>
          <ExperienceGrid experiences={experienceList} />
        </div>

        <Divider />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            education & certifications
          </h3>
          <CertificationsList certifications={certifications} />
        </div>
      </div>
    </div>
  );
}
