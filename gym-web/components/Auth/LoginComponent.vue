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
        <b-row>
          <b-col cols="12">
            <b-form-input
              v-model="email"
              class="mb-4"
              type="text"
              placeholder="Id Admin"
            ></b-form-input>
          </b-col>
          <b-col cols="12">
            <b-form-input
              v-model="pass"
              type="password"
              name="password"
              placeholder="Password"
            ></b-form-input>
          </b-col>
          <b-col cols="12">
            <div class="d-flex justify-content-center">
              <b-button
                style="background-color: #f15a24"
                class="mt-4 login"
                block
                @click="handleLogin()"
              >
                LOGIN
              </b-button>
            </div>
          </b-col>
        </b-row>
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
      email: '',
      pass: '',
    }
  },
  methods: {
    handleLogin() {
      this.$axios
        .post('/login', {
          email: this.email,
          pass: this.pass,
        })
        .then((res) => {
          if (res.data.status === 'success') {
            console.log(res)
            localStorage.setItem('token', res.data.data.token)
            this.$router.push('/dashboard')
          }
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
<style >
/* .login {
  width: 35%;
  background-color: #f15a24;
} */
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
