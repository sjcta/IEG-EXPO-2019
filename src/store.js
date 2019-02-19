import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    states: 'turn-left',
    showDoor: true
  },
  getters: {
    getPanelById: (state) => (id) => {
      return state.panelInfo.find(p => p.id === id)
    }
  },
  mutations: {
    setTransition (state, states) {
      state.states = states
    }
  },
  actions: {
  }
})
