import { experienceList } from '@/global/experienceList';
import ExperienceListItem from './ExperienceListItem';

export default function ExperienceList() {
  const data = experienceList;

  const numberOfItemsPerColumn = Math.ceil(data.length / 2);

  const numberOfBlockList = Math.ceil(data.length / numberOfItemsPerColumn);

  const blocksList = [];

  for (let i = 0; i < numberOfBlockList; i++) {
    const indexFrom = i * numberOfItemsPerColumn;
    const indexTo =
      i * numberOfItemsPerColumn + numberOfItemsPerColumn < data.length
        ? i + numberOfItemsPerColumn
        : data.length;
    blocksList.push(
      <div className='w-full lg:w-1/2'>
        <ul>
          {data.slice(indexFrom, indexTo).map((experience) => (
            <ExperienceListItem key={experience.companyName} experience={experience} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row px-4'>{blocksList.map((component) => component)}</div>
  );
}
