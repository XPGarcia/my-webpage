import { ExperienceService } from '@/domain/services/experience.service';
import ExperienceListItem from './ExperienceListItem';

interface Props {
  lng: string;
}

export default function ExperienceList({ lng }: Props) {
  const data = ExperienceService.list(lng);

  const numberOfBlockList = Math.ceil(data.length / 3);

  const blocksList = [];

  for (let i = 0; i < numberOfBlockList; i++) {
    blocksList.push(
      <div className='w-full lg:w-1/2'>
        <ul>
          {data.slice(i * 3, i * 3 + 3 < data.length ? i + 3 : data.length).map((experience) => (
            <ExperienceListItem
              key={experience.companyName}
              role={experience.role}
              companyName={experience.companyName}
              dateRange={experience.dateRange}
              description={experience.description}
            />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row px-4'>{blocksList.map((component) => component)}</div>
  );
}
