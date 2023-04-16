/* eslint-disable @next/next/no-sync-scripts */
import Navigation from '@/app/components/Navigation';
import { ReactNode, Suspense } from 'react';
import './globals.css';
import Loading from './loading';

export const metadata = {
  title: 'Xavier García - Full-Stack Developer',
  description:
    "I'm a Ecuadorian based full-stack web developer with a passion for creating exceptional software and innovative experiences, I am committed to delivering high-quality web applications that meet the needs of my clients and users.",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <script src='https://kit.fontawesome.com/553e257edc.js' crossOrigin='anonymous' />
      </head>
      <body className='bg-black'>
        <Suspense fallback={<Loading />}>
          <div className='mb-16 lg:mb-0'>{children}</div>
          <Navigation />
        </Suspense>
      </body>
    </html>
  );
}
