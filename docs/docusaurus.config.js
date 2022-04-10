/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Morfeo',
  tagline: 'The theming system\nyou were missing',
  url: 'https://morfeo.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  customFields: {
    description:
      'Morfeo or MorfeoJS, is a tool to build design systems based on a single source of truth.',
  },
  favicon: 'img/favicon.ico',
  organizationName: 'morfeojs',
  projectName: 'morfeo',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Morfeo Logo',
        src: 'img/logo-beta.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Introduction/getting-started',
          position: 'right',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'ThemeSpecification/overview',
          position: 'right',
          label: 'Theme Specification',
        },
        {
          to: 'docs/Packages/core',
          label: 'Packages',
          position: 'right',
          activeBaseRegex: `/packages/`,
        },
        {
          type: 'doc',
          docId: 'Benchmarks/benchmarks-core',
          position: 'right',
          label: 'Benchmarks',
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/morfeojs/morfeo',
          title: 'GitHub repository',
          position: 'right',
          className: 'scale-on-hover header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://chrome.google.com/webstore/detail/morfeo/phhhjdmeicikchjnpepljcdgbmipipcl',
          position: 'right',
          title: 'Web Extension',
          className: 'scale-on-hover web-extension-link',
          'aria-label': 'Web Extension',
        },
        {
          href: 'https://discord.gg/5hbsKMBRBh',
          title: 'Discord server',
          position: 'right',
          className: 'scale-on-hover header-discord-link',
          'aria-label': 'Discord server',
        },
        {
          href: 'https://www.buymeacoffee.com/morfeo',
          title: 'Support us on Buy Me a Coffee',
          position: 'right',
          className: 'scale-on-hover header-bmc-link',
          'aria-label': 'Support us on Buy Me a Coffee',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/Introduction/getting-started',
            },
            {
              label: 'Web Extension',
              to: '/docs/Features/web-extension',
            },
            {
              label: 'Theme specification',
              to: '/docs/ThemeSpecification/overview',
            },
            {
              label: 'Packages',
              to: '/docs/Packages/core',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/morfeo',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/5hbsKMBRBh',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/morfeojs/morfeo',
            },
            {
              label: 'Privacy Policy',
              href: '/privacy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mauro Erta, VLK Studio and all the documentation authors`,
    },
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    algolia: {
      appId: 'EWTNDDHKD0',
      apiKey: '4caa155f2dbdf468ad11b7fe1ff297a2',
      indexName: 'morfeo',
      algoliaOptions: {},
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-Y3GE1C055X',
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: 'UA-200678898-1',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/morfeojs/morfeo/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/morfeojs/morfeo/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['@docusaurus/theme-live-codeblock'],
};
