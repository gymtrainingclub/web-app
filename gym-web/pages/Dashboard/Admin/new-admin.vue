<template>
  <div>
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/Dashboard/Admin/admin-data">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        New Admin
      </h3>
      <div class="mt-4 new">
        <b-form-group v-for="input in inputs" :key="input" class="input">
          <label
            ><strong>{{ input.label }}</strong></label
          >
          <b-form-input
            :type="input.type"
            :placeholder="input.placeholder"
            trim
          ></b-form-input>
        </b-form-group>
        <b-button style="background: #0c303d">Save</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/NavbarView.vue'

export default {
  name: 'NewAdmin',
  components: {
    NavbarView,
  },
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
a {
  text-decoration: none;
  color: black;
}
.new {
  padding-left: 35px;
}
</style>