import { ProjectKey, projects } from '@/global/projects';
import ProjectPageTemplate from '../components/ProjectPageTemplate';
import type { Metadata } from 'next';

interface Props {
  params: { slug: ProjectKey };
}

export function generateMetadata({ params }: Props): Metadata {
  const project = Object.values(projects).find((project) => project.slug === params.slug);
  if (!project) {
    return {
      title: 'Xavier García - Portfolio',
      description: 'Projects made as a Full-Stack developer'
    };
  }

  return {
    title: `Xavier García - ${project.projectName}`,
    description: `Project ${
      project.projectName
    } made as a Full-Stack developer with skills: ${project.skills
      .map((skill) => skill.name)
      .join(', ')}.`,
    openGraph: {
      images: [project.banner]
    }
  };
}

export default function PortfolioProject({ params }: Props) {
  const project = Object.values(projects).find((project) => project.slug === params.slug);
  if (!project) {
    return <></>;
  }

  return <ProjectPageTemplate project={project} />;
}
