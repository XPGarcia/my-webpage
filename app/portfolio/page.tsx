import TitleWithLabelInBG from '@/app/components/TitleWithLabelInBG';
import PortfolioGridItem from './components/PortfolioGridItem';
import { useProjects } from '../hooks/useProjects';

export default async function Portfolio() {
  const projects = await useProjects();

  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title='my portfolio' labelInBG='works' />
      <div className='container xl:max-w-7xl mx-auto pb-8'>
        <div className='grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4'>
          {projects.map((project) => (
            <PortfolioGridItem key={project.code} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
