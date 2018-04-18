import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../App.vue'
import Recommend from '../pages/recommend.vue'
import Rank from '../pages/rank.vue'
import Search from '../pages/search.vue'
import Singer from '../pages/singer.vue'
import SingerDetail from '../pages/singer/singer-detail.vue'
import Disc from '../pages/recommend/disc.vue'
import TopList from '../pages/rank/top-list.vue'
import UserCenter from '../pages/user-center.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      componet: IndexPage,
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
        path: ':id',
        component: SingerDetail
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
        path: ':id',
        component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
