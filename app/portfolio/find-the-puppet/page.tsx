import { projects } from '@/global/projects';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

export default function FindThePuppet() {
  const findThePuppet = projects.findThePuppet;

  return <ProjectPageTemplate project={findThePuppet} />;
}
