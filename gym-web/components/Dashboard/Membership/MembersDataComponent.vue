<template>
  <div id="membership-data">
    <NavbarView />
    <b-container class="p-5 m-5">
      <h2>
        <NuxtLink to="/Dashboard/membership">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        Member's Data
      </h2>
      <div class="members">
        <b-button-group v-for="button in buttons" :key="button">
          <b-button style="background-color: #0c303d" class="mr-3 mt-4">{{
            button
          }}</b-button>
        </b-button-group>
        <b-nav-form class="mt-2">
          <b-form-input
            size="lg"
            class="mr-3 search"
            placeholder="Search"
          ></b-form-input>
          <b-button size="lg" class="my-2 my-sm-0 btn-search" type="submit"
            ><b-icon icon="search"></b-icon
          ></b-button>
        </b-nav-form>
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col"><input type="checkbox" /></th>
              <th scope="col">Id Member</th>
              <th scope="col">Nama Member</th>
              <th scope="col">No Handphone</th>
              <th scope="col">Membership</th>
              <th scope="col">Start Join</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <th scope="row"><input type="checkbox" /></th>
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.no_handphone }}</td>
              <td>{{ item.membership }}</td>
              <td>{{ item.start_join }}</td>
              <td>
                <NuxtLink
                  :to="{
                    name: `Dashboard-Membership-details-id`,
                    params: { id: item },
                  }"
                >
                  <i>See more</i>
                  <b-icon class="mr-1" icon="box-arrow-up-right"></b-icon>
                </NuxtLink>
                <b-icon v-b-modal.delete icon="trash"></b-icon>
              </td>
            </tr>
          </tbody>
        </table>
        <b-modal id="delete" hide-header hide-footer>
          <DeleteComponent :title="title" />
        </b-modal>
      </div>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'
import DeleteComponent from '@/components/Dashboard/DeleteComponent.vue'
export default {
  name: 'MembersDataComponent',
  components: {
    NavbarView,
    DeleteComponent,
  },
  data() {
    return {
      buttons: ['Cardio', 'Body & Mind', 'Strenght'],
      title: 'Member',
      items: [
        {
          id: '001',
          name: 'Meisha Thomas',
          gender: 'Female',
          membership: 'Gold',
          email: 'Contoh@mail.com',
          address: 'jalan Suka Mulia',
          no_handphone: +62439849384398,
          start_join: '01 Mei 2022',
          end_join: '24 Agustus 2022',
          icon: 'check-square-fill',
        },
        {
          id: '002',
          name: 'Mahesa Chandra',
          gender: 'Male',
          membership: 'Gold',
          email: 'Contoh@mail.com',
          address: 'jalan Suka Mulia',
          no_handphone: +62447293843342,
          start_join: '01 Mei 2022',
          end_join: '24 Agustus 2022',
          icon: 'x-square-fill',
        },
        {
          id: '003',
          name: 'Meisha Thomas',
          gender: 'Female',
          membership: 'Gold',
          email: 'Contoh@mail.com',
          address: 'jalan Suka Mulia',
          no_handphone: +62439849384398,
          start_join: '01 Mei 2022',
          end_join: '24 Agustus 2022',
          icon: 'check-square-fill',
        },
        {
          id: '004',
          name: 'Reza Smith',
          gender: 'Male',
          membership: 'Gold',
          email: 'Contoh@mail.com',
          address: 'jalan Suka Mulia',
          no_handphone: +62727364328648,
          start_join: '01 Mei 2022',
          end_join: '24 Agustus 2022',
          icon: 'x-square-fill',
        },
        {
          id: '005',
          name: 'Yuuka',
          gender: 'Female',
          membership: 'Platinum',
          no_handphone: +62439849384398,
          start_join: '01 Mei 2022',
          end_join: '24 Agustus 2022',
          icon: 'check-square-fill',
        },
      ],
    }
  },
}
</script>
<style scoped>
#membership-data {
  font-family: 'Roboto', sans-serif;
}
.btn-search {
  width: 113px;
  color: #0c303d;
  background-color: #f15a24;
}
a {
  color: black;
  text-decoration: none;
}
.members {
  padding-left: 35px;
}
</style>