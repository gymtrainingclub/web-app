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
          class="mb-4"
          type="text"
          placeholder="Id Admin"
        ></b-form-input>
        <b-form-input type="password" placeholder="Password"></b-form-input>
        <div class="d-flex justify-content-center">
          <b-button class="mt-4 btn" block>LOGIN</b-button>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <a href="#">Forget Password?</a>
        </div>
      </b-form-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
}
</script>
<style>
.btn {
  width: 35%;
  background-color: #f15a24;
}
#form {
  width: 50%;
}
</style>