<template>
  <div id="admin-data">
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/Dashboard/admin">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        Admin Capstone Gym Data
      </h3>
      <div class="admin col-lg-12 container-fluid">
        <b-nav-form class="mt-5">
          <b-form-input
            class="search mr-3"
            placeholder="Search"
            size="lg"
          ></b-form-input>
          <b-button
            class="my-2 my-sm-0 btn-search shadow-lg"
            size="lg"
            type="submit"
            ><b-icon icon="search" class="text-white"></b-icon
          ></b-button>
        </b-nav-form>
        <table class="table mt-5 table-borderless text-center">
          <thead>
            <tr>
              <th scope="col"><input type="checkbox" /></th>
              <th scope="col">ID Admin</th>
              <th scope="col">Nama Admin</th>
              <th scope="col">No Handphone</th>
              <th scope="col">Password</th>
              <th scope="col">Tanggal Join</th>
              <th scope="col">
                <NuxtLink to="/Dashboard/Admin/new-admin">
                  <b-icon class="h2" icon="plus-circle"></b-icon>
                </NuxtLink>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(admin, index) in items" :key="index">
              <th scope="row"><input type="checkbox" /></th>
              <td>{{ admin.id }}</td>
              <td>{{ admin.name }}</td>
              <td>{{ admin.handphone }}</td>
              <td>{{ admin.password }}</td>
              <td>{{ admin.created }}</td>
              <td>
                <b-icon
                  v-b-modal.modal-prevent-closing
                  icon="pencil-square"
                  class="mr-1"
                ></b-icon>
                <b-icon v-b-modal.delete icon="trash"></b-icon>
              </td>
            </tr>
          </tbody>
        </table>
        <b-modal
          id="modal-prevent-closing"
          class="mt-4 new"
          title="Edit Data Admin"
          hide-footer
        >
          <EditDataAdmin id="admin-data" />
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
import EditDataAdmin from '~/components/Dashboard/Admin/EditDataComponent.vue'
import DeleteComponent from '~/components/Dashboard/DeleteComponent.vue'
export default {
  name: 'AdminData',
  components: {
    NavbarView,
    EditDataAdmin,
    DeleteComponent,
  },
  data() {
    return {
      title: 'Admin',
      items: [],
    }
  },
  mounted() {
    this.$axios
      .get('https://capstone-gym-project.herokuapp.com/api/v1/admins')
      .then((result) => {
        this.items = result.data.user
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>
<style scoped>
#admin-data {
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
</style>
