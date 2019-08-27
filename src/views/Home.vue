<template>
  <div class="holder">
    <feed/>
  </div>
</template>

<script>
import feed from '../components/Feed.vue'

export default {
  name: 'Home',
  components:{
    feed,
  }
}
</script>

<style>
  .bg {
    background-color: #FFFAE2;
  }

  .holder {
    background-color: #FFFAE2;
  }

  .holder h1 {
    font-family: 'wrangell' !important;
  }
</style>