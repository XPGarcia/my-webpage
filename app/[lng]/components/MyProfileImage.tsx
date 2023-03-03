import Image from 'next/image';

export default function MyProfileImage() {
  return (
    <div className='lg:hidden relative mb-6'>
      <Image
        src='/images/profile.jpg'
        alt='profile-image'
        width={230}
        height={230}
        className='object-cover rounded-full h-60 w-60 border-4 border-gray-400 mx-auto'
      />
    </div>
  );
}
