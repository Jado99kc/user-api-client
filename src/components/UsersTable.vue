<template>
  <div>
    <div class="m-2 has-text-right">
      <button @click="viewAdd = true" class="button is-primary">Add New User</button>
    </div>

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
              <button @click="viewUser(user)" class="button is-small is-info"><span class="tooltip"><ion-icon
                  name="eye-outline"></ion-icon><span class="tooltiptext">View</span></span></button>
              <button @click="editUser(user)" class="button is-small is-link"><span class="tooltip"><ion-icon
                  name="create-outline"></ion-icon><span
                  class="tooltiptext">Edit</span></span></button>
              <button @click="handleDeleteUser(user.id)" class="button is-small is-danger"><span class="tooltip"><ion-icon
                  name="trash-outline"></ion-icon> <span
                  class="tooltiptext">Delete</span></span></button>
            </div>
          </th>
        </tr>
        </tbody>
      </table>
      <div class="modal-container">
        <!--      view modal-->
        <Modal :is-active="viewShow" @close="handleHideModal">
          <div class="card p-4">
            <div class="container has-text-centered mb-3">
              <h1 class="title">User Data</h1>
            </div>
            <RegisterForm :view="false" :user-data="userData" :disable-fields="true" btn-name="Register"/>
          </div>
        </Modal>

        <!--      edit modal-->
        <Modal :is-active="viewEdit" @close="handleHideModal">
          <div class="card p-4">
            <div class="container has-text-centered mb-3">
              <h1 class="title">Edit User Data</h1>
            </div>
            <form @submit.prevent="handleUpdateUser">
              <RegisterForm :view="true" :user-data="userData" :disable-fields="false" :original="false"
                            btn-name="Update"/>
            </form>
          </div>
        </Modal>

        <!--      Add modal-->
        <Modal :is-active="viewAdd" @close="handleHideModal">
          <div class="card p-4">
            <div class="container has-text-centered mb-3">
              <h1 class="title">Add New User</h1>
            </div>
            <form @submit.prevent="handleAddUser">
              <RegisterForm :view="true" :user-data="userData" btn-name="Create" :disable-fields="false" :original="true"/>
            </form>
          </div>
        </Modal>

      </div>

      <Pagination :total-pages="pagination.last_page"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import Pagination from "./Pagination";
import Modal from "./Modal";
import RegisterForm from "./RegisterForm";

export default {
  name: "UsersTable",
  data() {
    return {
      viewShow: false,
      viewEdit: false,
      viewAdd: false,
      userData: {
        id: '',
        name: '',
        email: '',
        telefono: '',
        role_id: '',
        area: '',
        puesto: ''
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
    ...mapActions(['addUser', 'updateUser', 'deleteUser']),
    handleHideModal(){
      this.viewShow = false
      this.viewEdit= false
      this.viewAdd= false
      this.viewEdit = false
      this.userData.id = ''
      this.userData.name = ''
      this.userData.email = ''
      this.userData.telefono = ''
      this.userData.role_id = ''
      this.userData.area = ''
      this.userData.puesto = ''
    },
    viewUser(user) {
      this.viewShow = true
      this.userData.id = user.id
      this.userData.name = user.name
      this.userData.email = user.email
      this.userData.puesto = user.puesto
      this.userData.telefono = user.telefono
      this.userData.role_id = user.role_id
      this.userData.area = user.area
    },

    editUser(user) {
      console.log(user)
      this.userData.id = user.id
      this.userData.name = user.name
      this.userData.email = user.email
      this.userData.puesto = user.puesto
      this.userData.telefono = user.telefono
      this.userData.role_id = user.role_id
      this.userData.area = user.area
      this.viewEdit = true
    },
    async handleUpdateUser() {
      await this.updateUser(this.userData)

    },
    handleDeleteUser(id) {
      this.deleteUser(id)
    },
    handleAddUser(){
      this.addUser(this.userData)
      this.viewAdd = false
      this.userData.id = ''
      this.userData.name = ''
      this.userData.email = ''
      this.userData.telefono = ''
      this.userData.role_id = ''
      this.userData.area = ''
      this.userData.puesto = ''
    }
  },
  computed: {
    ...mapState(['pagination'])
  },

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