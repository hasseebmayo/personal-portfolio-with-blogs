import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Provider from '@/provider';
import HeaderMain from '@/components/header';

const fontSans = FontSans({
 subsets: ['latin'],
 variable: '--font-sans',
});
export const metadata: Metadata = {
 title: 'Haseeb Ahmad',
 description:
  'Experienced Software Engineer specializing in MERN Stack Development. Skilled in building robust web applications, telemedicine platforms, and educational apps with expertise in Node.js, TypeScript, Docker, and AWS. Explore my projects and professional journey',
 icons: {
  icon: '/Logo.svg',
 },
 keywords: [
  'Haseeb Ahmad',
  'Haseeb Ahmad MERN Stack Developer',
  'MERN Stack Development Portfolio',
  'Full Stack Development Services',
  'Telemedicine Platform Development',
  'TypeScript and Node.js Expert',
  'Haseeb Ahmad Projects',
  'hasseebmayo blog',
  'hasseebmayo portfolio',
  'hasseebmayo full stack development',
 ],
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" suppressHydrationWarning>
   <body
    className={cn(
     'min-h-screen bg-background font-sans antialiased',
     fontSans.variable
    )}
   >
    <Provider>
     <main className="relative mx-auto scroll-my-12 overflow-auto p-4 md:px-20 md:py-7 print:p-12">
      <HeaderMain />
      {children}
     </main>
    </Provider>
   </body>
  </html>
 );
}
