import RoundedButtonWithIcon from '@/app/[lng]/components/RoundedButtonWithIcon';

interface Props {
  name: string;
  job: string;
  description: string;
  buttonLabel: string;
}

export default function MyDescription({ name, job, description, buttonLabel }: Props) {
  return (
    <div className='flex flex-col items-center lg:items-start text-center max-w-lg lg:max-w-md xl:max-w-2xl mx-auto'>
      <div className='relative flex flex-col text-3xl lg:text-4xl xl:text-5xl font-bold uppercase items-center lg:items-start xl:pl-20'>
        <div
          className='hidden xl:block absolute h-1 w-10 left-3 rounded bg-red-500'
          style={{ top: '24px' }}
        />
        <span className='text-red-500'>{name}</span>
        <span className='text-white mt-1 lg:text-left'>{job}</span>
      </div>
      <p className='mt-3 lg:mt-4 mb-6 lg:mb-7 lg:text-lg leading-7 lg:leading-9 text-center lg:text-left text-white'>
        {description}
      </p>
      <RoundedButtonWithIcon body={buttonLabel} icon='fa-arrow-right' isAnchor link='/about' />
    </div>
  );
}
