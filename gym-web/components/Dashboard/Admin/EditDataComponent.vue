<template>
  <div>
    <div class="mt-4 new">
      <b-form-group class="input">
        <label><strong>Admin Name</strong></label>
        <b-form-input type="text" trim></b-form-input>
      </b-form-group>
      <b-form-group class="input">
        <label><strong>ID Admin</strong></label>
        <b-form-input type="text" trim></b-form-input>
      </b-form-group>
      <b-form-group class="input">
        <label><strong>No Handphone</strong></label>
        <b-form-input type="text" trim></b-form-input>
      </b-form-group>
      <b-form-group class="input">
        <label><strong>Password</strong></label>
        <b-form-input type="text" trim></b-form-input>
      </b-form-group>
      <b-form-group class="input">
        <label><strong>Confirm Password</strong></label>
        <b-form-input type="text" trim></b-form-input>
      </b-form-group>

      <b-button style="background: #0c303d">Save</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditDataAdmin',
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