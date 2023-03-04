import { useTranslation } from '@/app/i18n';
import { skills } from '@/global/skills';
import Separator from '@/app/[lng]/components/Separator';
import TitleWithLabelInBG from '@/app/[lng]/components/TitleWithLabelInBG';
import ExperienceList from './components/ExperienceList';
import PersonalInfo from './components/PersonalInfo';
import SkillsGrid from './components/SkillsGrid';
import Statistics from './components/Statistics';

export default async function About({ params: { lng } }: { params: { lng: string } }) {
  const { t: translation } = await useTranslation(lng, ['about']);

  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG
        title={translation('about_title')}
        labelInBG={translation('about_title_label')}
      />
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <PersonalInfo classes='lg:w-1/2 px-4' lng={lng} translation={translation} />
          <Statistics classes='lg:w-1/2' translation={translation} />
        </div>

        <Separator />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            {translation('my_skills')}
          </h3>
          <SkillsGrid skills={Object.values(skills)} />
        </div>

        <Separator />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            {translation('exp&education')}
          </h3>
          <ExperienceList lng={lng} />
        </div>
      </div>
    </div>
  );
}
