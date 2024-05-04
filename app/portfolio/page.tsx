import { projects } from '@/global/projects';
import { Metadata } from 'next';
import { TitleWithLabelInBG } from '@/src/components';
import { PortfolioGrid } from '@/src/components/portfolio/portfolio-grid/portfolio-grid';

export const metadata: Metadata = {
  title: 'Xavier García - Portfolio',
  description: 'Projects made as a Full-Stack developer'
};

export default function Portfolio() {
  const data = Object.values(projects);

  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title='my portfolio' labelInBG='works' />
      <div className='container xl:max-w-7xl mx-auto pb-8'>
        <PortfolioGrid projects={data} />
      </div>
    </div>
  );
}
