import matter from 'gray-matter';
import { marked } from 'marked';

export const parseMarkdown = (
  markdown: string,
): { meta?: Record<string, string>; html: string } => {
  const { data, content } = matter(markdown);

  const html = marked.parse(content);

  return { meta: data, html };
};
