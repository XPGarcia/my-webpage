import Separator from '@/app/components/Separator';
import TitleWithLabelInBG from '@/app/components/TitleWithLabelInBG';
import PersonalInfo from './components/PersonalInfo';
import SkillsGrid from './components/SkillsGrid';
import Statistics from './components/Statistics';
import CertificationsList from './components/CertificationsList';
import ExperienceGrid from './components/ExperienceGrid';
import {
  useCertificationList,
  useEducationList,
  useExperienceList,
  useSkills,
  useUser
} from '../hooks';

export default async function About() {
  const userPromise = useUser({ withLanguages: true });
  const skillsPromise = useSkills();
  const experienceListPromise = useExperienceList();
  const educationListPromise = useEducationList();
  const certificationListPromise = useCertificationList();

  const [user, skills, experienceList, educationList, certificationList] = await Promise.all([
    userPromise,
    skillsPromise,
    experienceListPromise,
    educationListPromise,
    certificationListPromise
  ]);

  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title='about me' labelInBG='resume' />
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <PersonalInfo user={user} classes='lg:w-1/2 px-4' />
          <Statistics classes='lg:w-1/2' />
        </div>

        <Separator />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            my skills
          </h3>
          <SkillsGrid skills={skills} />
        </div>

        <Separator />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            experience & education
          </h3>
          <ExperienceGrid experienceList={[...educationList, ...experienceList]} />
        </div>

        <Separator />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            certifications
          </h3>
          <CertificationsList certificationList={certificationList} />
        </div>
      </div>
    </div>
  );
}
