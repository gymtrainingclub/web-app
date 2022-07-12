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
            placeholder="xxxxxxxxxx"
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

        <b-button style="background: #0c303d">Save</b-button>
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
    }
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