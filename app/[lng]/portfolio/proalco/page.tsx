import { useTranslation } from '@/app/i18n';
import { ProjectService } from '@/domain/services/project.service';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

interface Props {
  params: { lng: string };
}

export default async function Proalco({ params: { lng } }: Props) {
  const { t: translation } = await useTranslation(lng, ['portfolio']);

  const proalco = ProjectService.getOne('proalco', lng);

  return <ProjectPageTemplate project={proalco} translation={translation} />;
}
