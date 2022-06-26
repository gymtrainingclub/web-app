<template>
  <div>
    <NavbarView />
    <b-container class="p-5 mt-5">
      <b-card-group deck>
        <div class="card" style="max-width: 17rem">
          <div class="card-body">
            <h3>
              <b-icon style="color: #0c303d" icon="newspaper"> </b-icon>
              Newsletter
            </h3>
          </div>
          <div class="card-footer">
            <NuxtLink to="/admin/Dashboard/News&Content/news">
              <h5>Lihat Detail</h5>
            </NuxtLink>
          </div>
        </div>
        <div class="card" style="max-width: 17rem">
          <div class="card-body">
            <h3>
              <b-icon style="color: #0c303d" icon="person-lines-fill"> </b-icon>
              Content
            </h3>
          </div>
          <div class="card-footer">
            <NuxtLink to="/admin/Dashboard/News&Content/content">
              <h5>Lihat Detail</h5>
            </NuxtLink>
          </div>
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/NavbarView.vue'
export default {
  name: 'NewsAndContent',
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