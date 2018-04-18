<template>
  <div id="app">
    <my-header></my-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <music-player></music-player>
  </div>
</template>

<script>
import MyHeader from 'components/m-header/myHeader.vue'
import Tab from 'components/tab.vue'
import MusicPlayer from './components/music-player.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    Tab,
    MusicPlayer
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
