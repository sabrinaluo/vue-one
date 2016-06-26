import Vue from 'vue';

export default{
  get(id) {
    var question = Vue.resource('question{/id}');
    return question.get({id: id})
      .then(res => {
        return res.data;
      })
      .catch(res => {
        throw new Error(res.data.message);
      });
  }
};
