<template>
  <div>
    <div class="d-flex justify-content-center">
      <div width="429px">
        <b-img
          height="313px"
          class="img"
          src="@/assets/img/logo-transparan.png"
        ></b-img>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <b-form-group id="form">
        <b-form-input
          v-model="username"
          class="mb-4"
          type="text"
          placeholder="Id Admin"
        ></b-form-input>
        <b-form-input
          v-model="pass"
          type="password"
          name="password"
          placeholder="Password"
        ></b-form-input>
        <NuxtLink to="/dashboard">
          <div class="d-flex justify-content-center">
            <b-button class="mt-4 login" block> LOGIN </b-button>
          </div>
        </NuxtLink>
        <div class="d-flex justify-content-center mt-4">
          <a href="#">Forget Password?</a>
        </div>
      </b-form-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      pass: '',
    }
  },
  methods: {
    // sumbit() {
    //   const username = this.username
    //   const password = this.pass
    //   if (username === 'cleo' && password === '123') {
    //     this.$router.push('/dashboard')
    //     alert('login berhasil')
    //   } else {
    //     alert('id atau password salah')
    //   }
    // },
  },
}
</script>
<style >
.login {
  width: 35%;
  background-color: #f15a24;
}
.login:hover {
  background-color: #f15a24;
  text-decoration: none;
}
#form {
  width: 50%;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: none;
}
</style>
