import { useTranslation } from '@/app/i18n';
import { ProjectService } from '@/domain/services/project.service';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

interface Props {
  params: { lng: string };
}

export default async function PrometeoShop({ params: { lng } }: Props) {
  const { t: translation } = await useTranslation(lng, ['portfolio']);

  const prometeoShop = ProjectService.getOne('prometeoShop', lng);

  return <ProjectPageTemplate project={prometeoShop} translation={translation} />;
}
