import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    puntaje1: 0,
    puntaje2: 0
  },
  mutations: {
    carga1(state, puntaje1){
      state.puntaje1 = puntaje1;
    },
    carga2(state, puntaje2){
      state.puntaje2 = puntaje2;
    }
  }
})

Vue.config.productionTip = false
Vue.prototype.axios = axios;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
