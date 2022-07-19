<template>
  <div id="create-news">
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/Dashboard/NewsAndContent/news">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        Create Newsletter
      </h3>
      <div class="mt-4 new">
        <b-form @submit.prevent="add()">
          <b-form-group class="input">
            <label><strong>News Title</strong></label>
            <b-form-input
              v-model="title"
              type="text"
              placeholder="Title"
              trim
            ></b-form-input>
          </b-form-group>
          <div class="d-flex justify-around">
            <b-form-group class="input-select mr-4">
              <label><strong>Choose Category</strong></label>
              <b-form-select
                v-model="selected"
                :options="options"
                :value="options"
              ></b-form-select>
            </b-form-group>
            <b-form-group disabled class="input-select">
              <label><strong>Choose Pic</strong></label>
              <b-form-file
                id="file-default"
                ref="file-input"
                v-model="file"
              ></b-form-file>
            </b-form-group>
          </div>
          <b-form-group class="input">
            <label><strong> Author</strong></label>
            <b-form-input
              v-model="author"
              type="text"
              placeholder="Author"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <label><strong>Description</strong></label>
            <b-form-textarea
              id="textarea-default"
              v-model="desc"
              placeholder="Description"
            ></b-form-textarea>
          </b-form-group>
          <b-button @click="add()" style="background: #0c303d">Save</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'

export default {
  name: 'CreateNewsletterComponent',

  components: {
    NavbarView,
  },
  props: {
    newsletters: Array,
  },
  data() {
    return {
      index: 1,
      isNotValid: false,
      selected: '',
      file: null,
      title: '',
      author: '',
      desc: '',
      date: new Date(),
      options: [
        { value: 'Lifestyle', text: 'Lifestyle' },
        { value: 'Gym News', text: 'Gym News' },
        { value: 'Tips Workout', text: 'Tips Workout' },
        { value: 'Diet', text: 'Diet' },
      ],
      newsletter: [],
    }
  },
  methods: {
    add() {
      if (
        this.title &&
        this.index &&
        this.author &&
        this.selected &&
        this.desc &&
        this.date !== ''
      ) {
        this.newsletter.push({
          id: this.index++,
          title: this.title,
          author: this.author,
          category: this.selected,
          desc: this.desc,
          date: this.date,
        })
        this.title = ''
        this.author = ''
        this.selected = ''
        this.desc = ''
        this.date = new Date()
        localStorage.setItem('newsletter', JSON.stringify(this.newsletter))
        alert('Newsletter Berhasil di tambahkan')
      } else {
        alert('Data belum lengkap')
      }
    },
  },
}
</script>
<style scoped>
#create-news {
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
</style>