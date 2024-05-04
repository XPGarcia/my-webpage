interface Props {
  number: number;
  label: string;
  plus?: boolean;
}

export const StatisticsGridItem = ({ number, label, plus = false }: Props) => {
  const splitLabel = (label: string): string[] => {
    const resultWords = [];
    const wordsArray = label.split(' ');
    resultWords.push(wordsArray[0]);
    const wordsLeft = wordsArray.length > 1 && wordsArray.slice(1, wordsArray.length).join(' ');
    if (wordsLeft) resultWords.push(wordsLeft);
    return resultWords;
  };

  const words = splitLabel(label);

  return (
    <div className='px-4 mb-6'>
      <div className='h-full border border-gray-800 p-5 rounded'>
        <h3 className='relative w-fit text-red-500 text-4xl lg:text-5xl font-bold'>
          {number}
          {plus && <span className='absolute -right-5 -top-0.5 text-3xl'>+</span>}
        </h3>
        <div className='relative text-white text-sm sm:text-base font-semibold uppercase mt-1 sm:pl-11'>
          <div
            className='hidden sm:block absolute w-7 top-3 left-0 bg-gray-400'
            style={{ height: '1px' }}
          />
          <span>{words[0]}</span>
          {words.length > 1 && <span className='block'>{words[1]}</span>}
        </div>
      </div>
    </div>
  );
};
