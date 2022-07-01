import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
  newsletter: [],
  profile: [],
  instructors: [],
  memberships: [],
  class: [],
})

export const mutations = {
  setNewsletter(state, param) {
    state.newsletter = param
  },
  setProfile(state, param) {
    state.profile = param
  },
  setInstructor(state, param) {
    state.instructors = param
  },
  setMembership(state, param) {
    state.memberships = param
  },
  setClass(state, param) {
    state.class = param
  },
}

export const actions = {
  getNewsletter(Store) {
    axios
      .get(
        'https://virtserver.swaggerhub.com/imanuelpay/gym-api/1.0.0/newsletter'
      )
      .then((response) => {
        Store.commit('setNewsletter', response.data.data)
      })
  },
  getProfile(Store) {
    axios
      .get('https://virtserver.swaggerhub.com/imanuelpay/gym-api/1.0.0/profile')
      .then((response) => {
        Store.commit('setProfile', response.data.data)
      })
  },
  getInstructor(Store) {
    axios
      .get(
        'https://virtserver.swaggerhub.com/imanuelpay/gym-api/1.0.0/instructor'
      )
      .then((response) => {
        Store.commit('setInstructor', response.data.data)
      })
  },
  getMembership(Store) {
    axios
      .get(
        'https://virtserver.swaggerhub.com/imanuelpay/gym-api/1.0.0/membership'
      )
      .then((response) => {
        Store.commit('setMembership', response.data.data)
      })
  },
  getClass(Store) {
    axios
      .get('https://virtserver.swaggerhub.com/imanuelpay/gym-api/1.0.0/class')
      .then((response) => {
        console.log('response', response.data.data)
        Store.commit('setClass', response.data.data)
      })
  },
}
