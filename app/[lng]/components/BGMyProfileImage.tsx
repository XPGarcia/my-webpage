import Image from 'next/image';

export default function BGMyProfileImage() {
  return (
    // <div
    //   className='hidden lg:block w-1/3 fixed top-10 left-10 bg-cover bg-no-repeat bg-top z-10 rounded-3xl shadow-md'
    //   style={{
    //     backgroundImage: 'url("/images/profile_image.jpg")',
    //     height: 'calc(100vh - 80px)'
    //   }}
    // />
    <div
      className='hidden lg:block w-1/3 fixed top-10 left-10 z-10 rounded-3xl shadow-md overflow-hidden'
      style={{
        height: 'calc(100vh - 80px)'
      }}
    >
      <Image
        src='/images/profile.jpg'
        alt='profile'
        width={600}
        height={962}
        className='w-full h-full object-cover'
      />
    </div>
  );
}
