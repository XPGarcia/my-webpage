import { Metadata } from 'next';
import { TitleWithLabelInBG } from '@/src/components';
import { PortfolioGrid } from '@/src/components/portfolio/portfolio-grid/portfolio-grid';
import { fetchProjects } from '@/src/api';

export const metadata: Metadata = {
  title: 'Xavier García - Portfolio',
  description: 'Projects made as a Full-Stack developer'
};

export default async function Portfolio() {
  const projects = await fetchProjects({ withOrder: true });

  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title='my portfolio' labelInBG='works' />
      <div className='container xl:max-w-7xl mx-auto pb-12'>
        <PortfolioGrid projects={projects} />
      </div>
    </div>
  );
}
