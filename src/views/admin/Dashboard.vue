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
export default {
  name: "Dashboard",
  components:{
    UsersTable,
  },
  data(){
    return{
      users:[
        {
          "id": 1,
          "name": "Jahdiel castaneda",
          "email": "jado99kc@gmail.com",
          "email_verified_at": null,
          "telefono": "9831928383",
          "area": "Administracion",
          "puesto": "Administrador de Empresa",
          "role_id": 1,
          "created_at": "2021-02-17",
          "updated_at": "2021-02-17"
        }
      ]
    }
  },

}
</script>

<style scoped>

</style>