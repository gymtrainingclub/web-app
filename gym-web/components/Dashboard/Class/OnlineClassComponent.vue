<template>
  <div id="online-class">
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/Dashboard/class">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        Online Class
      </h3>
      <div class="online">
        <b-button-group v-for="button in buttons" :key="button">
          <b-button style="background-color: #0c303d" class="mr-3 mt-4">{{
            button
          }}</b-button>
        </b-button-group>
        <b-nav-form class="mt-2">
          <b-form-input
            size="lg"
            v-model="search"
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
              <th scope="col">Link</th>
              <th scope="col">Dates</th>
              <th scope="col">Time</th>
              <th scope="col">Trainer</th>
              <th scope="col">
                <NuxtLink to="/Dashboard/Class/new-online-class">
                  <b-icon class="h2" icon="plus-circle"></b-icon>
                </NuxtLink>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(online, index) in filteredClass" :key="index">
              <th scope="row"><input type="checkbox" /></th>
              <td>{{ online.name }}</td>
              <td>{{ online.url }}</td>
              <td>{{ online.date }}</td>
              <td>{{ online.time }}</td>
              <td>{{ online.trainer }}</td>
              <td>
                <b-icon
                  @click="showModal(online)"
                  class="mr-1"
                  icon="pencil-square"
                ></b-icon>
                <b-icon v-b-modal.delete icon="trash"></b-icon>
              </td>
            </tr>
          </tbody>
        </table>
        <b-modal id="modal-1" title="Details Online Class" hide-footer>
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
            <b-form-input v-model="selectedItem.date" type="date" trim>
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
            <label><strong>Link/Location</strong></label>
            <b-form-input
              v-model="selectedItem.url"
              type="text"
              trim
            ></b-form-input>
          </b-form-group>
          <b-button @click="update()" style="background: #0c303d"
            >Save</b-button
          >
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
  name: 'OnlineClassComponent',
  components: {
    NavbarView,
    DeleteComponent,
  },
  data() {
    return {
      buttons: ['Cardio', 'Body & Mind', 'Strenght'],
      title: 'Class',
      newName: '',
      id: null,
      selectedItem: [],
      onlineClass: [],
    }
  },
  computed: {
    filteredClass() {
      if (this.search) {
        return this.onlineClass.filter((online) => {
          return this.search
            .toLowerCase()
            .split(' ')
            .every((query) => online.name.toLowerCase().includes(query))
        })
      } else {
        return this.onlineClass
      }
    },
  },
  mounted() {
    const onlineClass = localStorage.getItem('onlineClass')
    this.onlineClass = onlineClass ? JSON.parse(onlineClass) : []
  },
  methods: {
    showModal(item) {
      this.selectedItem = item
      this.$root.$emit('bv::show::modal', 'modal-1')
    },
    update() {
      const result = this.filteredClass.filter(
        (selectedItem) => selectedItem.id === this.id
      )
      result.map((res) => (res.name = this.newName))
      localStorage.setItem('onlineClass', JSON.stringify(this.onlineClass))
      this.$root.$emit('bv::hide::modal', 'modal-1')
    },
  },
}
</script>
<style scoped>
#online-class,
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
  color: black;
}
.online {
  padding-left: 35px;
}
</style>