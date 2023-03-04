import RoundedButtonWithIcon from '@/components/RoundedButtonWithIcon';
import Separator from '@/components/Separator';
import TitleWithLabelInBG from '@/components/TitleWithLabelInBG';
import { Project } from '@/domain/entities/projects';
import Image from 'next/image';
import { ReactNode } from 'react';
import SkillsGrid from '../../about/components/SkillsGrid';
import ProjectDescription from './ProjectDescription';

interface Props {
  project: Project;
  children?: ReactNode;
  translation: (label: string) => string;
}

export default function ProjectPageTemplate({ project, children, translation }: Props) {
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
          <ProjectDescription project={project} translation={translation} />
        </div>

        <Separator />

        <div className='flex flex-col pb-20'>
          <h3 className='text-xl md:text-2xl font-semibold text-white sm:text-center uppercase mb-10 px-4 sm:px-0'>
            {translation('skills')}
          </h3>
          <SkillsGrid skills={project.skills} />
        </div>

        {children}

        <div className='flex justify-center items-center pb-20'>
          <RoundedButtonWithIcon
            body={translation('other_projects')}
            icon='fa-arrow-right'
            isAnchor
            link='/portfolio'
          />
        </div>
      </div>
    </div>
  );
}
