import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 0
}
const mutations = {
  add (state, num) {
    state.count += num
  },
  reduce (state) {
    state.count--
  }
}
const getters = {
  count: (state) => {
    return state.count
  }
}
const actions = {
  addAction: ({commit}) => {
    commit('add', 10)
  },
  reduceAction: ({commit}) => {
    commit('reduce')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
