import SkillsGrid from '@/app/about/components/SkillsGrid';
import RoundedButtonWithIcon from '@/app/components/RoundedButtonWithIcon';
import Separator from '@/app/components/Separator';
import TitleWithLabelInBG from '@/app/components/TitleWithLabelInBG';
import { Project } from '@/domain/entities/projects';
import Image from 'next/image';
import { ReactNode } from 'react';
import ProjectDescription from './ProjectDescription';

interface Props {
  project: Project;
  children?: ReactNode;
}

export default function ProjectPageTemplate({ project, children }: Props) {
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

        <Separator />

        <div className='flex flex-col pb-20'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            Skills
          </h3>
          <SkillsGrid skills={project.skills} />
        </div>

        {children}

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
