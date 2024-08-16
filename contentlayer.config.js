import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

// import '@/styles/highlight-js/github-dark.css';

export const Post = defineDocumentType(() => ({
 name: 'Post',
 filePathPattern: `**/*.mdx`,
 fields: {
  title: { type: 'string', required: true },
  date: { type: 'date', required: true },
  description: { type: 'string', required: true },
  image: {
   type: 'string',
   required: true,
  },
 },
 computedFields: {
  url: { type: 'string', resolve: post => `/blogs/${post._raw.flattenedPath}` },
 },
 contentType: 'mdx',
}));

export default makeSource({
 contentDirPath: 'posts',
 documentTypes: [Post],

 mdx: {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
   () => tree => {
    visit(tree, node => {
     if (node?.type === 'element' && node?.tagName === 'pre') {
      const [codeEl] = node.children;

      if (codeEl.tagName !== 'code') return;

      node.raw = codeEl.children?.[0].value;
     }
    });
   },

   rehypeSlug,
   [
    rehypePrettyCode,
    {
     theme: 'github-dark',
     onVisitLine(node) {
      // Prevent lines from collapsing in `display: grid` mode, and allow empty
      // lines to be copy/pasted
      if (node.children.length === 0) {
       node.children = [{ type: 'text', value: ' ' }];
      }
     },
     onVisitHighlightedLine(node) {
      node.properties.className.push('line--highlighted');
     },
     onVisitHighlightedWord(node) {
      node.properties.className = ['word--highlighted'];
     },
    },
   ],
   [
    rehypeAutolinkHeadings,
    {
     properties: {
      className: ['subheading-anchor'],
      ariaLabel: 'Link to section',
     },
    },
   ],
   () => tree => {
    visit(tree, node => {
     if (node?.type === 'element' && node?.tagName === 'figure') {
      for (const child of node.children) {
       if (child.tagName === 'pre') {
        child.properties['raw'] = node.raw;
       }
      }
     }
    });
   },
  ],
 },
});
