import { projects } from '@/global/projects';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

export default function PrometeoShop() {
  const prometeoShop = projects.prometeoShop;

  return <ProjectPageTemplate project={prometeoShop} />;
}
