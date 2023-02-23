interface Props {
  title: string;
  labelInBG: string;
}

export default function TitleWithLabelInBG({ title, labelInBG }: Props) {
  const wordsArray = title.split(' ');
  const wordsRight = wordsArray.slice(0, wordsArray.length - 1).join(' ');

  return (
    <div className='relative px-4 py-20 text-white uppercase'>
      <h1 className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-6xl lg:text-8xl text-gray-800 font-extrabold opacity-70 -z-10 tracking-widest'>
        {labelInBG}
      </h1>
      <h1 className='text-4xl lg:text-5xl font-black text-center'>
        {wordsRight} <span className='text-red-500'>{wordsArray[wordsArray.length - 1]}</span>
      </h1>
    </div>
  );
}
