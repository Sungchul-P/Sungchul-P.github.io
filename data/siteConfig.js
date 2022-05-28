module.exports = {
  siteTitle: "Devnori's Tech Blog",
  siteDescription: '',
  authorName: 'Sungchul Park',
  twitterUsername: '',
  authorAvatar: 'icon.png', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  배움을 멈추지 않고, 언젠가 넓고 깊은 지식을 갖게 되기를 꿈꾸고 있습니다! 🚀 <br>
  또한 누군가에게 선한 영향력을 미칠 수 있는 사람이 되기를 소망합니다 🌟
  `,
  siteUrl: 'https://Sungchul-P.github.io/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'georgia.png', // file in content/images
  googleAnalyticsId: 'G-F68KCEBSGZ',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/icon.png',
  postsPerPage: 6,
  utterancesRepo: 'sungchul-p/blog-comments',
  headerTitle: "Devnori's Tech Blog",
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-me',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-me',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/Sungchul-P/Sungchul-P.github.io',
        },
        {
          label: 'Website',
          url: 'https://Sungchul-P.github.io/',
        },
      ],
    },
  ],
}
