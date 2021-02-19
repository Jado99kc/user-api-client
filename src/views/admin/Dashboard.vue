<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-full">
          <UsersTable :users="users" ></UsersTable>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UsersTable from "../../components/UsersTable";
import {mapActions, mapState} from "vuex";
export default {
  name: "Dashboard",
  components:{
    UsersTable,
  },
  data(){
    return{

    }
  },

  methods:{
    ...mapActions(['fetchUsers'])
  },
  computed:{
    ...mapState(['users'])
  },
  mounted() {
    this.fetchUsers()
  },


}
</script>

<style scoped>

</style>