import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import App from './App';
import ArticleView from './components/ArticleView';
import QuestionView from './components/QuestionView';
import HomeView from './components/HomeView';

Vue.use(Router);
Vue.use(Resource);
Vue.http.options.root = 'http://hiitea-api.herokuapp.com/one';

export var router = new Router();

router.map({
  '/': {
    component: HomeView,
    name: 'home'
  },
  '/article/:id': {
    component: ArticleView,
    name: 'article'
  },
  '/question/:id': {
    component: QuestionView,
    name: 'question'
  }
});

router.redirect({
  '*': '/'
});

router.start(App, 'body');
