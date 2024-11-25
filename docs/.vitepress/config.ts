import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
 // cleanUrls: true,
  base: "/doc-zy/",
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "Linux觅知园",
      description: "Linux觅知园",
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: '官网', link: 'https://www.zen-harmony.top' },
          { text: 'QQ群组', link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=MSUXualaov6ATpPWtUBay_CPRmSw9lcV&authKey=q3nqdThXrsPMfOZowqT20RKnKoGVW%2FY29Bn%2BwEJGd5Tb8Akzu6zz1gmeyQr4DMX8&noverify=0&group_code=985191565' }
        ],
        sidebar: {
          '/': [
            {
              text: '',
              items: [
                { text: '首页', link: '/home' },
                {
                  text: 'Linux常用资源整理',
                  items: [
                    { text: '整理主体', link: '/Linux-src-col/main' },
                    { text: '关于项目', link: '/Linux-src-col/about' }
                  ]
                },
                { text: 'Linux常见问题解决方案整理',
                  items: [
                    { text: '高频问题', link: '/Linux-solutions/frequently-asked' },
                    { text: '常见问题', link: '/Linux-solutions/common' },
                    { text: '解决方案收集', link: '/Linux-solutions/collect' },
                    { text: '致谢', link: '/Linux-solutions/thanks' }
                  ]
                }
              ]
            }
          ]
        },
        lastUpdatedText: '上次更新',
        editLink: {
          pattern: 'https://github.com/zen-harmony/doc-zy/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        darkModeSwitchLabel: '外观',
        outlineTitle: '在此页上',
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: "Linux Knowledge Base",
      description: "A project to collect Linux tutorial resources",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Zen Harmony', link: 'https://www.zen-harmony.top/en' },
          { text: 'QQ Group', link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=MSUXualaov6ATpPWtUBay_CPRmSw9lcV&authKey=q3nqdThXrsPMfOZowqT20RKnKoGVW%2FY29Bn%2BwEJGd5Tb8Akzu6zz1gmeyQr4DMX8&noverify=0&group_code=985191565' }
        ],
        sidebar: [
          { text: 'Home', link: '/home' },
          { text: 'Get involved', link: '/en/instructions' },
          {
            text: 'Deepin Common Q&A',
            items: [
              { text: 'Frequently Asked', link: '/en/Linux-solutions/frequently-asked' },
              { text: 'Common Problems', link: '/en/Linux-solutions/common' },
              { text: 'Collections', link: '/en/Linux-solutions/collect' },
              { text: 'Thanks', link: '/en/Linux-solutions/thanks' }
            ]
          }
        ],
        sidebarMenuLabel: 'Contents'
      },

    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 6], 
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zen-Harmony' }
    ],
    search: {
      provider: 'local'
    }
  }
})
