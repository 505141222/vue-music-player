import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../App.vue'
import Recommend from '../components/recommend/recommend.vue'
import Rank from '../components/rank/rank.vue'
import Search from '../components/search/search.vue'
import Singer from '../components/singer/singer.vue'
import SingerDetail from '../components/singer/singer-detail/singer-detail.vue'
import Disc from '../components/recommend/disc/disc.vue'
import TopList from '../components/rank/top-list/top-list.vue'
import UserCenter from '../components/user-center/user-center.vue'

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
