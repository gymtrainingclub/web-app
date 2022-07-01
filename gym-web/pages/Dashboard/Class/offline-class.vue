<template>
  <div>
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/Dashboard/class">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        Offline Class
      </h3>
      <div class="offline">
        <b-button-group v-for="button in buttons" :key="button">
          <b-button style="background-color: #0c303d" class="mr-3 mt-4">{{
            button
          }}</b-button>
        </b-button-group>
        <b-nav-form class="mt-2">
          <b-form-input
            size="lg"
            class="mr-2 search"
            placeholder="Search"
          ></b-form-input>
          <b-button size="lg" class="my-2 my-sm-0 btn-search" type="submit"
            ><b-icon icon="search"></b-icon
          ></b-button>
        </b-nav-form>

        <table class="table table-borderless text-center">
          <thead>
            <tr>
              <th scope="col"><input type="checkbox" /></th>
              <th scope="col">Class</th>
              <th scope="col">Place</th>
              <th scope="col">Dates</th>
              <th scope="col">Time</th>
              <th scope="col">Instructor</th>
              <th scope="col">
                <b-icon class="h2" icon="plus-circle"></b-icon>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(offline_class, index) in clas" :key="index">
              <th scope="row"><input type="checkbox" /></th>
              <td>{{ offline_class.name }}</td>
              <td>{{ offline_class.location }}</td>
              <td>
                {{ offline_class.start_date }}
              </td>
              <td>{{ offline_class.instructor.name }}</td>
              <td><b-icon icon="pencil-square"></b-icon></td>
            </tr>
          </tbody>
        </table>
        <b-button style="background: #0c303d">Delete</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/NavbarView.vue'
export default {
  name: 'OfflineClass',
  components: {
    NavbarView,
  },
  data() {
    return {
      buttons: ['Cardio', 'Body & Mind', 'Strenght'],
    }
  },
  computed: {
    clas() {
      return this.$store.state.class
    },
  },
  mounted() {
    this.getClass()
  },
  methods: {
    getClass() {
      this.$store.dispatch('getClass')
    },
  },
}
</script>
<style scoped>
.btn-search {
  width: 113px;
  color: #0c303d;
  background-color: #f15a24;
}
.search {
  width: 600px;
}
a {
  text-decoration: none;
  color: black;
}
.offline {
  padding-left: 35px;
}
</style>