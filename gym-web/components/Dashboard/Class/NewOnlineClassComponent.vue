<template>
  <div id="new-class">
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/Dashboard/class/online-class">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        New Class
      </h3>
      <div class="mt-4 new">
        <b-form-group class="input">
          <label><strong>Class Name</strong></label>
          <b-form-input
            type="text"
            v-model="name"
            placeholder="Class Name"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Trainer</strong></label>
          <b-form-input
            v-model="trainer"
            type="text"
            placeholder="Trainer"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input-select">
          <label><strong> Category</strong></label>
          <b-form-select
            type="select"
            :value="options"
            v-model="category"
            :options="options"
          ></b-form-select>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Date</strong></label>
          <b-form-input
            v-model="date"
            type="date"
            placeholder="Example : 20 Mei 2022"
            trim
          >
          </b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Time</strong></label>
          <b-form-input
            type="text"
            v-model="time"
            placeholder="Example : 09:00 sd 10:00"
            trim
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Link/Location</strong></label>
          <b-form-input
            type="text"
            v-model="link"
            placeholder="Link/Location"
            trim
          ></b-form-input>
        </b-form-group>
        <b-button @click="add()" style="background: #0c303d">Save</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'

export default {
  name: 'NewClassComponent',
  components: {
    NavbarView,
  },
  data() {
    return {
      index: 1,
      category: '',
      options: [
        { value: 'Online Class', text: 'Online Class' },
        { value: 'Offline Class', text: 'Offline Class', disabled: true },
      ],

      name: '',
      date: '',
      time: '',
      link: '',
      onlineClass: [],
    }
  },
  methods: {
    add() {
      if (
        this.name &&
        this.trainer &&
        this.category &&
        this.date &&
        this.time &&
        this.link &&
        this.index !== ''
      ) {
        this.onlineClass.push({
          id: this.index++,
          name: this.name,
          trainer: this.trainer,
          category: this.category,
          time: this.time,
          url: this.link,
          date: this.date,
        })
        this.name = ''
        this.trainer = ''
        this.category = ''
        this.date = ''
        this.time = ''
        this.link = ''
        localStorage.setItem('onlineClass', JSON.stringify(this.onlineClass))
        alert('Class berhasil ditambahkan')
      } else {
        alert('Data belum lengkap')
      }
    },
  },
}
</script>
<style scoped>
#new-class {
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