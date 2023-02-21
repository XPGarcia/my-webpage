/* eslint-disable @next/next/no-css-tags */
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
        <link href='/fontawesome/css/fontawesome.css' rel='stylesheet' />
        <link href='/fontawesome/css/brands.css' rel='stylesheet' />
        <link href='/fontawesome/css/solid.css' rel='stylesheet' />

        <title>Xavier García - Full-Stack Developer</title>
      </head>
      <body className='bg-white dark:bg-black'>{children}</body>
    </html>
  );
}
