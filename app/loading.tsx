export default function Loading() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='relative'>
        <div className='w-32 h-32 border-6 border-dashed rounded-full animate-spin border-red-500' />
        <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-lg'>
          Loading...
        </span>
      </div>
    </div>
  );
}
