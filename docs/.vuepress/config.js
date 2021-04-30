const path = require('path');
module.exports = {
    title: 'SakuraNeko`s Blog',
    description: 'Just playing around',
    head: [
      ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/img/Icon.png` }]
    ],
    plugins: [ '@vuepress/blog',],
    themeConfig: {
      dateFormat: 'YYYY-MM-DD',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: 'Archives', link: '/archives/' },
        { text: 'About', link:'/about.html'},
        { text: 'GitHub', link: 'https://github.com/Neko9527/Neko-Blog' },
      ]
    },
    chainWebpack: (config, isServer) => {
      config.resolveLoader
      .modules
      .add(path.resolve(__dirname, './node_modules'))
    }
}