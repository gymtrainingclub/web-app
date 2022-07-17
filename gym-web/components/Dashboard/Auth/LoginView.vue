<template>
  <div id="login" class="box-center col-lg-7">
    <div class="card border-0 rounded">
      <div class="card-body">
        <div class="d-flex justify-content-center">
          <img src="@/assets/img/logo-transparan.png" alt="Logo" width="300" />
        </div>
        <form>
          <div class="form-group">
            <label for="exampleInputUsername">Email</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputUsername"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="form-group mt-3">
            <label for="exampleInputPassword">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <p class="text-danger">{{ error }}</p>
          <div class="text-right">
            <NuxtLink to="/user/auth/forgot-password" class="forgot-password">
              Forgot Password ?
            </NuxtLink>
          </div>
          <div class="d-flex justify-content-center mt-2">
            <button
              @click="handleLogin"
              type="button"
              class="btn btn-dark font-weight-bold shadow-lg"
            >
              Log In
            </button>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <NuxtLink
              to="/user/auth/register"
              class="btn btn-outline-dark font-weight-bold"
            >
              Log in as Customer
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    handleLogin() {
      this.$axios
        .post('https://project-app-forum.herokuapp.com/api/v1/admin/login', {
          email: this.email,
          password: this.password,
        })
        .then((result) => {
          localStorage.setItem('tokenID', result.data.token)
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err.response.data.message)
          this.error = err.response.data.message
        })
    },
  },
}
</script>

<style scoped>
#login {
  font-family: 'Roboto', sans-serif;
}
button {
  width: 30%;
}
.forgot-password:hover {
  text-decoration: none;
  color: black;
}
.box-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
}
@media only screen and (max-width: 460px) {
  button {
    width: 100%;
  }
}
</style>
