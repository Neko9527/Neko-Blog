---
home: true
heroImage: /img/Icon.png
heroText: SakuraNeko
tagline: VuePress驱动的博客
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present SakuraNeko | website based on vuepress by Evan You
---

<script>
export default{
  mounted() {
    console.log(this.$site.pages)
    var target = document.getElementsByClassName("footer")[0];
    if(target)
      target.innerHTML = target.innerHTML.replace("SakuraNeko","<a href='https://sakuraneko.cn'>SakuraNeko</a>");
  }
}
</script>