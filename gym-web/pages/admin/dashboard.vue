<template>
  <div>
    <navbar-view />
    <b-container class="p-5 mt-5">
      <b-card-group class="text-center" deck>
        <div v-for="(card, index) in cards" :key="index" class="card">
          <div class="card-header">
            <h5>{{ card.name }} <b-icon :icon="card.icon"></b-icon></h5>
          </div>
          <div class="card-body">
            <h1 class="card-title">{{ card.value }}</h1>
          </div>
        </div>
      </b-card-group>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '~/components/Dashboard/NavbarView.vue'
export default {
  name: 'DashboardPage',
  components: {
    NavbarView,
  },
  data() {
    return {
      cards: [
        { icon: 'person-square', name: 'Admin', value: 4 },
        { icon: 'people-fill', name: 'Membership', value: 40 },
        { icon: 'layout-text-window', name: 'Class', value: 5 },
        { icon: 'journal-bookmark-fill', name: 'Booking', value: 23 },
      ],
      buttons: [
        'List Admin',
        'List Membership',
        'List Instructor',
        'Class',
        'Room',
      ],
    }
  },
}
</script>
<style scoped>
.card-header {
  background: #0c303d;
  color: white;
}
</style>