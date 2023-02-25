import SkillsGrid from '@/app/about/components/SkillsGrid';
import RoundedButtonWithIcon from '@/components/RoundedButtonWithIcon';
import Separator from '@/components/Separator';
import TitleWithLabelInBG from '@/components/TitleWithLabelInBG';
import { Project } from '@/interfaces/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

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
            />
          </div>
          <div className='flex flex-col pl-2'>
            {project.client && (
              <div className='text-white mb-3'>
                <i className='fa-regular fa-user' />
                <p className='inline pl-3'>
                  Client : <span className='font-semibold capitalize'>{project.client}</span>
                </p>
              </div>
            )}
            {project.externalUrl && (
              <div className='text-white mb-3 overflow-x-scroll sm:overflow-x-auto'>
                <i className='fa-solid fa-arrow-up-right-from-square' />
                <p className='inline pl-3'>Preview : </p>
                <Link href={project.externalUrl} rel='noreferrer' target='_blank'>
                  <span className='font-semibold text-red-500 underline'>
                    {project.externalUrl}
                  </span>
                </Link>
              </div>
            )}
            <p className='text-white'>{project.description}</p>
            <ul className='text-white mt-4 list-disc ml-5'>
              {project.bulletPoints.map((line, index) => (
                <li key={index} className='mb-4 last:mb-0'>
                  {line}
                </li>
              ))}
            </ul>
          </div>
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
