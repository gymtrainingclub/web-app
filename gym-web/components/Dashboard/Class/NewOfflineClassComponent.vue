<template>
  <div id="new-class">
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/Dashboard/class/offline-class">
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
        <b-form-group disabled class="input-select">
          <label><strong> Category</strong></label>
          <b-form-input
            v-model="category"
            placeholder="Offline Class"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label><strong>Date</strong></label>
          <b-form-input
            v-model="date"
            type="text"
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
          <label><strong>Place</strong></label>
          <b-form-input
            type="text"
            v-model="place"
            placeholder="Name Place"
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
      category: 'Offline class',
      name: '',
      date: '',
      time: '',
      place: '',
      offlineClass: [],
    }
  },
  methods: {
    add() {
      this.offlineClass.push({
        id: this.index++,
        name: this.name,
        trainer: this.trainer,
        category: this.category,
        time: this.time,
        place: this.place,
        date: this.date,
      })
      this.name = ''
      this.trainer = ''
      this.category = ''
      this.date = ''
      this.time = ''
      this.place = ''
      localStorage.setItem('offlineClass', JSON.stringify(this.offlineClass))
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