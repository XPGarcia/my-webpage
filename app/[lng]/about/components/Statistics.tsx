import StatisticsGridItem from './StatisticsGridItem';

interface Props {
  classes: string;
  translation: (label: string) => string;
}

export default function Statistics({ classes, translation }: Props) {
  return (
    <div className={`${classes} grid grid-cols-2 mt-10`}>
      <StatisticsGridItem number={1} label={translation('experience_time')} />
      <StatisticsGridItem number={5} label={translation('completed_projects')} />
      <StatisticsGridItem number={3} label={translation('happy_customers')} />
      <StatisticsGridItem number={1} label={translation('certifications')} />
    </div>
  );
}
