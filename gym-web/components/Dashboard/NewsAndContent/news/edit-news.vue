<template>
  <div id="edit-news">
    <NavbarView />
    <div class="p-5 mt-5">
      <h3 class="title">Edit Newsletter</h3>
      <div class="mt-4 new">
        <b-form-group class="input">
          <label><strong>Newsletter Title</strong></label>
          <b-form-input
            :value="this.$route.params.id.title"
            type="text"
            placeholder="Title"
            trim
          ></b-form-input>
        </b-form-group>
        <div class="d-flex justify-around">
          <b-form-group class="input-select mr-4">
            <label><strong>Choose Category</strong></label>
            <b-form-select
              :value="this.$route.params.id.category"
              :options="options"
            ></b-form-select>
          </b-form-group>
          <b-form-group disabled class="input-select">
            <label><strong>Choose Pic</strong></label>
            <b-form-file
              id="file-default"
              ref="file-input"
              :value="file"
            ></b-form-file>
          </b-form-group>
        </div>
        <b-form-group class="input">
          <label><strong> Author</strong></label>
          <b-form-input
            :value="this.$route.params.id.author"
            type="text"
            placeholder="Author"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Description</strong></label>
          <b-form-textarea
            id="textarea-default"
            :value="this.$route.params.id.desc"
            placeholder="Description"
          ></b-form-textarea>
        </b-form-group>
        <b-button @click="update()" style="background: #0c303d"
          >Save change</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'

export default {
  name: 'EditNewsletter',
  components: {
    NavbarView,
  },
  data() {
    return {
      id: null,
      selected: 'Tips Workout',
      newTitle: '',
      newAuthor: '',
      newCategory: '',
      newDesc: '',
      file: null,
      options: [
        { text: 'Lifestyle' },
        { text: 'Gym News' },
        { text: 'Tips Workout' },
        { text: 'Diet' },
      ],
      newsletter: [this.$route.params.id],
    }
  },
}
</script>
<style scoped>
#edit-news {
  font-family: 'Roboto', sans-serif;
}
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
.title {
  margin-left: 33px;
}
</style>