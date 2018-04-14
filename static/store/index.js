import Vuex from "vuex"
import Vue from 'vue'
import * as actions from './modules/actions.js'
import * as getters from './modules/getters.js'
import state from './modules/state.js'
import mutations from './modules/mutations.js'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
