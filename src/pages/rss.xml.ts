import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { CATEGORIES, SITE } from '@/consts';
import { getPosts } from '@/utils/posts';
import { url } from '@/utils/url';

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: url(`/blog/${post.id}`),
      categories: [CATEGORIES[post.data.category].label, ...post.data.tags],
      author: SITE.author,
    })),
    customData: `<language>${SITE.lang}</language>`,
  });
}
