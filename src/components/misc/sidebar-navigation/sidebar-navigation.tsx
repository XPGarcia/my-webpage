'use client';

import { routes } from '@/src/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SidebarNavigation = () => {
  const pathname = usePathname();

  const bgIconColor = (route: string) => {
    return pathname === route ? 'bg-red-500' : 'bg-customDarkGray-300';
  };

  return (
    <div className='fixed bottom-0 lg:bottom-auto left-0 lg:left-auto lg:right-8 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-fit lg:h-fit p-2 bg-customDarkGray-400 lg:bg-transparent z-10'>
      <ul className='flex lg:flex-col justify-evenly lg:justify-start items-center lg:items-start'>
        {routes.map((route) => (
          <li
            key={route.name}
            className={`group w-12 h-12 text-white rounded-full lg:my-5 cursor-pointer hover:bg-red-500 ${bgIconColor(
              route.link
            )}`}
          >
            <Link
              className='relative w-full h-full flex justify-center items-center'
              href={route.link}
            >
              <i className={`fa-solid ${route.icon} `} />
              <div
                className='opacity-0 group-hover:opacity-100 absolute hidden lg:flex items-center right-0 top-0 h-12 bg-red-500 pr-12 pl-8 -z-10 transition-opacity'
                style={{ borderRadius: '48px' }}
              >
                <span className='text-white tracking-widest uppercase'>{route.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
