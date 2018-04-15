<template>
  <transition name="slide">
    <music-list :title='title' :bgImage='bgImage' :songs='songs' :singer="singer"></music-list>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from '../../../api/singer.js'
import {ERR_OK} from '../../../api/config.js'
import {createSong} from 'common/js/song'
import MusicList from './musiclist/musiclist.vue'
export default {
  computed: {
    ...mapGetters([
      'singer'
    ]),
    title() {
      return this.singer.name
    },
    bgImage() {
      return this.singer.avatar
    },
  },
  data() {
    return {
      songs:[]
    }
  },
  created() {
    this._getSingerDetail()
  },
  methods: {
    _getSingerDetail() {
      if(!this.singer.id) {
        this.$router.push({
          path:'/singer'
        })
        return
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code == ERR_OK) {
          this.songs = this._normalizeSongs(res.data.list)
        }
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((item) => {
        let {musicData} = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  components: {
    MusicList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
