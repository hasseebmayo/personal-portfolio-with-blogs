import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Metadata } from 'next';
import { Mdx } from '@/components/mdx';
import '@/styles/mdx.css';

export const generateStaticParams = async () =>
 allPosts.map(post => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({
 params,
}: {
 params: { slug: string };
}): Metadata => {
 const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
 if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
 return {
  title: post.title,
  description: post.description,
  openGraph: {
   title: post.title,
   description: post.description,
   type: 'article',
   url: post.url,
   images: [
    {
     url: 'process.env.NEXT_PUBLIC_URL/' + post.image,
     width: 1200,
     height: 630,
     alt: post.title,
    },
   ],
  },
 };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
 const post = allPosts.find(post => post._raw.flattenedPath === params.slug);
 if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
 return (
  <>
   <article className="mx-auto max-w-xl space-y-2 py-3">
    <Button variant={'ghost'} asChild>
     <Link href={'/blogs'}>
      <ChevronLeft className="mr-2 size-4" />
      Blogs
     </Link>
    </Button>
    <div className="mb-8 text-center">
     <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
      {format(parseISO(post.date), 'LLLL d, yyyy')}
     </time>
     <h1 className="text-3xl font-bold">{post.title}</h1>
    </div>
    <Mdx code={post.body.code} />
   </article>
  </>
 );
};

export default PostLayout;
