import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Mini Data Structure',
  description: "A Jayden's Mini Data Structure Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/api-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          {
            text: 'Runtime API Examples',
            link: '/api-examples',
            items: [
              { text: 'Node', link: '/data-structures/node-examples' },
              {
                text: 'Linked List',
                link: '/data-structures/linked-list-examples',
              },
              { text: 'Stack', link: '/data-structures/stack-examples' },
              { text: 'Queue', link: '/data-structures/queue-examples' },
            ],
          },
          { text: 'Coming Soon', link: '/coming-soon' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/JaydenLee1116/mini-data-structure',
      },
    ],
  },
});
