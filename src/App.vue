<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
  font-family: 'wrangell';
  src: url(assets/fonts/wrangell.otf) format('opentype');
}

@font-face {
  font-family: 'psans';
  src: url(assets/fonts/psans.ttf);
}

* {
  font-family: 'psans';
}

#app {
  font-family: 'psans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  background-color: #FFFAE2 !important;
  overflow: hidden;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
