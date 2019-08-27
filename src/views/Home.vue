<template>
<<<<<<< HEAD:src/views/Home.vue
  <div class="holder">
    <feed/>
=======
  <div class='bg'>
    <!--<img src='../assets/debate_logo.png'>
    <h1><b>Tema do dia:</b></h1>
    <h2 style='margin-bottom: 2%'>Seu pai tem gonorréia?</h2>
    <feed/>-->
    <coment/>
>>>>>>> 586a1ad71be82c65e731745c1b00b6c16575520a:src/views/Main.vue
  </div>
</template>

<script>
import coment from '../components/Coment.vue'
import feed from '../components/Feed.vue'

export default {
  name: 'Home',
  components:{
    feed,
    coment,
  }
}
</script>

<style>
<<<<<<< HEAD:src/views/Home.vue
  .bg {
    background-color: #FFFAE2;
  }

  .holder {
    background-color: #FFFAE2;
  }

  .holder h1 {
    font-family: 'wrangell' !important;
=======
@font-face {
    font-family: 'wrangell';
    src: url(../assets/fonts/wrangell.otf) format('opentype');
  }

.header {
    font-family: 'wrangell';
  }

.bg {
    background-color: #FFFAE2;
>>>>>>> 586a1ad71be82c65e731745c1b00b6c16575520a:src/views/Main.vue
  }
</style>