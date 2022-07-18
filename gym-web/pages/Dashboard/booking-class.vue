<template>
  <div id="booking-class">
    <NavbarView />
    <b-container class="p-5 mt-5">
      <b-card-group deck>
        <div class="card" style="max-width: 17rem">
          <div class="card-body">
            <h3>
              <b-icon style="color: #0c303d" icon="wifi"> </b-icon>
              Online Class
            </h3>
          </div>
          <div class="card-footer">
            <NuxtLink to="/Dashboard/Booking/booking-online">
              <h5>Lihat Detail</h5>
            </NuxtLink>
          </div>
        </div>
        <div class="card" style="max-width: 17rem">
          <div class="card-body">
            <h3>
              <b-icon class="h2" style="color: #0c303d" icon="wifi-off">
              </b-icon>
              Offine Class
            </h3>
          </div>
          <div class="card-footer">
            <NuxtLink to="/Dashboard/Booking/booking-offline">
              <h5>Lihat Detail</h5>
            </NuxtLink>
          </div>
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'
export default {
  name: 'BookingClass',
  components: {
    NavbarView,
  },
}
</script>
<style scoped>
#booking-class {
  font-family: 'Roboto', sans-serif;
}
.card {
  border-radius: 6px;
}
.card-footer {
  background: #0c303d;
  color: white;
  border-radius: 0 0 6px 6px;
}
a {
  color: white;
  text-decoration: none;
}
</style>