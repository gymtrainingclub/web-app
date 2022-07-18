<template>
  <div id="profile">
    <NavbarView />
    <b-container class="p-5 mt-5">
      <h2>Profile</h2>
      <b-row class="mt-5">
        <b-col cols="12" sm="4" md="4" class="text-center">
          <div>
            <b-avatar :src="profiles.photo" size="6rem"></b-avatar>
            <div class="mt-2 text-center">
              <h5>{{ name }}</h5>
              <p style="font-size: 15px" v-if="id == 1">Super Admin</p>
              <p style="font-size: 15px" v-if="id > 1">Admin</p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="8">
          <b-form>
            <b-form-group>
              <label><strong> ID Admin </strong></label>
              <b-form-input class="input" v-model="id" disabled></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> Nama </strong></label>
              <b-form-input class="input" v-model="name"></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> Email </strong></label>
              <b-form-input
                type="email"
                class="input"
                v-model="email"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> Password </strong></label>
              <b-form-input class="input" type="password" v-model="password">
              </b-form-input>
              <!-- <b-icon icon="eye-slash-fill"></b-icon> -->
            </b-form-group>
            <div class="d-flex justify-content-end">
              <b-button
                @click="updateProfile"
                class="input-btn"
                style="background: #0c303d; width: 100px"
              >
                Change
              </b-button>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'
export default {
  name: 'ProfileComponent',
  components: {
    NavbarView,
  },
  data() {
    return {
      id: '',
      name: '',
      email: '',
      password: '',
      handphone: '',
      created: '',
    }
  },
  computed: {
    profiles() {
      return this.$store.state.profile
    },
  },
  mounted() {
    this.getProfile()
    // get data from localstorage
    let data = JSON.parse(localStorage.getItem('data'))
    this.id = data.id
    this.name = data.name
    this.email = data.email
    this.password = data.password
    this.handphone = data.handphone
    this.created = data.created
  },
  methods: {
    getProfile() {
      this.$store.dispatch('getProfile')
    },
    updateProfile() {
      const data = {
        id: this.id,
        name: this.name,
        email: this.email,
        password: this.password,
        handphone: this.handphone,
        created: this.created,
      }
      this.$axios
        .post(
          'https://capstone-gym-project.herokuapp.com/api/v1/admin/update',
          data
        )
        .then((result) => {
          localStorage.setItem('data', JSON.stringify(data))
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
<style scoped>
#profile {
  font-family: 'Roboto', sans-serif;
}
.input,
.input-btn {
  border-radius: 8px;
}
.input-btn {
  padding: 6px 16px 6px 16px;
}
</style>
