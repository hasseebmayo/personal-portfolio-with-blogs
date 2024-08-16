import { allPosts } from '@/.contentlayer/generated';
import { MetadataRoute } from 'next';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 const blogs = allPosts.map(post => ({
  url: `process.env.NEXT_PUBLIC_URL${post.url}`,
  lastModified: post.date,
 }));

 const routes = ['', '/blogs'].map(route => ({
  url: `process.env.NEXT_PUBLIC_URL${route}`,
  lastModified: new Date().toISOString().split('T')[0],
 }));

 return [...routes, ...blogs];
}
