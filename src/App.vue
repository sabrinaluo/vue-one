<template>
  <div id="app">
    <header class="header">
      <a v-link="{name: 'home'}">
        <img src="http://image.wufazhuce.com/www-fp-logo.png">
      </a>
      <a href="https://github.com/sabrinaluo/vue-one" target="_blank" class="github-corner">
        <svg width="70" height="70" viewBox="0 0 250 250">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor" class="octo-body"></path>
        </svg>
      </a>
    </header>
    <router-view></router-view>
    <footer class="footer">
      <hr>
      <p class="text-light-grey">© 2012-2014 <a v-link="{name: 'home'}">「ONE · 一个」</a></p>
      <p class="text-light-grey">
        <a href="http://github.com/sabrinaluo/vue-one" target="_blank">Github</a>
        <a href="http://weibo.com/lob7" target="_blank">微博</a>
      </p>
      <p>复杂世界里, 一个就够了. One is all.</p>
      <p class="text-light-grey declaration">
        声明：此网站仅为个人练习展示，
        其中界面设计、文章、图片等版权归「ONE · 一个」所有，
        如有侵权请与<a href="mailto:luohaojing@gmail.com">网站作者</a>联系删除
      </p>
    </footer>
  </div>
</template>

<script>
  export default {
    replace: false
  };
</script>

<style>
  body {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, "BBAlpha Sans", "S60 Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    font-size: 12px;
  }

  .header {
    text-align: center;
    margin: 10px 0;
    height: 50px;
    background-color: #01aef0;
    position: relative;
  }

  .github-corner {
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
  }

  .github-corner svg {
    fill: none;
    color: #fff;
  }

  .footer {
    clear: both;
    margin: 100px 0;
    text-align: center;
  }

  .declaration {
    margin-top: 80px;
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }

  #app {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    #app {
      width: 720px;
    }
  }

  @media (min-width: 1200px) {
    #app {
      width: 854px;
    }
  }

  .text-light-grey {
    color: #777;
  }

  a {
    color: #428bca;
    text-decoration: none;
    padding-left: 5px;
    padding-right: 5px;
  }

  a:hover, a:focus {
    color: #2a6496;
    text-decoration: underline;
  }

  /***** github corner*******/
  .github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out
  }

  @keyframes octocat-wave {
    0%, 100% {
      transform: rotate(0)
    }
    20%, 60% {
      transform: rotate(-25deg)
    }
    40%, 80% {
      transform: rotate(10deg)
    }
  }

  @media (max-width: 500px) {
    .github-corner:hover .octo-arm {
      animation: none
    }

    .github-corner .octo-arm {
      animation: octocat-wave 560ms ease-in-out
    }
  }
</style>
