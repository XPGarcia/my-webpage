import RoundedButtonWithIcon from '@/app/[lng]/components/RoundedButtonWithIcon';
import MyProfileImage from '../../components/MyProfileImage';
import PersonalInfoGridItem from './PersonalInfoGridItem';

interface Props {
  classes: string;
  lng: string;
  translation: (label: string) => string;
}

export default function PersonalInfo({ classes, lng, translation }: Props) {
  const CVFile = `xavier_resume_${lng.toUpperCase()}.pdf`;

  return (
    <div className={`${classes} flex flex-col px-4 text-white`}>
      <h3 className='text-xl lg:text-2xl font-semibold pb-6 uppercase'>
        {translation('personal_info')}
      </h3>
      <div className='md:hidden'>
        <MyProfileImage />
      </div>
      <div className='grid grid-cols-2 mb-4'>
        <PersonalInfoGridItem title={translation('first_name')} body='Xavier' />
        <PersonalInfoGridItem title={translation('last_name')} body='García' />
        <PersonalInfoGridItem title={translation('age')} body='25' />
        <PersonalInfoGridItem title={translation('nationality')} body={translation('ecuadorian')} />
        <PersonalInfoGridItem
          title={translation('freelance')}
          body={translation('available')}
          bodyColor='text-green-400'
        />
        <PersonalInfoGridItem title={translation('address')} body='Ecuador' />
        <PersonalInfoGridItem title={translation('phone')} body='+593959795664' />
        <PersonalInfoGridItem
          title={translation('email')}
          body='xavier.garcia@prometeo.dev'
          overflow
        />
        <PersonalInfoGridItem
          title='github'
          body='XPGarcia'
          link='https://github.com/XPGarcia'
          isAnchor
        />
        <PersonalInfoGridItem
          title={translation('address')}
          body={`${translation('spanish')}, ${translation('english')}, ${translation('german')}`}
        />
      </div>
      <div className='w-full flex justify-center lg:justify-start'>
        <RoundedButtonWithIcon
          body={translation('download_cv')}
          icon='fa-download'
          isAnchor
          download
          link={`/files/${CVFile}`}
        />
      </div>
    </div>
  );
}
