<template>
  <div class="modal" :class="{'is-active': this.isActive}">
    <div class="modal-background"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
name: "Modal",
  props:{
  isActive: Boolean
  },
  data(){
  return{

  }
  },
}
</script>

<style scoped>
.modal{
  overflow: hidden;
}
</style>