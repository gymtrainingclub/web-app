<template>
  <div class="col-lg-8 center">
    <div class="card shadow-sm">
      <div class="card-body">
        <img src="@/assets/img/logo-transparan.png" alt="Logo" width="350" />
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Dwi Rifki Novianto',
    }
  },
}
</script>
<style scoped>
.center {
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
