<template>
  <div style="background: #0c303d">
    <b-sidebar
      id="sidebar-backdrop"
      aria-labelledby="sidebar-no-header-title"
      backdrop
      shadow
    >
      <div class="pr-3 pl-3">
        <div id="sidebar-no-header-title" class="d-flex justify-content-center">
          <b-img class="image" src="@/assets/img/logo.png"></b-img>
        </div>
        <div v-for="(link, index) in routes" :key="index">
          <NuxtLink :to="link.to">
            <b-button class="sidebar-btn mt-3" block>
              <b-icon :icon="link.icon"></b-icon>
              {{ link.title }}
            </b-button>
          </NuxtLink>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  name: 'SidebarSection',
  data() {
    return {
      routes: [
        { title: 'Dashboard', to: '/admin/dashboard', icon: 'house-door-fill' },
        {
          title: 'Profile',
          to: '/admin/dashboard/profile',
          icon: 'person-fill',
        },
        {
          title: 'Admin',
          to: '/admin/Dashboard/admin',
          icon: 'file-earmark-person',
        },
        {
          title: 'Membership',
          to: '/admin/Dashboard/membership',
          icon: 'people-fill',
        },
        {
          title: 'Class Gym',
          to: '/admin/Dashboard/class',
          icon: 'collection',
        },
        {
          title: 'Class Booking',
          to: '/admin/Dashboard/booking-class',
          icon: 'journal-bookmark-fill',
        },
        {
          title: 'News & Content',
          to: '/admin/Dashboard/news-content',
          icon: 'newspaper',
        },
        // {title: 'Log Out', to: '/admin/dashboard'},
      ],
    }
  },
}
</script>
<style scoped>
.sidebar-btn {
  background-color: #0c303d;
}
a {
  text-decoration: none;
}
.image {
  max-width: 25%;
  justify-content: center;
}
</style>