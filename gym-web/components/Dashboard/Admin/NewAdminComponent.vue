<template>
  <div id="new-admin">
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/Dashboard/Admin/admin-data">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        New Admin
      </h3>
      <div class="mt-4 new">
        <b-form-group class="input">
          <label><strong>Admin Name</strong></label>
          <b-form-input
            type="text"
            v-model="name"
            placeholder="Full Name"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Email Admin</strong></label>
          <b-form-input
            type="text"
            v-model="email"
            placeholder="Email Admin"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>No Handphone</strong></label>
          <b-form-input
            type="text"
            v-model="handphone"
            placeholder="628123456789"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Password</strong></label>
          <b-form-input
            type="password"
            v-model="password"
            placeholder="Password"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Confirm Password</strong></label>
          <b-form-input
            type="password"
            v-model="confirm_pass"
            placeholder="Confirm Password"
            trim
          ></b-form-input>
        </b-form-group>
        <p class="text-danger">{{ error }}</p>

        <b-button style="background: #0c303d" @click="addAdmin">
          Save
        </b-button>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'

export default {
  name: 'NewAdminComponent',
  components: {
    NavbarView,
  },
  data() {
    return {
      name: '',
      email: '',
      handphone: '',
      password: '',
      confirm_pass: '',
      created: '',
      error: '',
    }
  },
  methods: {
    addAdmin() {
      const user = JSON.parse(localStorage.getItem('data'))
      if (user.id != 1) {
        this.error = "Sorry, You don't have an access"
        return false
      }

      if (this.password != this.confirm_pass) {
        this.error = "Password and confirm password didn't match"
        return false
      }

      let data = {
        name: this.name,
        email: this.email,
        handphone: this.handphone,
        password: this.password,
        created: this.created,
      }

      this.$axios
        .post(
          'https://capstone-gym-project.herokuapp.com/api/v1/admin/add',
          data
        )
        .then((result) => {
          console.log(result)
          this.$router.push('/dashboard/admin')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
<style scoped>
#new-admin {
  font-family: 'Roboto', sans-serif;
}
.input {
  max-width: 70%;
}
a {
  text-decoration: none;
  color: black;
}
.new {
  padding-left: 35px;
}
</style>
