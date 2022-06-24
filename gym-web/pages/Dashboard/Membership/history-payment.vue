<template>
  <div>
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/admin/Dashboard/membership">
          <b-icon icon="arrow-left"></b-icon>
        </NuxtLink>
        History Payments
      </h3>
      <div class="ml-5">
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
        <b-button-group v-for="button in buttons" :key="button">
          <b-button style="background-color: #0c303d" class="mr-3 mb-5 mt-5">{{
            button
          }}</b-button>
        </b-button-group>
        <table class="table table-borderless text-center">
          <thead>
            <tr>
              <th scope="col"><input type="checkbox" /></th>
              <th scope="col">Id Member</th>
              <th scope="col">Nama Member</th>
              <th scope="col">Membership</th>
              <th scope="col">Payment Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item">
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.membership }}</td>
              <td>{{ item.payment }}</td>
            </tr>
          </tbody>
        </table>

        <b-button style="background: #0c303d">Delete</b-button>
        <b-button style="background: #0c303d">Download File</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/NavbarView.vue'
export default {
  name: 'HistoryPayment',
  components: {
    NavbarView,
  },
  data() {
    return {
      buttons: ['Gold', 'Platinum', 'Bronze'],
      items: [
        {
          id: '001',
          name: 'Meisha Thomas',
          membership: 'GOLD',
          payment: '01 Mei 2022',
        },
        {
          id: '001',
          name: 'Meisha Thomas',
          membership: 'GOLD',
          payment: '01 Mei 2022',
        },
        {
          id: '001',
          name: 'Meisha Thomas',
          membership: 'GOLD',
          payment: '01 Mei 2022',
        },
        {
          id: '001',
          name: 'Meisha Thomas',
          membership: 'GOLD',
          payment: '01 Mei 2022',
        },
        {
          id: '001',
          name: 'Meisha Thomas',
          membership: 'GOLD',
          payment: '01 Mei 2022',
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
a {
  color: black;
}
.search {
  width: 600px;
}
</style>