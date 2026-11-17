import { getCollection, type CollectionEntry } from 'astro:content';
import getReadingTime from 'reading-time';
import { FEATURED_CATEGORIES, type Category } from '@/consts';

export type Post = CollectionEntry<'blog'>;

/**
 * All published posts, newest to oldest.
 * In `astro dev` drafts are shown so they can be previewed;
 * in the production build they are excluded.
 */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPostsByCategory(category: Category): Promise<Post[]> {
  return (await getPosts()).filter((p) => p.data.category === category);
}

export function getFeaturedPost(posts: Post[]): Post | undefined {
  return posts.find((p) => FEATURED_CATEGORIES.includes(p.data.category));
}

export function readingTime(post: Post): string {
  const { minutes } = getReadingTime(post.body ?? '');
  return `${Math.max(1, Math.round(minutes))} min`;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9+#]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Map slug -> { name, posts } with all tags. */
export function groupByTag(posts: Post[]): Map<string, { name: string; posts: Post[] }> {
  const tags = new Map<string, { name: string; posts: Post[] }>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = slugify(tag);
      const entry = tags.get(slug) ?? { name: tag, posts: [] };
      entry.posts.push(post);
      tags.set(slug, entry);
    }
  }
  return tags;
}
