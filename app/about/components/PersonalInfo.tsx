import MyProfileImage from '@/app/components/MyProfileImage';
import RoundedButtonWithIcon from '@/app/components/RoundedButtonWithIcon';
import PersonalInfoGridItem from './PersonalInfoGridItem';
import { User } from '@/domain/entities';
import { getAge } from '@/app/utils';

interface Props {
  user: User;
  classes: string;
}

export default function PersonalInfo({ user, classes }: Props) {
  const languagesString = user.languages
    ?.map((language) => language.name)
    .reduce((accumulator, currentValue) => accumulator + `, ${currentValue}`);

  const githubUser = user.socialMedia?.github?.split('/').at(-1);

  return (
    <div className={`${classes} flex flex-col px-4 text-white`}>
      <h3 className='text-xl lg:text-2xl font-semibold pb-6 uppercase'>Personal Info</h3>
      <div className='md:hidden'>
        <MyProfileImage />
      </div>
      <div className='grid grid-cols-2 mb-4'>
        <PersonalInfoGridItem title='first name' body={user.firstName} />
        <PersonalInfoGridItem title='last name' body={user.lastName} />
        <PersonalInfoGridItem title='age' body={getAge(user.birthDate)} />
        <PersonalInfoGridItem title='nationality' body={user.nationality} />
        <PersonalInfoGridItem
          title='freelance'
          body='Available'
          bodyColor={user.available ? 'text-green-400' : 'text-red-600'}
        />
        {user.address && <PersonalInfoGridItem title='address' body={user.address} />}
        {user.phone && <PersonalInfoGridItem title='phone' body={user.phone} />}
        <PersonalInfoGridItem title='email' body={user.email} overflow />
        {user.socialMedia?.github && (
          <PersonalInfoGridItem
            title='github'
            body={githubUser!}
            link={user.socialMedia?.github}
            isAnchor
            overflow
          />
        )}
        {languagesString && <PersonalInfoGridItem title='languages' body={languagesString} />}
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
