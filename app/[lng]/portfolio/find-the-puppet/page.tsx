import { useTranslation } from '@/app/i18n';
import { ProjectService } from '@/domain/services/project.service';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

interface Props {
  params: { lng: string };
}

export default async function FindThePuppet({ params: { lng } }: Props) {
  const { t: translation } = await useTranslation(lng, ['portfolio']);

  const findThePuppet = ProjectService.getOne('findThePuppet', lng);

  return <ProjectPageTemplate project={findThePuppet} translation={translation} />;
}
