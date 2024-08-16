'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ModeToggle } from './theme-toggle';
import PostCmdk from './post-cmdk';

const HeaderMain = () => {
 const pathname = usePathname();
 return (
  <header className="mx-auto mb-4 flex w-full max-w-2xl items-center justify-between border-b pb-4 print:space-y-6">
   <nav className="space-x-5">
    <Link
     href={'/'}
     className={cn('text-sm transition-colors hover:text-gray-500', {
      'text-gray-500 hover:text-white': pathname === '/',
     })}
    >
     Home
    </Link>
    <Link
     href={'/blogs'}
     className={cn('text-sm transition-colors hover:text-gray-500', {
      'text-gray-500 hover:text-white': pathname.includes('blogs'),
     })}
    >
     Blogs
    </Link>
   </nav>

   <div className="flex items-center gap-x-4">
    <PostCmdk />
    <ModeToggle />
   </div>
  </header>
 );
};

export default HeaderMain;
