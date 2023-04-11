import { Experience } from '@/domain/entities';
import ExperienceListItem from './ExperienceListItem';

interface Props {
  experienceList: Experience[];
}

export default function ExperienceGrid({ experienceList }: Props) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 px-4'>
      {experienceList.map((experience, index) => (
        <ExperienceListItem key={index} experience={experience} />
      ))}
    </div>
  );
}
