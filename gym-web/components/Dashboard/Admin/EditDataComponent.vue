<template>
  <div>
    <div class="mt-4 new">
      <b-form-group class="input">
        <label><strong>ID Admin</strong></label>
        <b-form-input type="text" trim v-model="id" disabled></b-form-input>
      </b-form-group>
      <b-form-group class="input">
        <label><strong>Admin Name</strong></label>
        <b-form-input type="text" trim v-model="name"></b-form-input>
      </b-form-group>
      <b-form-group class="input">
        <label><strong>Email</strong></label>
        <b-form-input type="text" trim v-model="email"></b-form-input>
      </b-form-group>
      <b-form-group class="input">
        <label><strong>No Handphone</strong></label>
        <b-form-input type="text" trim v-model="handphone"></b-form-input>
      </b-form-group>
      <b-form-group class="input">
        <label><strong>Password</strong></label>
        <b-form-input type="text" trim v-model="password"></b-form-input>
      </b-form-group>
      <b-form-group class="input">
        <label><strong>Confirm Password</strong></label>
        <b-form-input type="text" trim v-model="confirm_pass"></b-form-input>
      </b-form-group>
      <p class="text-danger">{{ error }}</p>
      <b-button style="background: #0c303d" @click="updateAdmin">
        Save
      </b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditDataAdmin',
  data() {
    return {
      id: '',
      name: '',
      email: '',
      handphone: '',
      password: '',
      confirm_pass: '',
      error: '',
    }
  },
  mounted() {
    let id = localStorage.getItem('update')
    this.$axios
      .get('https://capstone-gym-project.herokuapp.com/api/v1/admin/show', {
        params: { id: id },
      })
      .then((result) => {
        console.log(result.data.result[0])
        let data = result.data.result[0]
        this.id = data.id
        this.name = data.name
        this.email = data.email
        this.handphone = data.handphone
        this.password = data.password
        this.confirm_pass = data.password
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    updateAdmin() {
      const user = localStorage.getItem('data')
      if (user.id != 1) {
        this.error = "You don't have an access"
        return false
      }
      if (this.password != this.confirm_pass) {
        this.error = "Password and confirm password didn't match"
        return false
      }
      let data = {
        id: this.id,
        name: this.name,
        email: this.email,
        handphone: this.handphone,
        password: this.password,
      }
      this.$axios
        .post(
          'https://capstone-gym-project.herokuapp.com/api/v1/admin/update',
          data
        )
        .then((result) => {
          console.log(result)
          this.$router.push('/dashboard/admin/admin-data')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
<style scoped>
.input {
  max-width: 70%;
}
.new {
  padding-left: 35px;
}
</style>
