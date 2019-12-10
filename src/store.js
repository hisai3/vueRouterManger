import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  increment(state,payload){
    state.count+=payload
  },
  decrement(state){
    state.count--
  }
}

const actions={
  increment: ({commit},payload)=>{
    commit('increment',payload)
  },
  decrement: ({commit})=>{
    commit('decrement')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})