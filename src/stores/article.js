import Vue from 'vue';

export default{
  get(id) {
    var article = Vue.resource('article{/id}');
    return article.get({id: id})
      .then(res => {
        return res.data;
      })
      .catch(res => {
        throw new Error(res.data.message);
      });
  }
};
