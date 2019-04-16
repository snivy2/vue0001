import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css';
import './assets/base.css'
import Vuex from 'vuex'

import router from './router/router'

Vue.use(Vuex);
Vue.use(ElementUI);


const store = new Vuex.Store({
  state: {
    test:5
  },
  mutations: {
    

  }
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
