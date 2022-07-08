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
          <NuxtLink :to="link.to" active-class="active">
            <b-button class="sidebar-btn mt-3" block>
              <b-icon :icon="link.icon"></b-icon>
              {{ link.title }}
            </b-button>
          </NuxtLink>
        </div>
        <button
          type="button"
          v-b-modal.logout
          class="btn btn-dark btn-block sidebar-btn mt-5"
        >
          <b-icon icon="box-arrow-right"></b-icon> Log Out
        </button>
      </div>
    </b-sidebar>
    <b-modal id="logout" hide-footer hide-header>
      <div class="text-center m-5">
        <h2>Log Out</h2>
        <p>Are you sure want to Log out?</p>
        <div class="d-flex justify-content-around">
          <b-button
            variant="outline-secondary"
            class="cancel"
            @click="$bvModal.hide('logout')"
            >Cancel</b-button
          >
          <NuxtLink to="/Dashboard/Auth/login">
            <b-button style="background: #0c303d" class="ps-5 pe-5"
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
          icon: 'person-workspace',
        },
        {
          title: 'Membership',
          to: '/Dashboard/membership',
          icon: 'people-fill',
        },
        {
          title: 'Class Gym',
          to: '/Dashboard/class',
          icon: 'collection',
        },
        {
          title: 'Class Booking',
          to: '/Dashboard/booking-class',
          icon: 'journal-bookmark-fill',
        },
        {
          title: 'News & Content',
          to: '/Dashboard/news-content',
          icon: 'newspaper',
        },
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
#sidebar-backdrop {
  background-color: #0c303d;
}
.sidebar-btn:hover {
  background: #f15a24;
}
.image {
  max-width: 25%;
  justify-content: center;
}
.cancel:hover {
  background: #f15a24;
}
</style>
