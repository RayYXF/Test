import Vue from 'vue'
import Router from 'vue-router'
import combinationMarketing from '@/components/combinationMarketing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'combinationMarketing',
      component: combinationMarketing
    }
  ]
})
