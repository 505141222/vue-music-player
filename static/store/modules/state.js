import {playMode} from '../../../src/common/js/config.js'
import {loadSearch,loadPlay,loadFavorite} from '../../../src/common/js/cache.js'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory:loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state
