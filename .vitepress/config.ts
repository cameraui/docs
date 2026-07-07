import footnote from 'markdown-it-footnote';
import llmstxt from 'vitepress-plugin-llms';
import { withMermaid } from 'vitepress-plugin-mermaid';
import nav from './nav.json';

type Lang = 'en' | 'de';

// Build a localized sidebar from the shared IA definition (nav.json).
// `prefix` is '' for the English root locale and '/de' for German.
function sidebar(lang: Lang, prefix = '') {
  return nav.sections.map((section) => ({
    text: section.text[lang],
    collapsed: (section as { collapsed?: boolean }).collapsed ?? false,
    items: section.items.map((item) => ({
      text: item.text[lang],
      // External links (e.g. the SDK docs) must not get the locale prefix.
      link: item.link.startsWith('http') ? item.link : prefix + item.link,
    })),
  }));
}

function topnav(lang: Lang, prefix = '') {
  return nav.topnav.map((item) => ({
    text: item.text[lang],
    link: prefix + item.link,
  }));
}

const EDIT_PATTERN = 'https://github.com/cameraui/docs/edit/main/:path';

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: 'camera.ui',
  description: 'Self-hosted camera and NVR platform — documentation.',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  sitemap: { hostname: 'https://docs.cameraui.com' },
  srcExclude: ['README.md'],

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '32x32',
        href: '/favicon.ico',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        sizes: '16x16',
        href: '/favicon-16.ico',
      },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    ],
  ],

  vite: {
    plugins: [
      llmstxt({
        generateLLMsFullTxt: true,
        title: 'camera.ui Documentation',
      }),
    ],
  },

  markdown: {
    config: (md) => {
      md.use(footnote);
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cameraui/camera.ui' },
      { icon: 'discord', link: 'https://discord.gg/bBGnGcbz8N' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>',
        },
        link: 'https://www.reddit.com/r/cameraui/',
      },
    ],
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: topnav('en'),
        sidebar: sidebar('en'),
        editLink: {
          pattern: EDIT_PATTERN,
          text: 'Edit this page on GitHub',
        },
      },
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      link: '/de/',
      themeConfig: {
        nav: topnav('de', '/de'),
        sidebar: sidebar('de', '/de'),
        editLink: {
          pattern: EDIT_PATTERN,
          text: 'Diese Seite auf GitHub bearbeiten',
        },
        docFooter: {
          prev: 'Zurück',
          next: 'Weiter',
        },
        outline: { label: 'Auf dieser Seite' },
        lastUpdated: { text: 'Zuletzt aktualisiert' },
        returnToTopLabel: 'Nach oben',
        sidebarMenuLabel: 'Menü',
        darkModeSwitchLabel: 'Erscheinungsbild',
      },
    },
  },

  mermaid: {},
});
