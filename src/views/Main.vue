<template>
  <div class='bg'>
    <img src='../assets/debate_logo.png'>
    <h1><b>Tema do dia:</b></h1>
    <h2 style='margin-bottom: 2%'>Seu pai tem gonorréia?</h2>
    <feed/>
  </div>
</template>

<script>
import feed from '../components/Feed.vue'

export default {
  name: 'main',
  components:{
    feed,
  }
}
</script>

<style>
@font-face {
    font-family: 'wrangell';
    src: url(../assets/fonts/wrangell.otf) format('opentype');
  }

.header {
    font-family: 'wrangell';
  }

.bg {
    background-color: #FFFAE2;
  }
</style>