<template>
  <div class="box-center">
    <div class="card border-0 rounded">
      <div class="card-body">
        <div class="d-flex justify-content-center">
          <img src="@/assets/img/logo-transparan.png" alt="Logo" width="300" />
        </div>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="exampleInputUsername">ID Admin</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputUsername"
              placeholder="ID Admin"
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
          <div class="text-right">
            <NuxtLink to="/auth/login" class="forgot-password">
              Forgot Password ?
            </NuxtLink>
          </div>
          <div class="d-flex justify-content-center mt-2">
            <button
              type="button"
              class="btn btn-dark font-weight-bold shadow-lg"
            >
              Log In
            </button>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <NuxtLink
              to="/auth/register"
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
    }
  },
  methods: {
    handleLogin() {
      this.$axios
        .post('/login', {
          email: this.email,
          password: this.password,
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

<style scoped>
button {
  width: 30%;
}
.forgot-password:hover {
  text-decoration: none;
  color: black;
}
.box-center {
  width: 55%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media only screen and (max-width: 460px) {
  .box-center {
    width: 90%;
    top: 65%;
    padding-bottom: 5%;
  }
  button {
    width: 100%;
  }
}
</style>
