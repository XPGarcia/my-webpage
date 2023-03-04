import { useTranslation } from '@/app/i18n';
import { ProjectService } from '@/domain/services/project.service';
import TitleWithLabelInBG from '@/app/[lng]/components/TitleWithLabelInBG';
import PortfolioGridItem from './components/PortfolioGridItem';

interface Props {
  params: { lng: string };
}

export default async function Portfolio({ params: { lng } }: Props) {
  const { t: translation } = await useTranslation(lng, ['portfolio']);

  const data = ProjectService.list(lng);

  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title={translation('my_portfolio')} labelInBG={translation('works')} />
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
