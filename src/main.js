// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/**
 * swiper引入
 */
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
import '../static/swiper/swiper-4.1.0.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

/**
 * 'axios'
 */
import axios from 'axios'
Vue.prototype.axios=axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
