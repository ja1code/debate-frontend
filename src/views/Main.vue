<template>
  <div>
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