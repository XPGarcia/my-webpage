import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen overflow-scroll px-4 py-20 bg-white dark:bg-black'>
      <div className='flex flex-col'>
        <div className='w-full h-auto'>
          <div className='relative mb-6'>
            <Image
              src='/images/profile.jpg'
              alt='profile-image'
              width={230}
              height={230}
              className='object-cover rounded-full h-60 w-60 border-4 border-gray-400 mx-auto'
            />
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='flex flex-col text-3xl font-bold uppercase items-center'>
              <span className='text-red-400'>I'm Xavier García.</span>
              <span className='text-gray-600 dark:text-white mt-1'>Full-stack developer</span>
            </div>
            <p className='mt-3 mb-6 text-center text-gray-500 dark:text-white'>
              I'm a Tunisian based web designer & front‑end developer focused on crafting clean &
              user‑friendly experiences, I am passionate about building excellent software that
              improves the lives of those around me.
            </p>
            <button className='relative flex justify-center items-center rounded-3xl py-4 pl-8 pr-16 border border-red-400'>
              <span className='uppercase font-semibold text-gray-600 dark:text-white'>
                More about me
              </span>
              <div className='absolute -right-2 top-1/2 -translate-y-1/2 w-14 h-14 bg-red-400 rounded-full flex justify-center items-center'>
                <i className='fa-solid fa-arrow-right' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
