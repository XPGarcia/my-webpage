import StatisticsGridItem from './StatisticsGridItem';

interface Props {
  classes: string;
}

export default function Statistics({ classes }: Props) {
  return (
    <div className={`${classes} grid grid-cols-2 mb-4 mt-10`}>
      <StatisticsGridItem number={1} label='year of experience' />
      <StatisticsGridItem number={5} label='completed projects' />
      <StatisticsGridItem number={3} label='happy customers' />
      <StatisticsGridItem number={1} label='certification' />
    </div>
  );
}
