<template>
 <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {addClass} from 'common/js/dom'
  import BScroll from 'better-scroll'
  import {mapGetters} from 'vuex'
  import {eventBus} from '../eventBus.js'

  export default {
    name: 'slider',
    props: {
      loop: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      ...mapGetters([
        'currentIndex',
        'currentSong',
        'playList'
      ])
    },
    watch: {
      currentIndex(newval){
        setTimeout(() => {
          this._playTo(newval)
        }, 20)
      }
    },
    mounted() {
      setTimeout(() => {
        this._setSliderWidth()
        this._initSlider()
      }, 40)

      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this.slider.refresh()
      })

      eventBus.$on('on-select',()=>{
        this.slider.refresh()
        this._playTo(this.currentIndex)
      })
    },
    methods: {
      _setSliderWidth(isResize) {
        this.children = this.$refs.sliderGroup.children

        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth

        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]

          child.style.width = `${sliderWidth}px`

          width += sliderWidth
        }

        if (this.loop && !isResize) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: false,
            threshold: 0.3,
            speed: 400
          },
          click:true
        })
        this._playTo(this.currentIndex)
        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX

          if (pageIndex > this.playList.length - 1) {
            console.log('>')
            this.$emit('songNext')
            this._playTo(0)
            return
          }else if(pageIndex == this.currentIndex - 1) {
            this.$emit('songPrev')
            console.log('=-1')
            return
          }else if(pageIndex == this.currentIndex + 1){
            console.log('=+1')
            this.$emit('songNext')
            return
          }
        })
        this.slider.on('beforeScrollStart', () => {
          let pageIndex = this.slider.getCurrentPage().pageX
          if(pageIndex !== this.currentIndex){
            this._playTo(this.currentIndex)
          }
        })
      },
      _playTo(index) {
        this.slider.goToPage(index, 0, 400)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"


</style>
