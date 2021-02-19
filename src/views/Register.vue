<<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="card column is-rounded is-one-third mt-6">
        <div class="card-content p-3">
          <div class="container has-text-centered mb-3">
            <h1 class="title">Register</h1>
          </div>
          <form @submit.prevent="handleRegister">
            <RegisterForm :view="true" :user-data="userData" btn-name="Register" :disable-fields="false" :original="true"/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import RegisterForm from "../components/RegisterForm";
export default {
  components:{
    RegisterForm
  },
  data(){
    return{
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
  methods: {
    ...mapActions(['register']),
    handleRegister() {
      const user = {
        name: this.userData.name,
        email: this.userData.email,
        password: this.userData.pass1,
        telefono: this.userData.telefono,
        area: this.userData.area,
        puesto:this.userData.puesto
      }
      this.register(user)
      this.userData = {
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
}
</script>

<style>
</style>
