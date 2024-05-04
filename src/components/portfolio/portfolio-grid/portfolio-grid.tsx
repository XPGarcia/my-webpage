import { Project } from '@/src/types';
import { PortfolioGridItem } from './portfolio-grid-item';

interface Props {
  projects: Project[];
}

export const PortfolioGrid = ({ projects }: Props) => {
  return (
    <div className='grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4'>
      {projects.map((project) => (
        <PortfolioGridItem key={project.projectName} project={project} />
      ))}
    </div>
  );
};
