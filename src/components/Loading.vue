<template>
  <div class="loading"
       v-show="isLoading">
    <p class="emoji">&gt;_&lt;</p>
    <p>Sorry, API真是非常！非常！非常的慢！！！多等几十秒好伐啦~ :P</p>
    <p>loading...</p>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    props: {
      isLoading: false
    }
  };
</script>

<style>
  .loading {
    width: 100%;
    text-align: center;
    margin: 50px 0;
    color: #999;
  }

  .emoji{
    font-size: 50px;
    font-weight: bold;
  }
</style>
