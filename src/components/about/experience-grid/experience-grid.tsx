import { ExperienceListItem } from './experience-list-item';
import { Experience } from '@/src/types';

interface Props {
  experiences: Experience[];
}

export const ExperienceGrid = ({ experiences }: Props) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 px-4'>
      {experiences.map((experience) => (
        <ExperienceListItem key={experience.companyName} experience={experience} />
      ))}
    </div>
  );
};
