<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      aria-labelledby="sidebar-no-header-title"
      no-header-close
      backdrop
      shadow
    >
      <div class="pr-3 pl-3">
        <div id="sidebar-no-header-title" class="d-flex justify-content-center">
          <b-img class="image" src="@/assets/img/logo-transparan.png"></b-img>
        </div>
        <div v-for="(link, index) in routes" :key="index">
          <NuxtLink exact-active-class="active" :to="link.to">
            <button
              type="button"
              class="btn btn-dark btn-block sidebar-btn mt-3 text-left"
            >
              <b-icon :icon="link.icon"></b-icon>
              {{ link.title }}
            </button>
          </NuxtLink>
        </div>
        <button
          type="button"
          v-b-modal.logout
          class="btn btn-dark btn-block sidebar-btn mt-5 text-left"
        >
          <b-icon icon="box-arrow-right"></b-icon> Log Out
        </button>
      </div>
    </b-sidebar>
    <b-modal id="logout" hide-footer hide-header>
      <div id="logout" class="text-center m-5">
        <h2>Log Out</h2>
        <p>Are you sure want to Log out?</p>
        <div class="d-flex justify-content-around">
          <b-button
            variant="outline-secondary"
            class="cancel shadow"
            @click="$bvModal.hide('logout')"
            >Cancel</b-button
          >
          <NuxtLink to="/Dashboard/Auth/login">
            <b-button
              style="background: #0c303d"
              class="ps-5 pe-5 shadow"
              @click="destroyStorage"
              >Yes</b-button
            >
          </NuxtLink>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'SidebarSection',
  data() {
    return {
      routes: [
        { title: 'Dashboard', to: '/dashboard', icon: 'house-door-fill' },
        {
          title: 'Profile',
          to: '/dashboard/profile',
          icon: 'person-fill',
        },
        {
          title: 'Admin',
          to: '/Dashboard/admin',
          icon: 'person-bounding-box',
        },
        {
          title: 'Membership',
          to: '/Dashboard/membership',
          icon: 'people-fill',
        },
        {
          title: 'Class Gym',
          to: '/Dashboard/class',
          icon: 'grid-fill',
        },
        {
          title: 'Class Booking',
          to: '/Dashboard/booking-class',
          icon: 'journal-bookmark-fill',
        },
        {
          title: 'News & Content',
          to: '/Dashboard/news-content',
          icon: 'grid-1x2-fill',
        },
      ],
    }
  },
  methods: {
    destroyStorage() {
      localStorage.clear()
    },
  },
}
</script>

<style scoped>
#logout {
  font-family: 'Roboto', sans-serif;
}
.sidebar-btn {
  background-color: #0c303d;
  font-size: 20px;
  border-radius: 8px;
}
a {
  text-decoration: none;
}

.sidebar-btn:hover {
  background: #f15a24;
}
.image {
  max-width: 30%;
}
.cancel:hover {
  background: #f15a24;
}
</style>
