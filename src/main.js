import Vue from 'vue'
import App from './App.vue'
import Bootstrap from "./assets/scss/custom.scss"
import VueRouter from "vue-router";
import router from "./router";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false
Vue.use(Bootstrap)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
