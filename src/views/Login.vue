<template>
  <div class="container">
    <div v-show="newuser" class="notification is-primary has-text-centered">
      Congratulations! You can now log in to our site!
    </div>
    <div class="columns is-centered">
      <div class="card column is-rounded is-two-fifths mt-6">
        <div class="card-content">
          <div class="container has-text-centered mb-3">
            <h1 class="title">Login</h1>
          </div>
          <form @submit.prevent="processForm">
            <div class="field">
              <label for="email" class="label">Email</label>
              <div class="control">
                <input type="email" class="input" id="email" v-model="userData.email"/>
              </div>
            </div>
            <div class="field">
              <label for="password" class="label">Password</label>
              <div class="control">
                <input id="password" type="password" class="input" v-model="userData.password"/>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link" :disabled="blockButton">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  data() {
    return {
      userData: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions(['signIn']),
    processForm() {
      this.signIn(this.userData)
      this.userData = {
        email: '',
        password: '',
      }
    }
  },
  computed: {
    blockButton() {
      if (!this.userData.email.includes('@')) {
        return true
      }
      return !(this.userData.password.length > 5);
    },
    newuser(){
      const check = localStorage.getItem('newUser')
      return check === 'true'
    }
  }
}
</script>

<style>
</style>