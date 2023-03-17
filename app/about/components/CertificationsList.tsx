import { certifications } from '@/global/certifications';
import CertificationListItem from './CertificationListItem';

export default function CertificationsList() {
  const data = certifications;

  const numberOfBlockList = Math.ceil(data.length / 3);

  const blocksList = [];

  for (let i = 0; i < numberOfBlockList; i++) {
    blocksList.push(
      <div className='w-full lg:w-1/2'>
        <ul>
          {data.slice(i * 3, i * 3 + 3 < data.length ? i + 3 : data.length).map((certification) => (
            <CertificationListItem key={certification.name} certification={certification} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row px-4'>{blocksList.map((component) => component)}</div>
  );
}
