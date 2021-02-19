<template>
  <div>
    <div class="field">
      <label for="username" class="label">Name *</label>
      <div class="control">
        <input type="text" class="input" id="username" v-model="userData.name" :disabled="disableFields"/>
      </div>
    </div>
    <div class="field">
      <label for="email" class="label">Email *</label>
      <div class="control">
        <input type="email" class="input" id="email" v-model.trim="userData.email" :disabled="disableFields || !original"/>
      </div>
    </div>
    <div class="field">
      <label for="telefono" class="label">Telefono *</label>
      <div class="control">
        <input type="text" class="input" id="telefono" v-model.trim="userData.telefono" :disabled="disableFields"/>
      </div>
    </div>
    <div class="field">
      <label for="area" class="label">Area *</label>
      <div class="control">
        <input type="text" class="input" id="area" v-model.trim="userData.area" :disabled="disableFields"/>
      </div>
    </div>
    <div class="field">
      <label for="puesto" class="label">Puesto *</label>
      <div class="control">
        <input type="text" class="input" id="puesto" v-model.trim="userData.puesto" :disabled="disableFields"/>
      </div>
    </div>
    <div v-if="original" class="field">
      <label for="password" class="label">Password *</label>
      <div  class="control">
        <small v-if="view">Password must be atleast 7 characters long.</small>
        <input id="password" type="password" class="input" v-model.trim="userData.pass1" :disabled="disableFields"/>
      </div>
    </div>
    <div v-if="original" class="field">
      <label for="password2" class="label">Confirm Password</label>
      <div class="control">
        <input id="password2" type="password" class="input" v-model.trim="userData.pass2" :disabled="disableFields"/>
      </div>
    </div>
    <div v-if="view" class="field is-grouped">
      <div class="control">
        <button class="button is-link" :disabled="blockButton">{{btnName}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
  props:{
    userData:{},
    view: Boolean,
    disableFields: Boolean,
    original: Boolean,
    btnName: String
  },
  data() {
    return {
      hidden: true,
    }
  },
  computed: {
    blockButton() {
      if(this.original){
        if (!this.userData.email.includes('@')) {
          return true
        }
        return !(this.userData.pass1.length > 5 && this.userData.pass1 === this.userData.pass2);
      }
    },
  }
}
</script>

<style scoped>

</style>