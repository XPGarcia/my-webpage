import { calculateMonthsWorked, fromMonthsToYears } from '@/src/utils';
import { StatisticsGridItem } from './statistics-grid-item';
import { Certification, Experience, Project } from '@/src/types';

interface Props {
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  classes: string;
}

export const StatisticsGrid = ({ experiences, projects, certifications, classes }: Props) => {
  const monthsWorked = experiences
    .map((exp) => calculateMonthsWorked(exp.dateStart, exp.dateEnd ?? new Date()))
    .reduce((acc, curr) => acc + curr, 0);
  const yearsOfExperience = fromMonthsToYears(monthsWorked);
  const experienceWithPlus = monthsWorked % 12 > 0;

  const completedProjects = projects.length;
  const certificationsCount = certifications.length;

  const clients = new Set(
    projects.map((project) => project.client).filter((client) => Boolean(client))
  );

  return (
    <div className={`${classes} grid grid-cols-2 mt-10`}>
      <StatisticsGridItem
        number={yearsOfExperience}
        plus={experienceWithPlus}
        label='year of experience'
      />
      <StatisticsGridItem number={completedProjects} label='completed projects' />
      <StatisticsGridItem number={clients.size} label='happy customers' />
      <StatisticsGridItem number={certificationsCount} label='certification' />
    </div>
  );
};
