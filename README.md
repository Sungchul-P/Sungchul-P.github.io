# Overview

본 블로그는 [gatsby-starter-morning-dew](https://github.com/maxpou/gatsby-starter-morning-dew)를 fork 하여 생성한 Gatsby 블로그입니다.

## Features

- [:purple_heart: Gatsby v2](https://www.gatsbyjs.org/) / React 16
- :mag: SEO optimized
- :love_letter: Write posts/pages in Markdown or [MDX](https://mdxjs.com/)
  - :art: Code syntax highlight
  - :books: Multilang support/i18n (blog post)
- :iphone: Mobile Friendly (Responsive design)
- :sparkles: PWA ready
  - :airplane: Offline support
  - :page_with_curl: Manifest support
- [:wrench: Fully configurable (see data/siteConfig.js)](./data/siteConfig.js)
- :speech_balloon: Disqus support
- :nail_care: css-in-js (with [styled-components v5](https://www.styled-components.com))
- :bookmark: Groups post with tags
- :bar_chart: Google Analytics support
- :bird: post preview image generation (Twitter, Facebook...)
- :gem: Developer tools:
  - eslint
  - prettier
- :construction_worker: Travis CI support

## Commands

```sh
# working locally
npm run develop

# generate build
npm run build

# deploy GH-pages
npm run develop

# format code
npm run format

# lint code
npm run lint

# Generate generate post preview images (npm run dev need to run before)
npm run generatePostPreviewImages
```

**:warning: Add `--prefix-paths` if you are using path prefix!**

## Configure

data/siteConfig.js

```js
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
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: 'georgia.png', // file in content/images
  googleAnalyticsId: '',
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
```
