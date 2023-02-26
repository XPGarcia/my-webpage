/* eslint-disable @next/next/no-sync-scripts */
import Navigation from '@/components/Navigation';
import { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <script src='https://kit.fontawesome.com/553e257edc.js' crossOrigin='anonymous' />
        <title>Xavier García - Full-Stack Developer</title>
      </head>
      <body className='bg-black mb-16 lg:mb-0'>
        {children}
        <Navigation />
      </body>
    </html>
  );
}
