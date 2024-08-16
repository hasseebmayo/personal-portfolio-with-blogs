// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import * as React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '@/lib/utils';
import { Callout } from '@/components/mdx/callout';
import { MdxCard } from '@/components/mdx/mdx-card';
import { MdxButtonCopy } from './copy-button';
interface CustomPreProps extends HTMLAttributes<HTMLPreElement> {
 'data-language'?: string;
 raw: string;
}

const components = {
 h1: ({ className, ...props }) => (
  <h1
   className={cn(
    'mt-2 scroll-m-20 text-2xl font-bold tracking-tight',
    className
   )}
   {...props}
  />
 ),
 h2: ({ className, ...props }) => (
  <h2
   className={cn(
    'mt-10 scroll-m-20 border-b pb-1 text-xl font-semibold tracking-tight first:mt-0',
    className
   )}
   {...props}
  />
 ),
 h3: ({ className, ...props }) => (
  <h3
   className={cn(
    'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
    className
   )}
   {...props}
  />
 ),
 h4: ({ className, ...props }) => (
  <h4
   className={cn(
    'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
    className
   )}
   {...props}
  />
 ),
 h5: ({ className, ...props }) => (
  <h5
   className={cn(
    'mt-8 scroll-m-20 text-sm font-semibold tracking-tight',
    className
   )}
   {...props}
  />
 ),
 h6: ({ className, ...props }) => (
  <h6
   className={cn(
    'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
    className
   )}
   {...props}
  />
 ),
 a: ({ className, ...props }) => (
  <a
   className={cn('font-medium underline underline-offset-4', className)}
   {...props}
  />
 ),
 p: ({ className, ...props }) => (
  <p
   className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
   {...props}
  />
 ),
 ul: ({ className, ...props }) => (
  <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
 ),
 ol: ({ className, ...props }) => (
  <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
 ),
 li: ({ className, ...props }) => (
  <li className={cn('mt-2', className)} {...props} />
 ),
 blockquote: ({ className, ...props }) => (
  <blockquote
   className={cn(
    'mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground',
    className
   )}
   {...props}
  />
 ),
 img: ({ src, alt, ...props }) => (
  <Image
   src={src as string}
   alt={alt as string}
   width={1000}
   height={1000}
   className="w-full rounded-md"
   {...props}
  />
 ),
 hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
 table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
  <div className="my-6 w-full overflow-y-auto">
   <table className={cn('w-full', className)} {...props} />
  </div>
 ),
 tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={cn('m-0 border-t p-0 even:bg-muted', className)} {...props} />
 ),
 th: ({ className, ...props }) => (
  <th
   className={cn(
    'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
    className
   )}
   {...props}
  />
 ),
 td: ({ className, ...props }) => (
  <td
   className={cn(
    'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
    className
   )}
   {...props}
  />
 ),
 pre: ({ children, raw, ...props }: CustomPreProps) => {
  const lang = props['data-language'];
  return (
   <pre className="shadow-code text-wrap rounded-xl border" {...props}>
    <div className="relative inset-px flex w-full items-center justify-between rounded-t-xl bg-gray-300 px-4 py-1 text-sm text-gray-900 dark:bg-slate-900 dark:text-slate-400">
     <p className="">{lang}</p>
     <MdxButtonCopy text={raw} />
    </div>
    {children}
   </pre>
  );
 },
 code: ({ className, ...props }) => (
  <code
   className={cn(
    'relative w-full overflow-x-auto rounded px-4 py-4 font-mono text-sm',
    className
   )}
   {...props}
  />
 ),
 Image,
 Callout,
 Card: MdxCard,
};

interface MdxProps {
 code: string;
}

export function Mdx({ code }: MdxProps) {
 const Component = useMDXComponent(code);

 return (
  <div className="mdx space-y-5">
   <Component components={components} />
  </div>
 );
}
