<template>
  <div>
    <NavbarView />
    <div class="p-5 mt-5">
      <h3>
        <NuxtLink to="/Dashboard/booking-class">
          <b-icon variant="dark" icon="chevron-left"></b-icon>
        </NuxtLink>
        Booking Online Class
      </h3>
      <div class="online">
        <b-button-group v-for="(button, index) in buttons" :key="index">
          <b-button style="background-color: #0c303d" class="mr-3 mt-4">{{
            button
          }}</b-button>
        </b-button-group>
        <b-nav-form class="mt-2">
          <b-form-input
            size="lg"
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
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <th scope="row"><input type="checkbox" /></th>
              <td>{{ item.class }}</td>
              <td>
                <a href="#">{{ item.link }}</a>
              </td>
              <td>{{ item.date }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.trainer }}</td>
              <td>
                <NuxtLink
                  :to="{
                    name: `Dashboard-Booking-Details-id`,
                    params: { id: item },
                  }"
                >
                  <i>See more</i>
                  <b-icon class="mr-1" icon="box-arrow-up-right"></b-icon>
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'
export default {
  name: 'BookingOnlineComponent',
  components: {
    NavbarView,
  },
  data() {
    return {
      buttons: ['Cardio', 'Body & Mind', 'Strenght'],
      items: [
        {
          class: 'Fit Box',
          date: '20 Mei 2022',
          time: '08:00 sd 09:00',
          link: 'https://meet.google.com/fdsjfhakj',
          trainer: 'Mr.Lex',
        },
        {
          class: 'Fit Rush',
          date: '20 Mei 2022',
          time: '08:00 sd 09:00',
          link: 'https://meet.google.com/fdsjfhakj',
          trainer: 'Mr.Lex',
        },
        {
          class: 'Fit Box',
          date: '20 Mei 2022',
          time: '08:00 sd 09:00',
          link: 'https://meet.google.com/fdsjfhakj',
          trainer: 'Mr.Lex',
        },
        {
          class: 'Mat Palites',
          date: '20 Mei 2022',
          time: '08:00 sd 09:00',
          link: 'https://meet.google.com/fdsjfhakj',
          trainer: 'Mr.Lex',
        },
        {
          class: 'Strong Nation',
          date: '20 Mei 2022',
          time: '08:00 sd 09:00',
          link: 'https://meet.google.com/fdsjfhakj',
          trainer: 'Mr.Lex',
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
.online {
  padding-left: 35px;
}
</style>