
const state = {
  singer: {}
}

const getters = {
  singer:state => state.singer
}


const actions = {
}


const mutations = {
  SET_SINGER(state, singer) {
    state.singer = singer
  },
}

export default{
  state,
  getters,
  actions,
  mutations
}

