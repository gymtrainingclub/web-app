<template>
  <div>
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/admin/Dashboard/class">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        New Admin
      </h3>
      <div class="mt-4 new">
        <b-form-group class="input">
          <label><strong>Class Name</strong></label>
          <b-form-input type="text" trim></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Trainer</strong></label>
          <b-form-input type="text" trim></b-form-input>
        </b-form-group>
        <b-form-group class="input-select">
          <label><strong>Choose Category</strong></label>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Date</strong></label>
          <b-form-input type="text" trim> </b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Time</strong></label>
          <b-form-input type="text" trim></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Link/Location</strong></label>
          <b-form-input type="text" trim></b-form-input>
        </b-form-group>
        <b-button style="background: #0c303d">Save</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/NavbarView.vue'

export default {
  name: 'NewClass',
  components: {
    NavbarView,
  },
  data() {
    return {
      selected: '',
      options: [{ text: 'Online Class' }, { text: 'Offline Class' }],
    }
  },
}
</script>
<style scoped>
.input {
  max-width: 70%;
}
.input-select {
  max-width: 20%;
}
a {
  text-decoration: none;
  color: black;
}
.new {
  padding-left: 35px;
}
</style>