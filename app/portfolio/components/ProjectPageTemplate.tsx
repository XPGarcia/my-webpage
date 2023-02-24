import TitleWithLabelInBG from '@/components/TitleWithLabelInBG';
import { Project } from '@/interfaces/projects';

interface Props {
  project: Project;
}

export default function ProjectPageTemplate({ project }: Props) {
  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title={project.projectName} labelInBG='Project' />
    </div>
  );
}
