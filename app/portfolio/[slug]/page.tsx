import { ProjectKey, projects } from '@/global/projects';
import type { Metadata } from 'next';
import {
  TitleWithLabelInBG,
  ProjectDescription,
  Divider,
  SkillsGrid,
  RoundedButtonWithIcon
} from '@/src/components';
import Image from 'next/image';

interface Props {
  params: { slug: ProjectKey };
}

export function generateMetadata({ params }: Props): Metadata {
  const project = Object.values(projects).find((project) => project.slug === params.slug);
  if (!project) {
    return {
      title: 'Xavier García - Portfolio',
      description: 'Projects made as a Full-Stack developer'
    };
  }

  return {
    title: `Xavier García - ${project.projectName}`,
    description: `Project ${
      project.projectName
    } made as a Full-Stack developer with skills: ${project.skills
      .map((skill) => skill.name)
      .join(', ')}.`,
    openGraph: {
      images: [project.banner]
    }
  };
}

export default function PortfolioProject({ params }: Props) {
  const project = Object.values(projects).find((project) => project.slug === params.slug);
  if (!project) {
    return <></>;
  }

  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title={project.projectName} labelInBG='Project' />
      <div className='flex flex-col container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='w-full'>
            <Image
              src={project.campaign}
              alt='campaign'
              width={1280}
              height={720}
              className='object-cover w-full h-full rounded-lg'
              priority
            />
          </div>
          <ProjectDescription project={project} />
        </div>

        <Divider />

        <div className='flex flex-col pb-20'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            Skills
          </h3>
          <SkillsGrid skills={project.skills} />
        </div>

        <div className='flex justify-center items-center pb-20'>
          <RoundedButtonWithIcon
            body='Other projects'
            icon='fa-arrow-right'
            isAnchor
            link='/portfolio'
          />
        </div>
      </div>
    </div>
  );
}
