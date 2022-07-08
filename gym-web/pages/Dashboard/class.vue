<template>
  <div>
    <NavbarView />
    <b-container class="p-5 mt-5">
      <b-card-group deck>
        <div class="card" style="max-width: 17rem">
          <div class="card-body">
            <h3>
              <b-icon style="color: #0c303d" icon="folder-fill"> </b-icon>
              Online Class
            </h3>
          </div>
          <div class="card-footer">
            <NuxtLink to="/Dashboard/Class/online-class">
              <h5>Lihat Detail</h5>
            </NuxtLink>
          </div>
        </div>
        <div class="card" style="max-width: 17rem">
          <div class="card-body">
            <h3>
              <b-icon style="color: #0c303d" icon="folder-fill"> </b-icon>
              Offine Class
            </h3>
          </div>
          <div class="card-footer">
            <NuxtLink to="/Dashboard/Class/offline-class">
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
  name: 'ClassPage',
  components: {
    NavbarView,
  },
}
</script>
<style scoped>
.card-footer {
  background: #0c303d;
  color: white;
}
a {
  color: white;
  text-decoration: none;
}
</style>