import { ProjectKey, projects } from '@/global/projects';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

interface Props {
  params: { slug: ProjectKey };
}

export default function PortfolioProject({ params }: Props) {
  const project = projects[params.slug];

  return <ProjectPageTemplate project={project} />;
}
