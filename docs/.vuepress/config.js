module.exports = {
  lang: 'zh-CN',
  title: '前端小贺',
  head: [['link', { rel: 'icon', href: '/images/logo-small.png' }]],
  base: '/', // 部署站点的基础路径。 如果你想让你的网站部署到一个子路径下，你将需要设置它。它的值应当总是以斜杠开始，并以斜杠结束。举例来说，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"。
  description: '前端小贺的前端记录',
  themeConfig: {
    logo: '/images/logo-small.png',
    navbar: [
      { text: '首页', link: '/'},
      { text: '收藏', link: '/cllection/'},
      { text: '首页', link: '/life/'},
      { text: 'GitHub', link: 'https://github.com/heshimang'},
    ]
  }
}