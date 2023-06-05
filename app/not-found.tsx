import RoundedButtonWithIcon from './components/RoundedButtonWithIcon';

export default function NotFound() {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center bg-black'>
      <h1 className='text-9xl font-extrabold text-white tracking-widest'>404</h1>
      <div className='bg-red-500 px-2 text-sm rounded rotate-12 absolute'>Page Not Found</div>
      <div className='mt-5'>
        <RoundedButtonWithIcon icon='fa-arrow-right' body='Go to Home' link='/' isAnchor />
      </div>
    </main>
  );
}
