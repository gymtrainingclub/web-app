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
              ><b-form-input
                v-model="name_trainer"
                placeholder="Name"
              ></b-form-input
            ></b-col>
            <b-col cols="12" md="2" class="mb-2"
              ><b-form-input
                v-model="name_class"
                placeholder="Class"
              ></b-form-input
            ></b-col>
            <b-col cols="12" md="2" class="mb-2"
              ><b-form-select
                v-model="category"
                :value="options"
                :options="options"
                placeholder="Enter your name"
              ></b-form-select
            ></b-col>
            <b-col cols="12" md="2" class="mb-2"
              ><b-form-input
                v-model="handphone"
                placeholder="No Handphone"
              ></b-form-input
            ></b-col>
            <b-col cols="12" md="2" class="mb-2"
              ><b-button @click="add()" style="background: #0c303d"
                >Save</b-button
              ></b-col
            >
          </b-row>
          <b-row>
            <b-col cols="12">
              <table
                class="table table-borderless text-center table-responsive"
              >
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
                  <tr v-for="(trainer, index) in trainers" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ trainer.name }}</td>
                    <td>{{ trainer.class }}</td>
                    <td>{{ trainer.category }}</td>
                    <td>{{ trainer.handphone }}</td>
                    <td>
                      <b-button-group size="sm">
                        <button
                          @click="active === !active"
                          type="button"
                          class="btn pr-3 pl-3 btn-active"
                        >
                          Active
                        </button>
                        <button
                          @click="active === !active"
                          class="btn pr-3 pl-3 btn-hiatus"
                        >
                          Hiatus
                        </button>
                      </b-button-group>
                      <!-- <b-button-group v-else size="sm">
                        <button type="button" class="btn pr-3 pl-3 btn-active">
                          Active
                        </button>
                        <button class="btn pr-3 pl-3 btn-hiatus">Hiatus</button>
                      </b-button-group> -->
                    </td>
                    <td><b-icon v-b-modal.delete icon="trash"></b-icon></td>
                  </tr>
                </tbody>
              </table>
            </b-col>
          </b-row>
          <b-modal id="delete" hide-footer hide-header>
            <!-- <div id="modal" class="text-center m-5">
              <b-icon class="h2" icon="trash"></b-icon>
              <h2>Delete {{ title }} ?</h2>
              <p>Deleting this file will be permanent.</p>
              <div class="d-flex justify-content-around">
                <b-button
                  variant="outline-secondary"
                  class="cancel shadow"
                  @click="$bvModal.hide('delete')"
                  >Cancel</b-button
                >
                <b-button
                  @click="$bvModal.hide('delete')"
                  class="shadow"
                  style="background: #0c303d"
                  >Delete</b-button
                >
              </div>
            </div> -->
            <DeleteComponent @click="deleteItem()" :title="title" />
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
      options: [
        { value: 'Online', text: 'Online' },
        { value: 'Offline', text: 'Offline' },
      ],
      index: 0,
      id: 1,
      active: true,
      title: 'Trainer',
      name_trainer: '',
      name_class: '',
      category: '',
      handphone: '',
      error: 'Data Belum lengkap',
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
      trainers: [],
    }
  },
  mounted() {
    const trainers = localStorage.getItem('trainers')
    this.trainers = trainers ? JSON.parse(trainers) : []
  },
  methods: {
    add() {
      if (
        this.id &&
        this.name_trainer &&
        this.name_class &&
        this.category &&
        this.handphone !== ''
      ) {
        this.trainers.push({
          id: this.id++,
          name: this.name_trainer,
          class: this.name_class,
          category: this.category,
          handphone: this.handphone,
        })
        this.name_trainer = ''
        this.name_class = ''
        this.category = ''
        this.handphone = ''

        localStorage.setItem('trainers', JSON.stringify(this.trainers))
        alert('Trainer berhasil ditambahkan')
      } else {
        alert(this.error)
      }
    },
    deleteItem(index) {
      this.trainers.splice(index, 1)
      localStorage.removeItem('trainers', JSON.stringify(this.trainers.id))
      // localStorage.removeItem('trainers')
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
.btn-active,
.btn-hiatus {
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  color: white;
}
.btn-active {
  background: #4ab44f;
}
.btn-hiatus {
  background: #79747e;
}
</style>
