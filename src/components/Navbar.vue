<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img alt="logo" src="@/assets/admin-logo.png">
        <h3 class="ml-1 has-text-weight-bold">User Manager</h3>
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu navbar-menu animate__animated animate__fadeInDown" :class="{ 'is-active': menuActive }">
      <div class="navbar-start" v-if="userIsAuthenticated">
        <router-link v-if="!userIsAdmin" class="navbar-item" :to="{name:'Dashboard'}">
          Dashboard
        </router-link>

        <router-link v-else class="navbar-item" :to="{name:'adminDashboard'}">
          Admin Dashboard
        </router-link>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <div class="public" v-if="!userIsAuthenticated">
              <router-link class="button is-info"  :to="{name:'Register'}">
                <strong>Sign up</strong>
              </router-link>
              <router-link class="button is-light" :to="{name:'Login'}" @click.native="removeAlert">
                Log in
              </router-link>
            </div>

            <form @submit.prevent="handleLogout()" v-else>
              <button class="button is-info" type="submit">Logout</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
name: "Navbar",
  data(){
    return {
      menuActive: false
    }
  },
  methods:{
    ...mapActions(['signOut']),
    handleLogout(){
      this.signOut()
    },
    toggleMenu() {
      this.menuActive = !this.menuActive
    },
    removeAlert(){
      localStorage.removeItem('newUser')
    }
  },
  computed:{
  ...mapGetters(['userIsAuthenticated', 'userIsAdmin']),
  }
}
</script>

<style scoped>

</style>