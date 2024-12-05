import { MyProfileImage } from '../my-profile-image';
import { PersonalInfoGridItem } from './personal-info-grid-item';
import { RoundedButtonWithIcon } from '@/src/components/misc';
import { calculateAge } from '@/src/utils';

interface Props {
  classes: string;
}

const profile = {
  name: 'Xavier Garcia',
  birthday: '1997-12-19',
  nationality: 'Ecuadorian',
  address: 'Ecuador',
  email: 'xavier.garcia@prometeo.dev',
  languages: 'Spanish, English, German'
};

export const PersonalInfo = ({ classes }: Props) => {
  const age = calculateAge(new Date(profile.birthday));

  return (
    <div className={`${classes} flex flex-col px-4 text-white`}>
      <h3 className='text-xl lg:text-2xl font-semibold pb-6 uppercase'>Personal Info</h3>
      <div className='md:hidden'>
        <MyProfileImage />
      </div>
      <div className='grid grid-cols-2 mb-4'>
        <PersonalInfoGridItem title='Name' body={profile.name} />
        <PersonalInfoGridItem title='age' body={age.toString()} />
        <PersonalInfoGridItem title='nationality' body={profile.nationality} />
        <PersonalInfoGridItem title='freelance' body='Available' bodyColor='text-green-400' />
        <PersonalInfoGridItem title='address' body={profile.address} />
        <PersonalInfoGridItem title='email' body={profile.email} overflow />
        <PersonalInfoGridItem
          title='github'
          body='XPGarcia'
          link='https://github.com/XPGarcia'
          isAnchor
        />
        <PersonalInfoGridItem title='languages' body={profile.languages} />
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
};
