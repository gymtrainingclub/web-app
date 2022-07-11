<template>
  <div id="content">
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
            <NuxtLink to="/Dashboard/NewsAndContent/news">
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
            <NuxtLink to="/Dashboard/NewsAndContent/content">
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
  name: 'NewsAndContent',
  components: {
    NavbarView,
  },
}
</script>
<style scoped>
#content {
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