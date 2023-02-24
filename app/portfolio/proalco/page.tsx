import { projects } from '@/global/projects';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

export default function Proalco() {
  const proalco = projects.proalco;

  return <ProjectPageTemplate project={proalco} />;
}
