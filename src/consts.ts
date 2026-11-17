export const SITE = {
  title: 'Diego Mora',
  description:
    'Technical blog by Diego Mora: reversing, game hacking, malware dev, Windows internals, pwn and CTFs.',
  author: 'Diego Mora',
  lang: 'en',
  locale: 'en_US',
  // Path (relative to /public) of the default OG image.
  ogImage: '/og-default.png',
  // Your photo. Replace public/images/avatar.svg with your own (e.g. avatar.jpg) and update this path.
  avatar: '/images/avatar.svg',
  postsPerPage: 10,
} as const;

export const SOCIAL = {
  github: 'https://github.com/billyelcalvo',
  linkedin: 'https://www.linkedin.com/in/diego-mora-blas',
  cylab: 'https://learn.cylabacademy.org/users/billyelcalvo1',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/categories', label: 'Categories' },
  { href: '/profile', label: 'Profile' },
] as const;

export const CATEGORY_SLUGS = [
  'reversing',
  'pwn',
  'ctf',
  'important',
  'announcement',
  'personal',
] as const;

export type Category = (typeof CATEGORY_SLUGS)[number];

export type IconName = 'cpu' | 'flame' | 'flag' | 'alert' | 'megaphone' | 'user';

export interface CategoryMeta {
  label: string;
  description: string;
  icon: IconName;
}

// Each category's color lives in src/styles/global.css (--cat-<slug>),
// so it switches correctly between dark and light mode.
export const CATEGORIES: Record<Category, CategoryMeta> = {
  reversing: {
    label: 'Reversing',
    description: 'Reverse engineering of binaries: disassembly, static and dynamic analysis.',
    icon: 'cpu',
  },
  pwn: {
    label: 'Pwn',
    description: 'Binary exploitation: memory corruption, ROP, heap and more.',
    icon: 'flame',
  },
  ctf: {
    label: 'CTF',
    description: 'Writeups from Capture The Flag competitions.',
    icon: 'flag',
  },
  important: {
    label: 'Important',
    description: 'Posts worth reading first.',
    icon: 'alert',
  },
  announcement: {
    label: 'Announcement',
    description: 'News about the blog, projects and talks.',
    icon: 'megaphone',
  },
  personal: {
    label: 'Personal',
    description: 'Thoughts, lessons learned and the road so far.',
    icon: 'user',
  },
};

// Categories featured at the top of the home page.
export const FEATURED_CATEGORIES: readonly Category[] = ['important', 'announcement'];
