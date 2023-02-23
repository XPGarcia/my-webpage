import Separator from '../components/Separator';
import PersonalInfo from './components/PersonalInfo';
import SkillsGrid from './components/SkillsGrid';
import Statistics from './components/Statistics';

export default function About() {
  return (
    <div className='flex flex-col'>
      <div className='relative px-4 py-20 text-white uppercase'>
        <h1 className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-6xl lg:text-8xl text-gray-800 font-extrabold opacity-70 -z-10 tracking-widest'>
          Resume
        </h1>
        <h1 className='text-4xl lg:text-5xl font-black text-center'>
          About <span className='text-red-500'>me</span>
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <PersonalInfo classes='lg:w-1/2 px-4' />
          <Statistics classes='lg:w-1/2 px-4' />
        </div>
        <Separator />
        <div className='flex flex-col'>
          <h3 className='text-2xl font-semibold text-white text-center uppercase mb-10'>
            my skills
          </h3>
          <SkillsGrid />
        </div>
      </div>
    </div>
  );
}
