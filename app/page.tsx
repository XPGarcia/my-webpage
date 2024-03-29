import type { Metadata } from 'next';
import BGColor from './components/BGColor';
import BGMyProfileImage from './components/BGMyProfileImage';
import MyDescription from './components/MyDescription';
import MyProfileImage from './components/MyProfileImage';

export const metadata: Metadata = {
  title: 'Xavier García - Full Stack web developer',
  description:
    'I am Xavier García, Full-stack web developer with a lot of knowledge in front-end and back-end.'
};

export default function Home() {
  return (
    <div className='flex flex-col h-screen px-4 justify-center items-center'>
      <div className='flex flex-col lg:flex-row lg:w-full'>
        <BGColor />
        <div className='flex flex-col lg:flex-row w-full h-auto'>
          <MyProfileImage />
          <div className='hidden lg:block w-1/3' />
          <BGMyProfileImage />
          <div className='w-full lg:w-2/3'>
            <MyDescription />
          </div>
        </div>
      </div>
    </div>
  );
}
