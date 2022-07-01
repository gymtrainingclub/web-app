<template>
  <div>
    <NavbarView />
    <b-container class="p-5 mt-5">
      <div class="card" style="max-width: 15rem">
        <div class="card-body d-flex justify-content-around">
          <b-icon class="h1" style="color: #0c303d" icon="folder-fill"></b-icon>
          <h3 class="card-title">Data Admin</h3>
        </div>
        <div class="card-footer">
          <NuxtLink to="/Dashboard/Admin/admin-data">
            <h5>Lihat Detail</h5>
          </NuxtLink>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/NavbarView.vue'
export default {
  name: 'AdminPage',
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
  text-decoration: none;
  color: white;
}
</style>