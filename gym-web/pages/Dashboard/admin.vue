<template>
  <div id="admin">
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
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'
export default {
  name: 'AdminPage',
  components: {
    NavbarView,
  },
}
</script>
<style scoped>
#admin {
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
  text-decoration: none;
  color: white;
}
</style>