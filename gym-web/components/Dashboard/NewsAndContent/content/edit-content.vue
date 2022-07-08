<template>
  <div>
    <NavbarView />
    <div class="p-5 mt-5">
      <h3 class="title">Edit Content</h3>
      <div class="mt-4 new">
        <b-form-group class="input">
          <label><strong>Content Title</strong></label>
          <b-form-input
            type="text"
            v-model="this.$route.params.id.title"
            placeholder="Title"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input-file">
          <label><strong>Choose Video</strong></label>
          <b-form-file></b-form-file>
        </b-form-group>
        <b-form-group class="input">
          <label><strong> Author</strong></label>
          <b-form-input
            v-model="this.$route.params.id.author"
            type="text"
            placeholder="Author"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Description</strong></label>
          <b-form-textarea
            v-model="this.$route.params.id.desc"
            id="textarea-default"
            placeholder="Description"
          ></b-form-textarea>
        </b-form-group>
        <b-button style="background: #0c303d">Save change</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'

export default {
  name: 'EditContent',
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
.title {
  margin-left: 33px;
}
</style>