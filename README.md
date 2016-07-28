# VUE-ONE [![LICENSE MIT](https://img.shields.io/badge/LICENSE-MIT-blue.svg)](https://opensource.org/licenses/MIT)
「ONE · 一个」SPA，Vue版本单页应用

## Demo URL
http://sabrinaluo.com/vue-one

## API
- Demo: http://hiitea-api.herokuapp.com/one
- Repo: https://github.com/sabrinaluo/api

由于没有找到可用的「ONE · 一个」API，所以自己写了一个。

由于没有服务器，所以API服务托管在heroku上。

由于heroku服务器在美国以及sleep policy，所以API **特！别！慢！** :cry:

### 当你访问API的时候发生了什么？
1. 如果你在中国，首先从中国发送请求到美国（heroku）；
2. 如果API处于睡眠状态，heroku需要十秒左右唤醒API；
3. 然后爬虫从美国到中国（one的官网）爬取内容，把数据暂存在美国
4. 数据从美国作为“响应”返回中国
5. 最后你就看到了内容…

## 笔记
整个项目是一个比较典型的SPA应用，使用了组件，不同路由渲染不同的view，RESTful API等概念。感觉比起作者给出的例子[hackernews](https://github.com/vuejs/vue-hackernews)使用firebase实时数据库，RESTful API更常用

### JS
- 使用了vue-cli生成脚手架
- 使用了`vue-router`，`vue-resource`
- 配合`Vue.http.options.root`与`vue-router`使用，在`src/stores`下可看到相关使用
- 在路由的定义中，使用了具名路径
- 在定义`App.vue`（根组件？）时，要用`<div>`包住整个组件。因为假如这样启动app，`router.start(App, '#app');`，其实整个组建不是嵌入到`#app`之中，而是替换`#app`这个元素。如果没有一个root元素包裹住组件，可能会影响scope（个人猜测啦，反正不包住会报错这是真的）
- 以前觉得用不到数据结构，图片轮播carousel其实就是一个循环链表，但我写的时候也没觉得自己写的是链表，可能是因为抽象思维太差啦
- 组件属性在定义时用camelcase，而在html中引用组件时，要用kebab-case，也就是用`-`连接各个单词

### CSS
- img下方总是会有大概5px的空白，margin padding怎么改都不管用，原因是img是内联元素，解决方法
```
img {
    display: block;
}
```
- 单行文字，如果超出宽度则在结尾显示...
```
p {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
```

### Deploy
在`vue-one`目录下克隆远程`gh-pages`分支，并命名为dist
```
git clone -b gh-pages git@github.com:sabrinaluo/vue-one dist
```

Build之前记得改`assetsPublicPath`！

## IMPORTANT!
`config/index.js`中的`assetsPublicPath: '/'`
- 在开发环境下应该设为`'/'`，否则localhost:3000将返回404
- 如果deploy到github的gh-pages分支，也就是说如果项目不是在根目录下被访问而是子目录下，那么应该设为`'./'`，再进行`npm run build`，然后用build出来的`dist`文件夹deploy即可正确显示。

## 其他
我也不知道我为神马这么爱山寨:sweat_smile:

如果你觉得这个repo对你学习vue有帮助，又恰好有点零钱，那么请赞助我买个服务器吧！非常感谢:smile:

[![Alipay](http://7xow88.com1.z0.glb.clouddn.com/alip.jpg?imageView2/3/w/150/)](http://7xow88.com1.z0.glb.clouddn.com/alip.jpg)
