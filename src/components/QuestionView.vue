<template>
  <loading :is-loading="loading"></loading>
  <article class="article"
           v-show="!loading"
  >
    <section class="ask">
      <div class="blue-label"><span>问</span></div>
      <h4>{{question.title}}</h4>
      <div class="content">{{{question.content}}}</div>
    </section>
    <hr>
    <section class="answer">
      <div class="blue-label"><span>答</span></div>
      <h4>{{answer.title}}</h4>
      <p class="content">{{{answer.content}}}</p>
    </section>
    <p class="editor">{{editor}}</p>
  </article>
</template>

<script>
  import Question from '../stores/question';
  import Loading from './Loading';

  export default {
    components: {
      Loading
    },
    data() {
      return {
        loading: true,
        question: {},
        answer: {},
        editor: ''
      };
    },
    route: {
      activate() {
        var id = this.$route.params.id;
        Question.get(id).then(data => {
          this.loading = false;
          this.question = data.question;
          this.answer = data.answer;
          this.editor = data.editor;
        });
      }
    }
  };
</script>

<style>
  h4 {
    line-height: 40px;
    font-size: 16px;
    font-weight: 600;
  }

  .blue-label {
    width: 60px;
    height: 28px;
    margin: 0 auto 20px auto;
    background-color: #01aef0;
    border-radius: 1px;
    box-shadow: #777 1px 1px 5px;
    text-align: center;
  }

  .blue-label span {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    position: relative;
  }

  .ask .blue-label span {
    top: -10px;
  }

  .ask .blue-label:before {
    content: '';
    display: block;
    position: relative;
    left: -5px;
    top: 10px;
    background-color: #01aef0;
    width: 10px;
    height: 10px;
    transform: rotate(225deg);
  }

  .answer .blue-label:after {
    content: '';
    display: block;
    position: relative;
    right: -55px;
    top: -20px;
    background-color: #01aef0;
    width: 10px;
    height: 10px;
    transform: rotate(225deg);
  }
</style>
