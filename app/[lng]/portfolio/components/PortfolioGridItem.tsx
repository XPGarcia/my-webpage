import Image from 'next/image';
import Link from 'next/link';

interface Props {
  imagePath: string;
  projectName: string;
  path: string;
}

export default function PortfolioGridItem({ imagePath, projectName, path }: Props) {
  return (
    <Link href={path} className='group relative w-full h-60 mb-14 sm:mb-0 cursor-pointer'>
      <Image
        src={imagePath}
        alt={projectName}
        width={1682}
        height={785}
        className='object-cover w-full h-full rounded-lg'
      />
      <h3 className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center rounded-lg w-full h-full opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 bg-red-500'>
        <span className='text-lg text-white uppercase font-semibold tracking-wide transition-transform duration-500 -translate-y-5 group-hover:translate-y-0'>
          {projectName}
        </span>
      </h3>
      <h6 className='absolute w-full sm:hidden text-center uppercase text-white text-lg font-semibold my-4'>
        <span className='pb-1 border-b border-customDarkGray-400'>{projectName}</span>
      </h6>
    </Link>
  );
}
