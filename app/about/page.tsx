import { fetchCertifications, fetchExperiences, fetchProjects, fetchSkills } from '@/src/api';
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

export async function generateMetadata(): Promise<Metadata> {
  const skills = await fetchSkills({ onlyPrimaries: true });

  const skillsList = skills.map((skill) => skill.name).join(', ');

  return {
    title: 'Xavier García - About me',
    description: `Full-Stack developer with technical web development skills: ${skillsList}.`
  };
}

export default async function About() {
  const [experiences, certifications, skills, projects] = await Promise.all([
    fetchExperiences(),
    fetchCertifications(),
    fetchSkills({ onlyPrimaries: true }),
    fetchProjects()
  ]);

  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title='about me' labelInBG='resume' />
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <PersonalInfo classes='lg:w-1/2 px-4' />
          <StatisticsGrid
            experiences={experiences}
            projects={projects}
            certifications={certifications}
            classes='lg:w-1/2'
          />
          ()
        </div>

        <Divider />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            my skills
          </h3>
          <SkillsGrid skills={skills} />
        </div>

        <Divider />

        <div className='flex flex-col'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            experience
          </h3>
          <ExperienceGrid experiences={experiences} />
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
