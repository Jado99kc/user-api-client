<template>
  <div id="app">
    <Navbar></Navbar>
      <router-view/>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import {mapActions} from "vuex";

export default {
  components:{
    Navbar
  },
  methods:{
    ...mapActions(['verifyLogin'])
  },
  created() {
    this.verifyLogin()
  },
  mounted() {
    this.verifyLogin()
  }
}
</script>
<style>

</style>
