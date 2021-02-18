<<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="card column is-rounded is-one-third mt-6">
        <div class="card-content p-3">
          <div class="container has-text-centered mb-3">
            <h1 class="title">Register</h1>
          </div>
          <form @submit.prevent="handleRegister">
            <RegisterForm :user-data="userData"/>
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
      this.register(this.userData)
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
