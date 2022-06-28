<template>
  <div class="d-flex justify-content-center box-center pb-3">
    <div class="card shadow-sm">
      <div class="card-body">
        <img
          src="@/assets/img/logo-transparan.png"
          alt="Logo"
          width="350"
          class="sm-mx-auto"
        />
        <form>
          <div class="form-group">
            <label for="exampleInputEmail">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
            />
          </div>
          <div class="form-group">
            <label for="exampleInputHP">Handphone</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputHP"
              placeholder="Ex : 08123456789"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputCity">City</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputCity"
              placeholder="Ex : Jakarta"
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
            />
          </div>
          <div class="form-group mt-3">
            <label for="exampleInputConfirm"> Confirm Password </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputConfirm"
              placeholder="Confirm Password"
            />
          </div>
          <button type="button" class="btn btn-primary w-100">
            Daftar Akun
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.box-center {
  width: 90%;
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media only screen and (max-width: 460px) {
  .sm-mx-auto {
    position: relative !important;
    top: 0%;
    right: 10%;
  }
}
</style>
