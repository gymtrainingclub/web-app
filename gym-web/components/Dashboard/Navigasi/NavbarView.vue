<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" style="background: #0c303d">
      <b-navbar-brand href="#" style="color: white">
        <div id="sidebar-backdrop" class="text-start">
          <SidebarView />
        </div>
        <div class="d-flex align-item-center">
          <b-icon v-b-toggle.sidebar-backdrop class="h3" icon="list"></b-icon>
        </div>
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto mr-3">
          <div class="mr-2 row align-items-center">
            <b-icon variant="white" class="h5 mt-2 mr-3" icon="bell-fill">
              <!-- icons -->
            </b-icon>
            <span class="mr-3">Cleo Zhacky</span>
            <b-avatar variant="info" src="https://placekitten.com/300/300">
              <!-- avatar -->
            </b-avatar>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import SidebarView from '@/components/Dashboard/Navigasi/SidebarView.vue'
export default {
  name: 'NavbarView',
  components: {
    SidebarView,
  },
}
</script>

<style>
span {
  color: white;
}
</style>
