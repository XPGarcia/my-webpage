import Link from 'next/link';

interface Props {
  title: string;
  body: string;
  bodyColor?: string;
  overflow?: boolean;
  link?: string;
  isAnchor?: boolean;
}

export default function PersonalInfoGridItem({
  title,
  body,
  bodyColor,
  overflow,
  link,
  isAnchor
}: Props) {
  return (
    <div className='pb-5'>
      <span className='capitalize text-gray-200 opacity-80'>{title}:</span>
      {!isAnchor && (
        <p
          className={`lg:inline-block lg:ml-2 font-semibold ${bodyColor || 'text-white'} ${
            overflow && 'overflow-x-scroll sm:overflow-x-clip'
          }`}
        >
          {body}
        </p>
      )}
      {isAnchor && link && (
        <Link
          href={link}
          className={`block lg:inline-block lg:ml-2 font-semibold underline ${
            bodyColor || 'text-white'
          } ${overflow && 'overflow-x-scroll sm:overflow-x-clip'}`}
          rel='noreferrer'
          target='_blank'
        >
          {body}
        </Link>
      )}
    </div>
  );
}
