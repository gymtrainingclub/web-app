<template>
  <div class="box-center col-lg-7">
    <div class="card shadow-lg border-0 rounded">
      <div class="card-body">
        <div class="d-flex justify-content-center">
          <NuxtLink to="/user/auth/login">
            <img
              src="@/assets/img/logo-transparan.png"
              alt="Logo"
              width="350"
            />
          </NuxtLink>
        </div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputName">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              placeholder="Full Name"
              v-model="fullName"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputHP">Handphone</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputHP"
              placeholder="Ex : 08123456789"
              v-model="handphone"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputCity">City</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputCity"
              placeholder="Ex : Jakarta"
              v-model="city"
            />
          </div>
          <label class="form-check-label mb-2">Jenis Kelamin</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="Male"
              v-model="gender"
            />
            <label class="form-check-label" for="male"> Laki-Laki </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="Female"
              v-model="gender"
            />
            <label class="form-check-label" for="female"> Perempuan </label>
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
          <div class="form-group mt-3">
            <label for="exampleInputConfirm"> Confirm Password </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputConfirm"
              placeholder="Confirm Password"
              v-model="confirmPassword"
            />
          </div>
          <div class="d-flex justify-content-center mt-4">
            <button
              type="button"
              class="btn btn-dark font-weight-bold"
              @click="handleRegister"
            >
              Register
            </button>
          </div>
          <div class="text-center mt-3">
            Have account ?
            <NuxtLink to="/user/auth/login" class="text-primary">
              Login
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      email: '',
      fullName: '',
      handphone: '',
      city: '',
      gender: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    handleRegister() {
      this.$axios
        .post(
          'https://virtserver.swaggerhub.com/imanuelpay/gym-api/1.0.0/register',
          {
            name: this.fullName,
            gender: this.gender,
            handphone: this.handphone,
            city: this.city,
            email: this.email,
            password: this.password,
            confirm_password: this.confirmPassword,
          }
        )
        .then((res) => {
          console.log(res)
          this.$router.push('/user/auth/verification')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>
button {
  width: 30%;
}
.box-center {
  position: absolute;
  left: 50%;
  padding-bottom: 3%;
  transform: translate(-50%, 3%);
}
@media only screen and (max-width: 460px) {
  .box-center {
    padding-bottom: 5%;
  }
  button {
    width: 100%;
  }
}
</style>
