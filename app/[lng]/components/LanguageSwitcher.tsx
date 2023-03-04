'use client';

import Link from 'next/link';
import { useState } from 'react';
import { languages } from '../../i18n/settings';
import { usePathname } from 'next/navigation';

interface Props {
  currentLng: string;
}

export default function LanguageSwitcher({ currentLng }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const routeLength = usePathname()?.length;
  const paths = usePathname()?.split('/').slice(2, routeLength);
  const toPath = '/' + paths?.join('/');

  const toggleOpen = () => setIsOpen(!isOpen);

  const builtLngOptionComponent = (lng: string, index: number) => {
    const gapTopBetweenOptions = 60;
    const topPosition = ((index + 1) * gapTopBetweenOptions).toString() + 'px';

    return (
      <Link
        key={lng}
        href={`/${lng + toPath}`}
        className={`${
          isOpen ? 'visible' : 'invisible'
        } absolute flex justify-center items-center border border-white text-white hover:border-red-500 hover:text-red-500  w-12 h-12 font-semibold rounded-full uppercase`}
        style={{ top: topPosition }}
      >
        {lng}
      </Link>
    );
  };

  return (
    <div className='absolute right-20 top-4 z-50'>
      <button
        className='absolute w-12 h-12 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full uppercase'
        onClick={toggleOpen}
      >
        <div className='relative flex justify-center items-center w-full h-full'>
          <span>{currentLng}</span>
        </div>
      </button>
      <div className='relative'>
        {languages
          .filter((lng) => lng !== currentLng)
          .map((lng, index) => builtLngOptionComponent(lng, index))}
      </div>
    </div>
  );
}
