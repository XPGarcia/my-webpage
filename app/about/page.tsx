import RoundedButtonWithIcon from '@/components/RoundedButtonWithIcon';
import MyProfileImage from '../components/MyProfileImage';
import PersonalInfoGridItem from './components/PersonalInforGridItem';

export default function About() {
  return (
    <div className='flex flex-col'>
      <div className='relative px-4 py-20 text-white uppercase'>
        <h1 className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-6xl text-gray-800 font-extrabold opacity-70 -z-10 tracking-widest'>
          Resume
        </h1>
        <h1 className='text-4xl font-black text-center'>
          About <span className='text-red-500'>me</span>
        </h1>
      </div>
      <div className='flex flex-col px-4 text-white'>
        <h3 className='text-xl font-semibold pb-6 uppercase'>Personal Info</h3>
        <div className='md:hidden'>
          <MyProfileImage />
        </div>
        <div className='grid grid-cols-2 mb-4'>
          <PersonalInfoGridItem title='first name' body='Xavier' />
          <PersonalInfoGridItem title='last name' body='García' />
          <PersonalInfoGridItem title='age' body='25' />
          <PersonalInfoGridItem title='nationality' body='Ecuadorian' />
          <PersonalInfoGridItem title='freelance' body='Available' bodyColor='text-green-400' />
          <PersonalInfoGridItem title='address' body='Ecuador' />
          <PersonalInfoGridItem title='phone' body='+593959795664' />
          <PersonalInfoGridItem title='email' body='xavier.garcia@prometeo.dev' overflow />
          <PersonalInfoGridItem title='github' body='XPGarcia' />
          <PersonalInfoGridItem title='languages' body='Spanish, English, German' />
        </div>
        <div className='w-full flex justify-center'>
          <RoundedButtonWithIcon body='Download CV' icon='fa-download' />
        </div>
      </div>
    </div>
  );
}
