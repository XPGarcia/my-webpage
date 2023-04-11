import CertificationListItem from './CertificationListItem';
import { Certification } from '@/domain/entities';

interface Props {
  certificationList: Certification[];
}

export default function CertificationsList({ certificationList }: Props) {
  const numberOfBlockList = Math.ceil(certificationList.length / 3);

  const blocksList = [];

  for (let i = 0; i < numberOfBlockList; i++) {
    blocksList.push(
      <div className='w-full lg:w-1/2'>
        <ul>
          {certificationList
            .slice(i * 3, i * 3 + 3 < certificationList.length ? i + 3 : certificationList.length)
            .map((certification, index) => (
              <CertificationListItem key={index} certification={certification} />
            ))}
        </ul>
      </div>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row px-4'>{blocksList.map((component) => component)}</div>
  );
}
