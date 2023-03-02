import RoundedButtonWithIcon from '@/components/RoundedButtonWithIcon';
import MyProfileImage from '../../components/MyProfileImage';
import PersonalInfoGridItem from './PersonalInfoGridItem';

interface Props {
  classes: string;
}

export default function PersonalInfo({ classes }: Props) {
  return (
    <div className={`${classes} flex flex-col px-4 text-white`}>
      <h3 className='text-xl lg:text-2xl font-semibold pb-6 uppercase'>Personal Info</h3>
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
        <PersonalInfoGridItem
          title='github'
          body='XPGarcia'
          link='https://github.com/XPGarcia'
          isAnchor
        />
        <PersonalInfoGridItem title='languages' body='Spanish, English, German' />
      </div>
      <div className='w-full flex justify-center lg:justify-start'>
        <RoundedButtonWithIcon
          body='Download CV'
          icon='fa-download'
          isAnchor
          download
          link='/files/xavier_resume_EN.pdf'
        />
      </div>
    </div>
  );
}
