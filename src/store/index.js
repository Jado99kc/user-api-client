import Vue from 'vue'
import Vuex from 'vuex'
import router from "../router";
Vue.use(Vuex)
const defaultURL = 'http://users-api.test/api'
export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    users: [],
    pagination:null
  },
  mutations: {
    set_token(state, payload){
      state.token =  payload
    },
    set_user(state, payload){
      state.user = payload
    },
    set_users(state, payload){
      state.users = payload
    },
    set_pagination(state, payload){
      state.pagination = payload
    },
    add_user(state, payload) {
      state.users.push(payload)
    },
    edit_user(state, payload) {
      if (!state.users.find(x => x.id === payload)) {
        router.push('/admin/dashboard')
      }
      state.post = state.users.find(x => x.id === payload)
    },
    update_user(state, payload) {
      state.users = state.users.map(x => x.id === payload.id ? payload : x)
      router.push('/posts')
    },
    delete_user(state, payload) {
      state.users = state.users.filter(x => x.id !== payload);
    }
  },
  actions: {
    verifyLogin({commit}){
      if(localStorage.getItem('user') && localStorage.getItem('token')){
        commit('set_user', JSON.parse(localStorage.getItem('user')))
        commit('set_token', JSON.parse(localStorage.getItem('token')))
      }
      else {
        commit('set_user', null)
        commit('set_token', null)
      }
      },
    async register({commit, dispatch}, formData){
      try {
          const dataAuth =  await fetch(`${defaultURL}/auth/register`,{
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          })
        const response = await dataAuth.json()
        console.log(response.status)
        if(response == null){
          await router.push('/register')
        }else{
          localStorage.setItem('newUser', 'true')
          await router.push('/login')
        }
      }catch(e){
        console.log(e)
      }
    },
    async signIn({commit, dispatch, getters}, formData) {
      try {
        const dataAuth = await fetch(`${defaultURL}/auth/login`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        const response = await dataAuth.json()
        console.log(response.token)
        commit('set_token', response.token)
        await dispatch('getUser')
        if(getters.userIsAdmin){
          await router.push('/admin/dashboard')
        }else{
          await router.push('/dashboard')
        }
        await localStorage.setItem('token', JSON.stringify(response.token))
      } catch (e) {
        console.log(e)
      }
    },
    async signOut({commit}) {
      try {
        commit('set_token', null)
        commit('set_user', null)
        await router.push('/')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
      } catch (e) {
        console.log(e)
      }
    },
    async getUser({commit, state},){
      try {
        const userData = await fetch(`${defaultURL}/user`, {
          headers: {
            'Authorization': 'Bearer' + state.token
          },
        })
        const user =  await userData.json()
        await localStorage.setItem('user', JSON.stringify(user))
        commit('set_user', user)
      } catch (e){
        console.log(e)
      }
    },
    async addUser({commit}){
      try {
        const dataAuth =  await fetch(`${defaultURL}/auth/register`,{
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
        const response = await dataAuth.json()
        console.log(response.status)
        if(response == null){
          return 'Error Creating User'
        }else{
          commit('add_user', response)
        }
      }catch(e){
        console.log(e)
      }
    }
  },
  modules: {
  },
  getters:{
    userIsAuthenticated(state){
      return !!state.user && state.token
    },
    userIsAdmin(state){
      if(state.user){
        return state.user.role_id === 1
      }
    }
  },
})
