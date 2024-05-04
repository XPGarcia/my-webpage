import { CertificationListItem } from './certification-list-item';
import { Certification } from '@/src/types';

interface Props {
  certifications: Certification[];
}

export const CertificationsList = ({ certifications }: Props) => {
  const sortedCertifications = certifications.sort((a, b) => {
    const aDate = a.date ?? new Date();
    const bDate = b.date ?? new Date();
    return bDate.getTime() - aDate.getTime();
  });

  const numberOfBlockList = Math.ceil(certifications.length / 3);

  const blocksList = [];

  for (let i = 0; i < numberOfBlockList; i++) {
    blocksList.push(
      <div className='w-full lg:w-1/2'>
        <ul>
          {sortedCertifications
            .slice(i * 3, i * 3 + 3 < certifications.length ? i + 3 : certifications.length)
            .map((certification) => (
              <CertificationListItem key={certification.name} certification={certification} />
            ))}
        </ul>
      </div>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row px-4'>{blocksList.map((component) => component)}</div>
  );
};
