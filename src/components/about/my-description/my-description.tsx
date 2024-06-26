import { RoundedButtonWithIcon } from '@/src/components/misc';

export const MyDescription = () => {
  return (
    <div className='flex flex-col items-center lg:items-start text-center max-w-lg lg:max-w-md xl:max-w-2xl mx-auto'>
      <div className='relative flex flex-col text-3xl lg:text-4xl xl:text-5xl font-bold uppercase items-center lg:items-start xl:pl-20'>
        <div
          className='hidden xl:block absolute h-1 w-10 left-3 rounded bg-red-500'
          style={{ top: '24px' }}
        />
        <h1 className='text-red-500 text-left'>
          I'm Xavier García.
          <span className='text-white mt-1 block'>Full-stack developer</span>
        </h1>
      </div>
      <p className='mt-3 lg:mt-4 mb-6 lg:mb-7 lg:text-lg leading-7 lg:leading-9 text-center lg:text-left text-white'>
        I'm a Ecuadorian based full-stack web developer with a passion for creating exceptional
        software and innovative experiences, I am committed to delivering high-quality web
        applications that meet the needs of my clients and users.
      </p>
      <RoundedButtonWithIcon body='More about me' icon='fa-arrow-right' isAnchor link='/about' />
    </div>
  );
};
