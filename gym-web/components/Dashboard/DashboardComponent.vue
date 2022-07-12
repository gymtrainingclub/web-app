<template>
  <div id="dashboard">
    <navbar-view />
    <b-container class="p-5 mt-5">
      <h3>Hello, Super Admin !</h3>
      <b-card-group class="text-center" deck>
        <div v-for="(card, index) in cards" :key="index" class="card mb-3">
          <div class="card-header">
            <h5>{{ card.name }} <b-icon :icon="card.icon"></b-icon></h5>
          </div>
          <div class="card-body">
            <h1 class="card-title">{{ card.value }}</h1>
          </div>
        </div>
      </b-card-group>
      <div class="card">
        <div class="card-header">
          <h5>Trainer Status</h5>
        </div>
        <div class="card-body">
          <b-row class="d-flex justify-content-around align-items-center mb-3">
            <b-col cols="12" md="2" class="mb-2"
              ><b-form-input placeholder="Name"></b-form-input
            ></b-col>
            <b-col cols="12" md="2" class="mb-2"
              ><b-form-input placeholder="Class"></b-form-input
            ></b-col>
            <b-col cols="12" md="2" class="mb-2"
              ><b-form-select
                :options="options"
                placeholder="Enter your name"
              ></b-form-select
            ></b-col>
            <b-col cols="12" md="2" class="mb-2"
              ><b-form-input placeholder="No Handphone"></b-form-input
            ></b-col>
            <b-col cols="12" md="2" class="mb-2"
              ><b-button style="background: #0c303d">Save</b-button></b-col
            >
          </b-row>
          <b-row>
            <b-col cols="12">
              <table class="table table-borderless text-center">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama Trainer</th>
                    <th scope="col">Class</th>
                    <th scope="col">Type Class</th>
                    <th scope="col">No Handphone</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(trainer, index) in clas" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ trainer.instructor.name }}</td>
                    <td>{{ trainer.name }}</td>
                    <td>{{ trainer.type }}</td>
                    <td>{{ trainer.instructor.handphone }}</td>
                    <td>
                      <b-button-group size="sm">
                        <b-button class="pr-3 pl-3" variant="success"
                          >Active</b-button
                        >
                        <b-button class="pr-3 pl-3" variant="secondary lighten"
                          >Hiatus</b-button
                        >
                      </b-button-group>
                    </td>
                    <td><b-icon v-b-modal.delete icon="trash"></b-icon></td>
                  </tr>
                </tbody>
              </table>
            </b-col>
          </b-row>
          <b-modal id="delete" hide-footer hide-header>
            <DeleteComponent :title="title" />
          </b-modal>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '~/components/Dashboard/Navigasi/NavbarView.vue'
import DeleteComponent from '~/components/Dashboard/DeleteComponent.vue'
export default {
  name: 'DashboardComponent',
  components: {
    NavbarView,
    DeleteComponent,
  },
  data() {
    return {
      options: ['Online', 'Offline'],
      index: 0,
      title: 'Trainer',
      cards: [
        { icon: 'person-square', name: 'Admin', value: 4 },
        { icon: 'people-fill', name: 'Membership', value: 40 },
        { icon: 'grid-fill', name: 'Class', value: 5 },
        // { icon: 'journal-bookmark-fill', name: 'Booking', value: 23 },
      ],
      buttons: [
        'List Admin',
        'List Membership',
        'List Instructor',
        'Class',
        // 'Room',
      ],
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
.card {
  border-radius: 6px;
}
.card-header {
  background: #0c303d;
  color: white;
  border-radius: 6px 6px 0 0;
}
</style>
