import { Experience } from '@/domain/entities/experience';

interface Props {
  experience: Experience;
}

export default function ExperienceListItem({ experience }: Props) {
  return (
    <li className='relative pl-14 pr-5 mb-12'>
      <div
        className='absolute top-0 left-5 h-full bg-red-500 opacity-70'
        style={{ width: '0.5px' }}
      />
      <div className='absolute top-0 left-0 flex justify-center items-center bg-red-500 w-10 h-10 rounded-full'>
        <i className='fa-solid fa-briefcase text-white' />
      </div>
      <span
        className='inline-block text-xs font-semibold mb-2 text-white bg-gray-800 opacity-80 uppercase'
        style={{ borderRadius: '20px', padding: '1px 10px' }}
      >
        {experience.dateRange[0]} - {experience.dateRange[1]}
      </span>
      <h6 className='uppercase text-white text-lg font-semibold my-3'>
        {experience.role}
        <span className='text-gray-400'> - {experience.companyName}</span>
      </h6>
      <p className='text-gray-50 text-sm'>{experience.description}</p>
    </li>
  );
}
