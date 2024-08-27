// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import tailwindPlugin from "./plugins/tailwind-plugin.cjs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Black Myth Wukong Wiki',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blackmythwukong.wiki',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Black Myth Wukong', // Usually your GitHub org/user name.
  projectName: 'Black Myth Wukong Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins:[
    tailwindPlugin,
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en', // 默认语言为英语
    locales: [
      'fr', 'ja', 'en', 'ru', 'zh-CN', 'zh-TW', 'de', 'es', 'pt', 'ar', 'ko', 'pl', 'it'
    ], // 支持的语言列表
    path: 'i18n', // 国际化文件的存储路径
    localeConfigs: {
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-FR',
        calendar: 'gregory',
        path: 'fr',
      },
      ja: {
        label: '日本語',
        direction: 'ltr',
        htmlLang: 'ja-JP',
        calendar: 'gregory',
        path: 'ja',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      ru: {
        label: 'Русский',
        direction: 'ltr',
        htmlLang: 'ru-RU',
        calendar: 'gregory',
        path: 'ru',
      },
      'zh-CN': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
        path: 'zh-CN',
      },
      'zh-TW': {
        label: '繁體中文',
        direction: 'ltr',
        htmlLang: 'zh-TW',
        calendar: 'gregory',
        path: 'zh-TW',
      },
      de: {
        label: 'Deutsch',
        direction: 'ltr',
        htmlLang: 'de-DE',
        calendar: 'gregory',
        path: 'de',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-ES',
        calendar: 'gregory',
        path: 'es',
      },
      pt: {
        label: 'Português',
        direction: 'ltr',
        htmlLang: 'pt-PT',
        calendar: 'gregory',
        path: 'pt',
      },
      ar: {
        label: 'العربية',
        direction: 'rtl',
        htmlLang: 'ar-SA',
        calendar: 'gregory',
        path: 'ar',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
        calendar: 'gregory',
        path: 'ko',
      },
      pl: {
        label: 'Polski',
        direction: 'ltr',
        htmlLang: 'pl-PL',
        calendar: 'gregory',
        path: 'pl',
      },
      it: {
        label: 'Italiano',
        direction: 'ltr',
        htmlLang: 'it-IT',
        calendar: 'gregory',
        path: 'it',
      },
    },
  },

  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5097828520902491',
      async: true,
      crossorigin: 'anonymous',
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jiangjiax/blackmythwukong/tree/main',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-CZ025JWZ4L',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'BLACK MYTH WUKONG WIKI',
        logo: {
          alt: 'BLACK MYTH WUKONG WIKI',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'GENERAL INFORMATION',
            position: 'left',
            items: [
              {
                label: 'Combat',
                href: '/combat',
              },
              {
                label: 'Gameplay',
                href: '/#gameplay',
              },
              {
                label: 'FAQs & News',
                href: '/#faq',
              },
              {
                label: 'Wallpapers',
                href: '/#wallpapers',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'CHARACTER INFORMATION',
            position: 'left',
            items: [
              {
                label: 'Sun WuKong',
                href: '/sunwukong',
              },
              {
                label: 'Character',
                href: '/docs/character',
              },
              {
                label: 'Stats',
                href: '/docs/stats',
              },
              {
                label: 'Spells',
                href: '/docs/spells',
              },
              {
                label: 'Equip',
                href: '/docs/equip',
              },
              // {
              //   label: 'Buffs & Debuffs',
              //   href: '/#wallpapers',
              // },
              // {
              //   type: 'doc',
              //   label: 'Social',
              //   docId: 'social',
              // },
            ],
          },
          {
            type: 'dropdown',
            label: 'WORLD INFORMATION',
            position: 'left',
            items: [
              {
                label: 'Maps',
                href: '/docs/maps',
              },
              {
                label: 'Bosses',
                href: '/docs/bosses',
              },
              // {
              //   label: 'NPCs',
              //   href: '/#faq',
              // },
              // {
              //   label: 'Creatures & Enemies',
              //   href: '/#wallpapers',
              // },
              {
                label: 'Back Story',
                href: '/docs/back-story',
              },
              // {
              //   type: 'doc',
              //   label: 'Social',
              //   docId: 'social',
              // },
            ],
          },
          // {
          //   type: 'dropdown',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'GENERAL INFORMATION',
          // },
          {
            href: 'https://github.com/jiangjiax/blackmythwukong',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GENERAL INFORMATION',
            items: [
              {
                label: 'Combat',
                href: '/combat',
              },
              {
                label: 'Gameplay',
                href: '/#gameplay',
              },
              {
                label: 'FAQs & News',
                href: '/#faq',
              },
              {
                label: 'Wallpapers',
                href: '/#wallpapers',
              },
            ],
          },
          {
            title: 'CHARACTER INFORMATION',
            items: [
              {
                label: 'Sun WuKong',
                href: '/sunwukong',
              },
              {
                label: 'Character',
                href: '/docs/character',
              },
              {
                label: 'Stats',
                href: '/docs/stats',
              },
              {
                label: 'Spells',
                href: '/docs/spells',
              },
              {
                label: 'Equip',
                href: '/docs/equip',
              },
              // {
              //   label: 'Buffs & Debuffs',
              //   href: '/#wallpapers',
              // },
            ],
          },
          {
            title: 'WORLD INFORMATION',
            items: [
              {
                label: 'Maps',
                href: '/docs/maps',
              },
              {
                label: 'Bosses',
                href: '/docs/bosses',
              },
              // {
              //   label: 'NPCs',
              //   href: '/#faq',
              // },
              // {
              //   label: 'Creatures & Enemies',
              //   href: '/#wallpapers',
              // },
              {
                label: 'Back Story',
                href: '/docs/back-story',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Steam',
                to: 'https://store.steampowered.com/app/2358720/_/',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/jiangjiax/blackmythwukong',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
