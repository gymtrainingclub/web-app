<template>
  <div id="online-booking">
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
            v-model="search"
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
            <tr v-for="(item, index) in filteredClass" :key="index">
              <th scope="row"><input type="checkbox" /></th>
              <td>{{ item.name }}</td>
              <td>
                <a href="#">{{ item.url }}</a>
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
      search: '',
      onlineClass: [],
    }
  },
  computed: {
    filteredClass() {
      if (this.search) {
        return this.onlineClass.filter((online) => {
          return this.search
            .toLowerCase()
            .split(' ')
            .every((query) => online.name.toLowerCase().includes(query))
        })
      } else {
        return this.onlineClass
      }
    },
  },
  mounted() {
    const onlineClass = localStorage.getItem('onlineClass')
    this.onlineClass = onlineClass ? JSON.parse(onlineClass) : []
  },
}
</script>
<style scoped>
#online-booking {
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
.online {
  padding-left: 35px;
}
</style>