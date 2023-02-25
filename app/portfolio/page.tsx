import { projects } from '@/global/projects';
import TitleWithLabelInBG from '../../components/TitleWithLabelInBG';
import PortfolioGridItem from './components/PortfolioGridItem';

export default function Portfolio() {
  const data = Object.values(projects);

  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title='my portfolio' labelInBG='works' />
      <div className='container xl:max-w-7xl mx-auto pb-8'>
        <div className='grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4'>
          {data.map((project) => (
            <PortfolioGridItem
              key={project.projectName}
              imagePath={project.banner}
              projectName={project.projectName}
              path={project.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
