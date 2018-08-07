import Vue from 'vue'
import App from './App.vue'



import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'

import router from './routes/router.js'

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
