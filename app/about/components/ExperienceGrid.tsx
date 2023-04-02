import { experienceList } from '@/global/experienceList';
import ExperienceListItem from './ExperienceListItem';

export default function ExperienceGrid() {
  const data = experienceList;

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 px-4'>
      {data.map((experience) => (
        <ExperienceListItem key={experience.companyName} experience={experience} />
      ))}
    </div>
  );
}
