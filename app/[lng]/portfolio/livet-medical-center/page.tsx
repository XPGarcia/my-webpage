import { useTranslation } from '@/app/i18n';
import { ProjectService } from '@/domain/services/project.service';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

interface Props {
  params: { lng: string };
}

export default async function Livet({ params: { lng } }: Props) {
  const { t: translation } = await useTranslation(lng, ['portfolio']);

  const livet = ProjectService.getOne('livet', lng);

  return <ProjectPageTemplate project={livet} translation={translation} />;
}
