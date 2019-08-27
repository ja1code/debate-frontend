import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import io from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

// css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(new VueSocketIO({
  debug: false,
  connection: io('http://192.168.43.26:8889'), //options object is Optional
})
);

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
