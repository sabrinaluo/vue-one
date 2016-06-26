import Vue from 'vue';

export default{
  get() {
    var home = Vue.resource();
    return home.get()
      .then(res => {
        return res.data;
      })
      .catch(res => {
        throw new Error(res.data.message);
      });
  }
};
