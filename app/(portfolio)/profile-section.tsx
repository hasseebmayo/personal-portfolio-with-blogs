import Image from 'next/image';
import { LocateIcon, Mail, Phone } from 'lucide-react';
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const ProfileSection = () => {
 const iconClassName = 'size-4';
 const socialLinks: {
  href: string;
  icon: ReactNode;
  newTab: boolean;
 }[] = [
  {
   href: 'mailto:hasseebmayo@gmail.com',
   icon: <Mail className={iconClassName} />,
   newTab: true,
  },
  {
   href: 'tel:+923081240405',
   icon: <Phone className={iconClassName} />,
   newTab: false,
  },
  {
   href: 'https://linkedin.com/in/hasseebmayo',
   icon: (
    <svg
     viewBox="0 0 24 24"
     xmlns="http://www.w3.org/2000/svg"
     className="h-4 w-4"
    >
     <title>LinkedIn</title>
     <path
      fill="currentColor"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
     ></path>
    </svg>
   ),
   newTab: true,
  },
  {
   href: 'https://github.com/hasseebmayo',
   icon: (
    <svg
     viewBox="0 0 24 24"
     xmlns="http://www.w3.org/2000/svg"
     className="h-4 w-4"
    >
     <path
      fill="currentColor"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
     ></path>
    </svg>
   ),
   newTab: true,
  },
 ];
 return (
  <section className="flex flex-col-reverse items-center justify-between gap-y-5 md:flex-row">
   <div className="flex-1 space-y-1.5">
    <h1 className="font-sans text-2xl font-bold">Haseeb Ahmad</h1>
    <p className="max-w-md text-pretty font-sans text-sm text-muted-foreground">
     Software Engineer/MERN Stack Developer focused on ReactJS, Nodejs
    </p>
    <p className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline">
     <LocateIcon className="size-4" />
     Lahore,Punjab,Pakistan
    </p>
    <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
     {socialLinks.map(links => (
      <Button
       variant={'ghost'}
       size={'icon'}
       asChild
       key={links.href}
       className="size-8"
      >
       <Link
        target={links.newTab ? '_blank' : '_self'}
        className="border border-input"
        href={links.href}
       >
        {links.icon}
       </Link>
      </Button>
     ))}
    </div>
   </div>
   <div className="relative flex h-28 w-28 shrink-0 overflow-hidden rounded-xl border shadow-lg">
    <Image
     className="aspect-square"
     alt="Profile Image"
     src={'/DP.png'}
     width={112}
     height={112}
    />
   </div>
  </section>
 );
};

export default ProfileSection;
