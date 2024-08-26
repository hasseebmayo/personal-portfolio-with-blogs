import { Metadata } from 'next';
import { SideBar } from './side-bar';
import { ContentSideBar } from './side-content';

export const metadata: Metadata = {
 title: 'SideBar Demo - Explore Responsive Sidebar Component',
 description:
  'A demo page showcasing a responsive sidebar component built with React and Tailwind CSS. Learn how to create and implement a customizable sidebar in your Next.js project.',
 keywords: [
  'sidebar',
  'demo',
  'React',
  'Tailwind CSS',
  'Next.js',
  'responsive design',
 ],
};
export default async function SideBarDemo() {
 return (
  <div className="flex h-screen w-full gap-1 overflow-hidden bg-muted/40">
   <SideBar />
   <ContentSideBar />
  </div>
 );
}
