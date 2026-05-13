import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SIGAMA',
  tagline: 'Tutoriais do Sistema de Gestão Agropecuária do Maranhão',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  url: 'https://sigama.aged.ma.gov.br',
  baseUrl: '/tutoriais/',

  organizationName: 'aged-ma',
  projectName: 'sigama-tutoriais',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SIGAMA',
      logo: {
        alt: 'Logo SIGAMA',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutoriais',
        },
        {
          href: 'https://sigama.aged.ma.gov.br',
          label: 'Acessar SIGAMA',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tutoriais',
          items: [
            {
              label: 'Introdução',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Links Úteis',
          items: [
            {
              label: 'SIGAMA',
              href: 'https://sigama.aged.ma.gov.br',
            },
            {
              label: 'AGED-MA',
              href: 'https://aged.ma.gov.br',
            },
          ],
        },
        {
          title: 'Suporte',
          items: [
            {
              label: 'Contato por e-mail',
              href: 'mailto:suporte@sigama.aged.ma.gov.br',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AGED-MA. Tutoriais do SIGAMA - Sistema de Gestão Agropecuária do Maranhão.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
