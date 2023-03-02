/* eslint-disable @next/next/no-sync-scripts */
import { dir } from 'i18next';

import Navigation from '@/components/Navigation';
import { ReactNode } from 'react';
import './globals.css';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng }
}: {
  children: ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
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
