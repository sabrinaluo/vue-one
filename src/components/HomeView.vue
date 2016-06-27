<template>
  <div class="container"
       v-if="!loading"
  >
    <div class="left-column">
      <div class="col-image">
        <div class="item"
             v-for="item in image"
             v-show="$index===slide.index"
        >
          <a href="#"><img v-bind="{src:item.img}" width="100%"></a>
          <div class="image-footer">
            <p class="image-title">{{{item.author}}}</p>
          </div>
          <div class="calendar">
            <div class="date">
              <p>{{item.vol}}</p>
              <p class="day">{{item.day}}</p>
              <p>{{item.month}}</p>
            </div>
            <p class="citation">{{{item.content}}}</p>
            <div class="clearfix"></div>
          </div>
        </div>
        <ol class="indicator">
          <li v-for="n in image.length"
              @click="slide.select(n)"
          >
            {{n === slide.index ? '●' : '○'}}
          </li>
        </ol>
      </div>
    </div>

    <div class="right-column">
      <div class="panel">
        <div class="panel-header">ONE 文章</div>
        <div class="panel-body">
          <p class="one-vol">
            {{article.one.vol}}
          </p>
          <p class="one-title">
            <a v-link="{name: 'article', params: {id: article.one.id}}">
              {{article.one.title}}
              <small> - {{article.one.author}}</small>
            </a>
          </p>
          <ul>
            <li v-for="item in article.list">
              <span class="text-light-grey">{{item.vol}}</span>
              <a v-link="{name: 'article', params: {id: item.id}}">
                {{item.title}}
                <small> - {{item.author}}</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">ONE 问题</div>
        <div class="panel-body">
          <p class="one-vol">
            {{question.one.vol}}
          </p>
          <p class="one-title">
            <a v-link="{name: 'question', params: {id: question.one.id}}">
              {{question.one.title}}
            </a>
          </p>
          <ul>
            <li v-for="item in question.list">
              <span class="text-light-grey">{{item.vol}}</span>
              <a v-link="{name: 'question', params: {id: item.id}}">
                {{item.title}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Home from '../stores/home';

  class Slide {
    constructor(len) {
      this.start = 0;
      this.end = len - 1;
      this.index = this.start;
    }

    next() {
      if (this.index === this.end) {
        this.index = this.start;
      } else {
        this.index++;
      }
    }

    prev() {
      if (this.index === this.start) {
        this.index = this.end;
      } else {
        this.index--;
      }
    }

    select(index) {
      this.index = index;
    }

    run(interval) {
      interval = interval || 10000; // 10 sec
      setInterval(() => {
        this.next();
      }, interval);
    }
  }

  export default {
    data() {
      return {
        loading: true,
        article: [],
        question: [],
        image: [],
        slide: {}
      };
    },
    ready() {
      Home.get().then(data => {
        this.loading = false;
        this.article = data.article;
        this.question = data.question;
        this.image = data.slide;
        this.slide = new Slide(this.image.length);
        this.slide.run(5000);
      });
    }
  };

</script>

<style>
  .container {
    margin: 0 -5px;
  }

  .left-column {
    box-sizing: border-box;
    width: 66.67%;
    float: left;
    padding: 0 5px;
  }

  .right-column {
    box-sizing: border-box;
    width: 33.33%;
    float: left;
    padding: 0 5px;
  }

  @media (max-width: 864px) {
    .left-column {
      width: 100%;
    }

    .right-column {
      width: 100%;
    }
  }

  .panel {
    height: 290px;
    margin-bottom: 10px;
    background-color: #f6f6f6;
  }

  .panel:first-child {
    background-color: #f6f6f6;
  }

  .container a {
    display: inline;
    padding: 0;
  }

  .panel-header {
    height: 42px;
    background-color: #01aef0;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    line-height: 42px;
    padding: 0 10px;
    margin-bottom: 10px;
  }

  .panel-body {
    color: #333;
    padding: 0 10px;
  }

  .panel ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .panel li {
    height: 26px;
    line-height: 26px;
  }

  li {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  li a, li a:hover {
    color: #666;
  }

  .one-vol {
    margin-bottom: 5px;
  }

  .one-title {
    font-size: 16px;
    line-height: 50px;
    height: 50px;
    margin: 0;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .col-image img {
    display: block;
  }

  .image-title {
    margin: 0;
    text-align: center;
    background-color: #000;
    color: #fff;
    font-size: 14px;
    line-height: 22px;
    height: 23px;
  }

  .calendar {
    height: 120px;
    background-color: #d6d6d6;
  }

  .citation {
    display: table-cell;
    margin: 0;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    height: 120px;
    vertical-align: middle;
    font-size: 14px;
    line-height: 1.67;
  }

  .date {
    float: right;
    box-sizing: border-box;
    height: 120px;
    width: 100px;
    padding: 10px;
    background-color: #f2f2f2;
    text-align: center;
    color: #333;
  }

  .date p {
    padding: 0;
    margin: 0 0 5px 0;
  }

  .day {
    height: 56px;
    line-height: 56px;
    font-size: 56px;
    font-weight: 600;
  }

  .clearfix {
    clear: both;
  }

  .indicator {
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff;
    height: 22px;
    text-align: center;
  }

  .indicator li {
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    display: inline;
    cursor: pointer;
  }

</style>
