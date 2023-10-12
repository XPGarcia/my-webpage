import { projects } from '@/global/projects';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

export default function RonSanMiguel() {
  const ronSanMiguel = projects.ronSanMiguel;

  return <ProjectPageTemplate project={ronSanMiguel} />;
}
