import Link from 'next/link';
import { compareDesc } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

function PostCard(post: Post) {
 return (
  <Card className="hover:scale-1.5 group w-full border-none shadow-sm transition-all md:w-[40%]">
   <CardContent className="px-0 py-0">
    <Link href={post.url} prefetch={false} className="space-y-2">
     <Image
      className="aspect-square w-full rounded-sm object-center transition-all group-hover:scale-105"
      alt="Profile Image"
      src={post.image}
      width={400}
      height={400}
      // className="aspect-video w-full object-cover"
     />
     <div className="px-0">
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
       {post.description}
      </p>
      <div className="mt-4">
       <Button variant="link" size="sm">
        Read More
       </Button>
      </div>
     </div>
    </Link>
   </CardContent>
  </Card>
 );
}

export default function Home() {
 const posts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
 );

 return (
  <div className="mx-auto max-w-2xl py-8">
   <h1 className="mb-8 text-center text-2xl font-black">Blogs</h1>
   <div className="flex w-full flex-wrap gap-8">
    {posts.map((post, idx) => (
     <PostCard key={idx} {...post} />
    ))}
   </div>
  </div>
 );
}
