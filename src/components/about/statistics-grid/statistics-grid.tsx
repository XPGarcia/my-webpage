import { calculateMonthsWorked, fromMonthsToYears } from '@/src/utils';
import { StatisticsGridItem } from './statistics-grid-item';
import { experienceList } from '@/global/experienceList';

interface Props {
  classes: string;
}

export const StatisticsGrid = ({ classes }: Props) => {
  const monthsWorked = experienceList
    .map((exp) => calculateMonthsWorked(exp.dateRange))
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
