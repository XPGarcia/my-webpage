import { ExperienceListItem } from './experience-list-item';
import { Experience } from '@/src/types';

interface Props {
  experiences: Experience[];
}

export const ExperienceGrid = ({ experiences }: Props) => {
  const sortedExperiences = experiences.sort((a, b) => {
    const aDateEnd = a.dateEnd ?? new Date();
    const bDateEnd = b.dateEnd ?? new Date();
    return bDateEnd.getTime() - aDateEnd.getTime();
  });

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 px-4'>
      {sortedExperiences.map((experience) => (
        <ExperienceListItem key={experience.companyName} experience={experience} />
      ))}
    </div>
  );
};
