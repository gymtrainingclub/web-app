<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" style="background: #0c303d">
      <b-navbar-brand href="#" style="color: white">
        <b-sidebar id="sidebar-1" backdrop-variant="primary" title="Sidebar">
          <div class="px-3 py-2">
            <b-img
              thumbnail
              src="https://picsum.photos/500/500/?image=54"
            ></b-img>
          </div>
        </b-sidebar>
        <b-icon v-b-toggle.sidebar-1 icon="list"></b-icon>
        CAPSTONE GYM CLUB
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <div></div>
        <b-navbar-nav class="ml-auto">
          <div class="mr-2 row align-items-center">
            <b-icon variant="white" icon="bell-fill"></b-icon>
            <span class="ml-4">Cleo Zhacky</span>
          </div>
          <!-- <div class="row align-items-center mr-2"></div> -->
          <div></div>
          <div>
            <b-avatar
              variant="info"
              src="https://placekitten.com/300/300"
            ></b-avatar>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'NavbarView',
}
</script>
<style>
span {
  color: white;
}
</style>