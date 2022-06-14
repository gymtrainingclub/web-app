<template>
  <div>
    <navbar-view />
    <b-container class="p-5 mt-5">
      <b-card-group class="text-center" deck>
        <div v-for="card in cards" :key="card" class="card">
          <div class="card-header">
            <h5>{{ card.name }} <b-icon :icon="card.icon"></b-icon></h5>
          </div>
          <div class="card-body">
            <h1 class="card-title">{{ card.value }}</h1>
          </div>
        </div>
      </b-card-group>
      <!-- <div>
        <b-button-group v-for="name in buttons" :key="name" class="">
          <b-button variant="danger" class="m-5 d-flex justify-content-center">
            {{ name }}
          </b-button>
        </b-button-group>
      </div>
      <div class="text-center">
        <b-table striped hover :items="items"></b-table>
      </div> -->
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