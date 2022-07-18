<template>
  <div id="offline-class">
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
              <th scope="col">Trainer</th>
              <th scope="col">
                <NuxtLink to="/Dashboard/Class/new-offline-class">
                  <b-icon class="h2" icon="plus-circle"></b-icon>
                </NuxtLink>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(offline, index) in filteredClass" :key="index">
              <th scope="row"><input type="checkbox" /></th>
              <td>{{ offline.name }}</td>
              <td>{{ offline.place }}</td>
              <td>
                {{ offline.date }}
              </td>
              <td>
                {{ offline.time }}
              </td>
              <td>{{ offline.trainer }}</td>
              <td>
                <b-icon
                  @click="showModal(offline)"
                  class="mr-1"
                  icon="pencil-square"
                ></b-icon>
                <b-icon v-b-modal.delete icon="trash"></b-icon>
              </td>
            </tr>
          </tbody>
        </table>
        <b-modal id="modal-1" title="Details Offline Class" hide-footer>
          <b-form-group class="input">
            <label><strong>Class Name</strong></label>
            <b-form-input
              v-model="selectedItem.name"
              type="text"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <label><strong>Trainer</strong></label>
            <b-form-input
              v-model="selectedItem.trainer"
              type="text"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <label><strong>Date</strong></label>
            <b-form-input v-model="selectedItem.date" type="text" trim>
            </b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <label><strong>Time</strong></label>
            <b-form-input
              v-model="selectedItem.time"
              type="text"
              trim
            ></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <label><strong>Place</strong></label>
            <b-form-input
              v-model="selectedItem.place"
              type="text"
              trim
            ></b-form-input>
          </b-form-group>
          <b-button style="background: #0c303d">Save</b-button>
        </b-modal>
        <b-modal id="delete" hide-header hide-footer>
          <DeleteComponent :title="title" />
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'
import DeleteComponent from '@/components/Dashboard/DeleteComponent.vue'
export default {
  name: 'OfflineClassComponent',
  components: {
    NavbarView,
    DeleteComponent,
  },
  data() {
    return {
      buttons: ['Cardio', 'Body & Mind', 'Strenght'],
      title: 'Class',
      selectedItem: {},
      offlineClass: [],
    }
  },
  computed: {
    filteredClass() {
      if (this.search) {
        return this.offlineClass.filter((online) => {
          return this.search
            .toLowerCase()
            .split(' ')
            .every((query) => online.name.toLowerCase().includes(query))
        })
      } else {
        return this.offlineClass
      }
    },
  },
  mounted() {
    const offlineClass = localStorage.getItem('offlineClass')
    this.offlineClass = offlineClass ? JSON.parse(offlineClass) : []
  },
  methods: {
    showModal(item) {
      this.selectedItem = item
      this.$root.$emit('bv::show::modal', 'modal-1')
    },
  },
}
</script>
<style scoped>
#offline-class,
.input {
  font-family: 'Roboto', sans-serif;
}
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