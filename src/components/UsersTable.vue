<template>
  <div class="has-text-centered">
    <table class="table is-striped">
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th><abbr title="Phone Number">Telephone</abbr></th>
        <th>Area</th>
        <th>Position</th>
        <th>Date Registered</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users">
        <th>{{ user.id }}</th>
        <th>{{ user.name }}</th>
        <th>{{ user.email }}</th>
        <th>{{ user.telefono }}</th>
        <th>{{ user.area }}</th>
        <th>{{ user.puesto }}</th>
        <th>{{ user.created_at }}</th>
        <th>
          <div class="buttons">
            <button @click="viewUser(user)" class="button is-small is-info"><span class="tooltip"><i
                data-feather="info"></i> <span class="tooltiptext">View</span></span></button>
            <button class="button is-small is-link"><span class="tooltip"><i data-feather="edit"></i> <span
                class="tooltiptext">Edit</span></span></button>
            <button class="button is-small is-danger"><span class="tooltip"><i data-feather="trash"></i> <span
                class="tooltiptext">Delete</span></span></button>
          </div>
        </th>
      </tr>
      </tbody>
    </table>
    <div class="modal-container">
<!--      view modal-->
      <Modal :is-active="viewShow" @close="viewShow = false">
        <div class="card p-4">
          <div class="container has-text-centered mb-3">
            <h1 class="title">Register a New User</h1>
          </div>
          <form @submit.prevent="handleRegister">
            <RegisterForm :user-data="userData"/>
          </form>
        </div>

      </Modal>
    </div>

    <Pagination/>
  </div>
</template>

<script>
import Pagination from "./Pagination";
import Modal from "./Modal";
import RegisterForm from "./RegisterForm";
export default {
  name: "UsersTable",
  data() {
    return {
      viewShow: false,
      viewEdit: false,
      userData:{
        name: '',
        email: '',
        pass1: '',
        pass2: '',
        telefono: '',
        area: '',
        puesto:''
      }
    }
  },
  components: {
    Pagination, Modal, RegisterForm
  },
  props: {
    users: Array
  },
  methods: {
    viewUser(user) {
      this.viewShow = true
      console.log(user)
      const updatedUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        puesto: user.puesto,
        telefono: user.telefono,
        role_id: user.role_id,
        area: user.area,
      }
    },
  },
  computed: {},
  mounted() {
    feather.replace()
  }
}

</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #474444;
  color: #d4d4d4;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>