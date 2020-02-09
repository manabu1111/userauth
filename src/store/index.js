/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idtoken: null,
    userId: null
  },
  mutations: {},
  actions: {
    signUp(_, authData) {
      axios
        .post('/accounts:signUp?key=AIzaSyApBLdGustYWk7BeMLAoYSYBljt7-s25RM', {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    login(_, authData) {
      axios
        .post(
          '/accounts:signInWithPassword?key=AIzaSyApBLdGustYWk7BeMLAoYSYBljt7-s25RM',
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          }
        )
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  },
  modules: {}
})
