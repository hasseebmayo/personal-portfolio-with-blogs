'use client';
import React, { useState, useEffect } from 'react';
import {
 CommandDialog,
 CommandEmpty,
 CommandGroup,
 CommandInput,
 CommandItem,
 CommandList,
} from '@/components/ui/command';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { allPosts } from 'contentlayer/generated';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const PostCmdk = () => {
 const [open, setOpen] = useState(false);
 const router = useRouter();
 useEffect(() => {
  const down = (e: KeyboardEvent) => {
   if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    setOpen(open => !open);
   }
  };

  document.addEventListener('keydown', down);
  return () => document.removeEventListener('keydown', down);
 }, []);
 return (
  <>
   <Button
    className="hidden h-8 space-x-7 border md:inline-flex"
    variant={'ghost'}
    size={'sm'}
    onClick={() => {
     setOpen(true);
    }}
   >
    <span>Search for blogs....</span>

    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
     <span className="text-xs">⌘</span>J
    </kbd>
   </Button>
   <Button
    className="inline-flex h-8 border md:hidden"
    variant={'ghost'}
    size={'icon'}
    onClick={() => {
     setOpen(true);
    }}
   >
    <Search className="size-5" />
   </Button>
   <CommandDialog open={open} onOpenChange={setOpen}>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
     <CommandEmpty>No results found.</CommandEmpty>
     <CommandGroup heading="Blogs">
      {allPosts.map(b => (
       <CommandItem
        key={b._id}
        onSelect={() => {
         router.push(b.url);
         setOpen(false);
        }}
       >
        {b.title}
       </CommandItem>
      ))}
     </CommandGroup>

     <CommandGroup heading="Links">
      <CommandItem
       onSelect={() => {
        router.push('/');
        setOpen(false);
       }}
      >
       Home
      </CommandItem>
      <CommandItem
       onSelect={() => {
        router.push('/blogs');
        setOpen(false);
       }}
      >
       Blogs
      </CommandItem>
     </CommandGroup>
     <CommandGroup heading="CV">
      <CommandItem asChild>
       <Link download={true} href={'/Haseeb.pdf'} target="_blank">
        Download CV
       </Link>
      </CommandItem>
     </CommandGroup>
    </CommandList>
   </CommandDialog>
  </>
 );
};

export default PostCmdk;
