import { calculateMonthsWorked, fromMonthsToYears } from '@/src/utils';
import { StatisticsGridItem } from './statistics-grid-item';
import { Experience } from '@/src/types';

interface Props {
  experiences: Experience[];
  classes: string;
}

export const StatisticsGrid = ({ experiences, classes }: Props) => {
  const monthsWorked = experiences
    .map((exp) => calculateMonthsWorked(exp.dateStart, exp.dateEnd ?? new Date()))
    .reduce((acc, curr) => acc + curr, 0);
  const yearsOfExperience = fromMonthsToYears(monthsWorked);
  const experienceWithPlus = monthsWorked % 12 > 0;

  return (
    <div className={`${classes} grid grid-cols-2 mt-10`}>
      <StatisticsGridItem
        number={yearsOfExperience}
        plus={experienceWithPlus}
        label='year of experience'
      />
      <StatisticsGridItem number={6} label='completed projects' />
      <StatisticsGridItem number={4} label='happy customers' />
      <StatisticsGridItem number={1} label='certification' />
    </div>
  );
};
