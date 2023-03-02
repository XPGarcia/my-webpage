import { projects } from '@/global/projects';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

export default function Livet() {
  const livet = projects.livet;

  return <ProjectPageTemplate project={livet} />;
}
