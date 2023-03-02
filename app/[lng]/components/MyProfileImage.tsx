import Image from 'next/image';

interface Props {
  lng: string;
}

export default function MyProfileImage({ lng }: Props) {
  return (
    <div className='lg:hidden relative mb-6'>
      <Image
        src={`/${lng}/images/profile.jpg`}
        alt='profile-image'
        width={230}
        height={230}
        className='object-cover rounded-full h-60 w-60 border-4 border-gray-400 mx-auto'
      />
    </div>
  );
}
