import type { Metadata } from 'next';
import {
  TitleWithLabelInBG,
  ProjectDescription,
  Divider,
  RoundedButtonWithIcon,
  SkillsGrid
} from '@/src/components';
import Image from 'next/image';
import { findProjectBySlug } from '@/src/api';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await findProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Xavier García - Portfolio',
      description: 'Projects made as a Full-Stack developer'
    };
  }

  const skills = project.skills ?? [];
  const skillsList = skills.map((skill) => skill.name).join(', ');

  return {
    title: `Xavier García - ${project.name}`,
    description: `Project ${project.name} made as a Full-Stack developer with skills: ${skillsList}.`,
    openGraph: {
      images: [project.bannerUrl]
    }
  };
}

export default async function PortfolioProject({ params }: Props) {
  const project = await findProjectBySlug(params.slug);

  if (!project || !project.skills) {
    return <></>;
  }

  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title={project.name} labelInBG='Project' />
      <div className='flex flex-col container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='w-full'>
            <Image
              src={project.campaignUrl}
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
