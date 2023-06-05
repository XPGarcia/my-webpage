import { useProject } from '@/app/hooks/useProject';
import ProjectPageTemplate from '../components/ProjectPageTemplate';

type Params = {
  params: {
    code: string;
  };
};

export default async function ProjectDescription({ params: { code } }: Params) {
  const project = await useProject({ code });

  return <ProjectPageTemplate project={project} />;
}
