<template>
  <div id="membership">
    <NavbarView />
    <b-container class="pt-5 mt-5 members">
      <b-card-group deck>
        <b-row>
          <b-col cols="12" sm="12" md="8">
            <div class="card">
              <div class="card-header" style="background: #0c303d">
                <h5>Recent New Membership</h5>
              </div>
              <div class="card-body text-center">
                <table class="table table-borderless">
                  <thead>
                    <tr class="table-secondary">
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Membership Type</th>
                      <th scope="col">Tanggal Join</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(membership, index) in items" :key="index">
                      <td>{{ membership.id }}</td>
                      <td>{{ membership.name }}</td>
                      <td>{{ membership.membership }}</td>
                      <td>{{ membership.tgl }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </b-col>
          <b-col cols="12" sm="7" md="4" class="d-flex justify-content-around">
            <div class="card header" style="max-height: 10rem">
              <div
                class="
                  card-body
                  d-flex
                  justify-content-between
                  align-items-center
                "
              >
                <b-icon
                  class="h2 mr-1"
                  style="color: #0c303d"
                  icon="folder-fill"
                >
                </b-icon>
                <h4>Membership Data</h4>
              </div>
              <div class="card-footer">
                <NuxtLink to="/Dashboard/Membership/members-data">
                  <h5>Lihat Detail</h5>
                </NuxtLink>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-card-group>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'
export default {
  name: 'MembershipPage',
  components: {
    NavbarView,
  },
  data() {
    return {
      items: [
        {
          id: '001',
          name: 'Meisha Thomas',
          number: '9023483284',
          email: 'meisha@gmail.com',
          membership: 'Gold',
          tgl: '31 Mei 2022',
        },
        {
          id: '002',
          name: 'Meisha Thomas',
          number: '9023483284',
          email: 'meisha@gmail.com',
          membership: 'Gold',
          tgl: '31 Mei 2022',
        },
        {
          id: '003',
          name: 'Meisha Thomas',
          number: '9023483284',
          email: 'meisha@gmail.com',
          membership: 'Gold',
          tgl: '31 Mei 2022',
        },
        {
          id: '004',
          name: 'Meisha Thomas',
          number: '9023483284',
          email: 'meisha@gmail.com',
          membership: 'Gold',
          tgl: '31 Mei 2022',
        },
        {
          id: '005',
          name: 'Meisha Thomas',
          number: '9023483284',
          email: 'meisha@gmail.com',
          membership: 'Gold',
          tgl: '31 Mei 2022',
        },
      ],
    }
  },
  // computed: {
  //   memberships() {
  //     return this.$store.state.memberships
  //   },
  // },
  // mounted() {
  //   this.getMembership()
  // },
  // methods: {
  //   getMembership() {
  //     this.$store.dispatch('getMembership')
  //   },
  // },
}
</script>
<style scoped>
#membership {
  font-family: 'Roboto', sans-serif;
}
.card-header,
.card-footer {
  background: #0c303d;
  color: white;
}
.card-footer {
  border-radius: 0 0 6px 6px;
}
.card-header {
  border-radius: 6px 6px 0 0;
}

.card {
  border-radius: 6px;
}
a {
  text-decoration: none;
  color: white;
}
@media only screen and (max-width: 460px) {
  .card-body {
    max-width: 20%;
  }
  .members {
    align-content: center;
  }
}
</style>
</style>