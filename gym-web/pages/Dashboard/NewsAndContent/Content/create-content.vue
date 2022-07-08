<template>
  <div>
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/Dashboard/NewsAndContent/content">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        Create Content
      </h3>
      <div class="mt-4 new">
        <b-form-group class="input">
          <label><strong>Content Title</strong></label>
          <b-form-input type="text" placeholder="Title" trim></b-form-input>
        </b-form-group>
        <b-form-group class="input-file mr-4">
          <label><strong>Choose Video</strong></label>
          <b-form-file></b-form-file>
        </b-form-group>
        <b-form-group class="input">
          <label><strong> Author</strong></label>
          <b-form-input type="text" placeholder="Author" trim></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Description</strong></label>
          <b-form-textarea
            id="textarea-default"
            placeholder="Description"
          ></b-form-textarea>
        </b-form-group>
        <b-button style="background: #0c303d">Save</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'

export default {
  name: 'CreateContent',
  components: {
    NavbarView,
  },
  data() {
    return {
      file: null,
    }
  },
}
</script>
<style scoped>
.input {
  max-width: 70%;
}
.input-file {
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