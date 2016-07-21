<template>
  <loading :is-loading="loading"></loading>
  <article class="article"
           v-show="!loading">
    <blockquote class="quote">
      {{article.quote}}
    </blockquote>
    <h2 class="title">{{article.title}}</h2>
    <p class="author">{{article.author}}</p>
    <div class="content">{{{article.content}}}</div>
    <p class="editor">{{article.editor}}</p>
  </article>
</template>

<script>
  import Article from '../stores/article';
  import Loading from './Loading';

  export default {
    components: {
      Loading
    },
    data() {
      return {
        loading: true,
        article: {}
      };
    },
    route: {
      activate() {
        var id = this.$route.params.id;
        Article.get(id).then(data => {
          this.article = data;
          this.loading = false;
        });
      }
    }
  };
</script>

<style>
  .quote {
    margin: 0;
    color: #999;
    padding: 20px 40px;
    font-size: 14px;
    line-height: 1.67;
    position: relative;
  }

  .quote:before {
    position: absolute;
    top: -10px;
    left: 5px;
    content: '“';
    font-size: 35px;
  }

  .quote:after {
    position: absolute;
    right: 5px;
    bottom: -20px;
    content: '”';
    font-size: 35px;
  }

  .article {
    margin-top: 40px;
    color: #333;
    position: relative;
  }

  h2 {
    font-size: 30px;
  }

  .title {
    font-weight: 300;
  }

  .author {
    font-size: 14px;
    line-height: 1.67;
  }

  .content {
    margin: 40px 0;
    font-size: 14px;
    line-height: 1.67;
  }

  .editor {
    font-size: 14px;
    line-height: 1.67;
    font-style: italic;
    margin-top: 60px;
    margin-bottom: 40px;
  }
</style>
