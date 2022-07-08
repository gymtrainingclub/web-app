<template>
  <div>
    <!-- <h3>New Admin</h3> -->
    <div class="mt-4 new">
      <b-form-group v-for="input in inputs" :key="input" class="input">
        <label
          ><strong>{{ input.label }}</strong></label
        >
        <b-form-input :type="input.type" trim></b-form-input>
      </b-form-group>
      <b-button style="background: #0c303d">Save</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditDataAdmin',
  data() {
    return {
      inputs: [
        { label: 'Admin Name', type: 'text', placeholder: 'Full Name' },
        { label: 'Id Admin', type: 'text', placeholder: 'Id Number' },
        { label: 'No Handphone', type: 'text', placeholder: 'xxxxxxxxxxxx' },
        { label: 'Password', type: 'password', placeholder: 'Password' },
        {
          label: 'Confirm Password',
          type: 'password',
          placeholder: 'Confirm Password',
        },
      ],
    }
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