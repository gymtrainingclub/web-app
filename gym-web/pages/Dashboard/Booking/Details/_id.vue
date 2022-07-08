<template>
  <div>
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/Dashboard/booking-class">
          <b-icon variant="dark" icon="chevron-left"></b-icon>
        </NuxtLink>
        Fit Rush
      </h3>
      <div class="m-4">
        <b-row>
          <b-col cols="12" sm="12" md="4">
            <div class="card bg-dark text-white img">
              <img
                src="@/assets/img/details-book.jpg"
                class="card-img"
                alt="..."
              />
              <div class="card-img-overlay mt-4">
                <h5 class="card-title mt-5">Fit Rush</h5>
                <span>Name Place</span>
                <p class="card-text">By Trainer</p>
                <div class="d-flex justify-content-end">
                  <b-button size="sm" variant="light" pill>60 Min</b-button>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" sm="12" md="4">
            <!-- <b-row>
              <b-col cols="12" sm="6" md="6"> -->
            <p>Class Date</p>
            <p>Class Time</p>
            <p>Class Trainer</p>
            <p>Class Link/Location</p>
            <!-- </b-col>
              
            </b-row> -->
          </b-col>
          <b-col cols="12" sm="6" md="4">
            <p>22 Mei 2022</p>
            <p>08:00 sd 09:00</p>
            <p>Mr. Lex</p>
            <p><a href="#">https://meet.google.com/akdhja</a></p>
          </b-col>
        </b-row>
        <hr />
        <h3>List Member Class</h3>
        <b-button size="sm" variant="success">10 Booked</b-button>
        <b-card class="mt-4">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Member Name</th>
                <th scope="col">Membership</th>
                <th scope="col">No Handphone</th>
                <th scope="col">Date Booked</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.name }}</td>
                <td>{{ item.membership }}</td>
                <td>{{ item.number }}</td>
                <td>{{ item.date }}</td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'
export default {
  name: 'DetailsBookingComponent',
  components: {
    NavbarView,
  },
  data() {
    return {
      index: 0,
      items: [
        {
          name: 'Muhammad Ibnu',
          membership: 'GOLD',
          number: '+623472874829',
          date: '22 Mei 2022',
        },
        {
          name: 'Muhammad Ibnu',
          membership: 'GOLD',
          number: '+623472874829',
          date: '22 Mei 2022',
        },
        {
          name: 'Muhammad Ibnu',
          membership: 'GOLD',
          number: '+623472874829',
          date: '22 Mei 2022',
        },
        {
          name: 'Muhammad Ibnu',
          membership: 'GOLD',
          number: '+623472874829',
          date: '22 Mei 2022',
        },
        {
          name: 'Muhammad Ibnu',
          membership: 'GOLD',
          number: '+623472874829',
          date: '22 Mei 2022',
        },
        {
          name: 'Muhammad Ibnu',
          membership: 'GOLD',
          number: '+623472874829',
          date: '22 Mei 2022',
        },
        {
          name: 'Muhammad Ibnu',
          membership: 'GOLD',
          number: '+623472874829',
          date: '22 Mei 2022',
        },
        {
          name: 'Muhammad Ibnu',
          membership: 'GOLD',
          number: '+623472874829',
          date: '22 Mei 2022',
        },
        {
          name: 'Muhammad Ibnu',
          membership: 'GOLD',
          number: '+623472874829',
          date: '22 Mei 2022',
        },
        {
          name: 'Muhammad Ibnu',
          membership: 'GOLD',
          number: '+623472874829',
          date: '22 Mei 2022',
        },
      ],
    }
  },
}
</script>