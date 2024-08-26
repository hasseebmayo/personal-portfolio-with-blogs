import RetroGrid from '@/components/ui/retro-bg';
import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Exciting Demo Collection: Coming Soon!',
 description:
  'Get ready for an exclusive look at our upcoming demo collection! We’re preparing something special that showcases our latest innovations and coding skills. Stay tuned for interactive features, insightful code walkthroughs, and more. Don’t miss out on the chance to explore cutting-edge solutions and creative implementations!',
};

export default async function RetroGridDemo() {
 return (
  <section className="flex h-screen w-full items-center justify-center">
   <div className="relative flex h-[500px] w-[90%] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:w-[40%] md:shadow-xl">
    <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
     Coming Soon
    </span>

    <RetroGrid />
   </div>
  </section>
 );
}
