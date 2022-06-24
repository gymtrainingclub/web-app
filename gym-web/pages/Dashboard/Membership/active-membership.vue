<template>
  <div>
    <NavbarView />
    <b-container class="p-5 m-5">
      <h2>
        <NuxtLink to="/admin/Dashboard/membership">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        Member's Data
      </h2>
      <table class="table m-5 table-borderless">
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
          <tr v-for="item in items" :key="item">
            <th scope="row"><input type="checkbox" /></th>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.no_handphone }}</td>
            <td>{{ item.membership }}</td>
            <td>{{ item.start_join }}</td>
            <td>
              <NuxtLink to="/admin/Dashboard/Membership/details-membership">
                <i>See more</i>
                <b-icon class="mr-1" icon="box-arrow-up-right"></b-icon>
              </NuxtLink>
              <b-icon icon="trash"></b-icon>
            </td>
          </tr>
        </tbody>
      </table>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/NavbarView.vue'

export default {
  name: 'ActiveMembership',
  components: {
    NavbarView,
  },
  data() {
    return {
      items: [
        {
          id: '001',
          name: 'Meisha Thomas',
          membership: 'Gold',
          no_handphone: +62439849384398,
          start_join: '01 Mei 2022',
          icon: 'check-square-fill',
        },
        {
          id: '002',
          name: 'Meisha Thomas',
          membership: 'Gold',
          no_handphone: +62439849384398,
          start_join: '01 Mei 2022',
          icon: 'x-square-fill',
        },
        {
          id: '003',
          name: 'Meisha Thomas',
          membership: 'Gold',
          no_handphone: +62439849384398,
          start_join: '01 Mei 2022',
          icon: 'check-square-fill',
        },
        {
          id: '004',
          name: 'Meisha Thomas',
          membership: 'Gold',
          no_handphone: +62439849384398,
          start_join: '01 Mei 2022',
          icon: 'x-square-fill',
        },
        {
          id: '005',
          name: 'Meisha Thomas',
          membership: 'Gold',
          no_handphone: +62439849384398,
          start_join: '01 Mei 2022',
          icon: 'check-square-fill',
        },
      ],
    }
  },
}
</script>
<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>