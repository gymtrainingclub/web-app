<template>
  <div>
    <navbar-view />
    <b-container class="p-5 mt-5">
      <b-card-group class="text-center" deck>
        <div v-for="card in cards" :key="card" class="card">
          <div class="card-header">
            <b-icon :icon="card.icon"></b-icon>
            {{ card.name }}
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ card.value }}</h5>
          </div>
        </div>
      </b-card-group>
      <div>
        <b-button-group v-for="name in buttons" :key="name" class="">
          <b-button variant="danger" class="m-5 d-flex justify-content-center">
            {{ name }}
          </b-button>
        </b-button-group>
      </div>
      <div class="text-center">
        <b-table striped hover :items="items"></b-table>
      </div>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/NavbarView.vue'
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
      items: [
        {
          No: 40,
          Members_Name: 'Dickerson',
          Membership_Type: 'Macdonald',
          No_Handphone: '347197491739',
        },
        {
          No: 21,
          Members_Name: 'Larsen',
          Membership_Type: 'Shaw',
          No_Handphone: '347197491739',
        },
        {
          No: 89,
          Members_Name: 'Geneva',
          Membership_Type: 'Wilson',
          No_Handphone: '347197491739',
        },
        {
          No: 38,
          Members_Name: 'Jami',
          Membership_Type: 'Carney',
          No_Handphone: '347197491739',
        },
        {
          No: 38,
          Members_Name: 'Jami',
          Membership_Type: 'Carney',
          No_Handphone: '347197491739',
        },
        {
          No: 38,
          Members_Name: 'Jami',
          Membership_Type: 'Carney',
          No_Handphone: '347197491739',
        },
        {
          No: 38,
          Members_Name: 'Jami',
          Membership_Type: 'Carney',
          No_Handphone: '347197491739',
        },
      ],
    }
  },
}
</script>