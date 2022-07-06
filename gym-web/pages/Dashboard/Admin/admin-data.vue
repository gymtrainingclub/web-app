<template>
  <div>
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/Dashboard/admin">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        Admin Capstone Gym Data
      </h3>
      <div class="admin">
        <b-nav-form class="mt-5">
          <b-form-input
            size="lg"
            class="mr-2 search"
            placeholder="Search"
          ></b-form-input>
          <b-button size="lg" class="my-2 my-sm-0 btn-search" type="submit"
            ><b-icon icon="search"></b-icon
          ></b-button>
        </b-nav-form>
        <table class="table mt-5 table-borderless text-center">
          <thead>
            <tr>
              <th scope="col"><input type="checkbox" /></th>
              <th scope="col">Id Admin</th>
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
            <tr v-for="(admin, index) in admins" :key="index">
              <th scope="row"><input type="checkbox" /></th>
              <td>{{ admin.id }}</td>
              <td>{{ admin.name }}</td>
              <td>{{ admin.number }}</td>
              <td>{{ admin.password }}</td>
              <td>{{ admin.tgl }}</td>
              <td>
                <b-icon
                  v-b-modal.modal-prevent-closing
                  icon="pencil-square"
                  class="mr-1"
                ></b-icon>
                <b-icon v-b-modal.modal icon="trash"></b-icon>
              </td>
            </tr>
          </tbody>
        </table>
        <b-modal id="modal-prevent-closing" title="Edit Data Admin" hide-footer>
          <EditDataAdmin />
        </b-modal>
        <b-modal id="modal" hide-header hide-footer>
          <DeleteAdmin />
        </b-modal>
        <!-- <b-button style="background: #0c303d">Delete</b-button> -->
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/NavbarView.vue'
import EditDataAdmin from '~/components/Dashboard/Admin/EditDataAdmin.vue'
import DeleteAdmin from '~/components/Dashboard/Admin/delete-admin.vue'
export default {
  name: 'AdminData',
  components: {
    NavbarView,
    EditDataAdmin,
    DeleteAdmin,
  },
  data() {
    return {
      items: [
        {
          id: '001',
          name: 'Jeremy',
          number: '9023483284',
          password: 'Gym123',

          tgl: '31 Mei 2022',
        },
        {
          id: '002',
          name: 'Jeremy',
          number: '9023483284',
          password: 'Gym123',

          tgl: '31 Mei 2022',
        },
        {
          id: '003',
          name: 'Jeremy',
          number: '9023483284',
          password: 'Gym123',

          tgl: '31 Mei 2022',
        },
        {
          id: '004',
          name: 'Jeremy',
          number: '9023483284',
          password: 'Gym123',

          tgl: '31 Mei 2022',
        },
        {
          id: '005',
          name: 'Jeremy',
          number: '9023483284',
          password: 'Gym123',

          tgl: '31 Mei 2022',
        },
      ],
    }
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
.admin {
  padding-left: 35px;
}
</style>