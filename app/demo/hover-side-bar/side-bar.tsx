'use client';
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
 ChevronLeft,
 Home,
 LucideIcon,
 Package,
 Package2,
 Tag,
 User2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type ILink = {
 title: string;
 href: string;
 icon: LucideIcon;
};

const SidebarLink = React.memo(({ link }: { link: ILink }) => {
 const Icon = link.icon;
 return (
  <li
   key={link.title}
   className="flex w-full cursor-pointer items-center gap-4 px-3.5 py-3 hover:bg-black hover:text-white"
  >
   <Icon className="h-6 w-6 flex-shrink-0" />
   <motion.span className="text-sm transition-all">{link.title}</motion.span>
  </li>
 );
});
SidebarLink.displayName = 'SidebarLink';

export function SideBar() {
 const [isOpen, setOpen] = useState(false);
 const [isHovered, setHovered] = useState(false);

 const LINKS: ILink[] = useMemo(
  () => [
   { title: 'Home', href: '#', icon: Home },
   { title: 'Orders', href: '#', icon: Tag },
   { title: 'Products', href: '#', icon: Package },
   { title: 'Customers', href: '#', icon: User2 },
  ],
  []
 );

 const handleMouseOver = () => {
  if (!isOpen) setHovered(true);
 };

 const handleMouseLeave = () => {
  if (!isOpen) setHovered(false);
 };

 const collapsedWidth = '3rem';
 const expandedWidth = '16rem';
 const width = isOpen ? expandedWidth : collapsedWidth;
 const shouldAnimateWidth = !isOpen || isHovered;
 const animateWidth = shouldAnimateWidth ? width : collapsedWidth;

 return (
  <motion.aside
   className="relative z-50 hidden h-full md:block"
   animate={{ width: animateWidth }}
   transition={{
    duration: isOpen ? 0 : 0.3, // No transition when opening, but smooth transition when closing
    type: isOpen ? 'just' : 'tween', // Tween for immediate, spring for smooth
    bounce: 0.3,
    damping: 10,
    stiffness: 50,
   }}
   initial={false}
   onMouseOver={handleMouseOver}
   onMouseLeave={handleMouseLeave}
  >
   <motion.div
    className={cn(
     'h-full w-full overflow-hidden border-r bg-background shadow-lg',
     {
      'absolute inset-0': isHovered,
     }
    )}
    animate={{ width: isOpen || isHovered ? expandedWidth : collapsedWidth }}
    initial={false}
    transition={{
     duration: isHovered ? 0.2 : 0.3,
     type: 'tween',
     ease: isHovered ? 'easeInOut' : 'easeIn',
    }}
   >
    <div className="flex w-full items-center justify-between gap-4 px-3.5 py-5">
     <Package2 className="h-6 w-6 flex-shrink-0" />
     <button
      onClick={() => setOpen(!isOpen)}
      className={cn('rounded-full bg-black p-2 text-white', {
       'pointer-events-none opacity-0': !isOpen && !isHovered,
      })}
     >
      <ChevronLeft
       className={cn('h-6 w-6 transition-transform', {
        'rotate-180': isOpen,
       })}
      />
     </button>
    </div>
    <nav className="w-full">
     <ul className="flex w-full flex-col">
      {LINKS.map(link => (
       <SidebarLink key={link.title} link={link} />
      ))}
     </ul>
    </nav>
   </motion.div>
  </motion.aside>
 );
}
