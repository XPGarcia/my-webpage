interface Props {
  title: string;
  labelInBG: string;
}

export const TitleWithLabelInBG = ({ title, labelInBG }: Props) => {
  const wordsArray = title.split(' ');
  const wordsRight = wordsArray.slice(0, wordsArray.length - 1).join(' ');

  return (
    <div className='relative px-4 py-20 text-white uppercase'>
      <h2 className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-6xl lg:text-8xl text-gray-800 font-extrabold opacity-70 -z-10 tracking-widest'>
        {labelInBG}
      </h2>
      <h1 className='text-4xl lg:text-5xl font-black text-center'>
        {wordsRight}{' '}
        <span className={`${wordsArray.length > 1 ? 'text-red-500' : 'text-white'}`}>
          {wordsArray[wordsArray.length - 1]}
        </span>
      </h1>
    </div>
  );
};
