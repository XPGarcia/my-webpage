import { Project } from '@/src/types';
import Link from 'next/link';

interface Props {
  project: Project;
}

export const ProjectDescription = ({ project }: Props) => {
  return (
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
            <span className='font-semibold text-red-500 underline'>{project.externalUrl}</span>
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
  );
};
