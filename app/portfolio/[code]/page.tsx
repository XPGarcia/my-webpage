import { redirect } from 'next/navigation';
import { useProject } from '@/app/hooks/useProject';
import ProjectPageTemplate from '../components/ProjectPageTemplate';
import { Project } from '@/domain/entities';

type Params = {
  params: {
    code: string;
  };
};

export default async function ProjectDescription({ params: { code } }: Params) {
  let project: Project;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    project = await useProject({ code });
  } catch (e) {
    redirect('/portfolio');
  }

  return <ProjectPageTemplate project={project} />;
}
