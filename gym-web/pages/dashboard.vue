<template>
  <div>
    <DashboardComponent />
    <ChartComponent />
  </div>
</template>
<script>
import DashboardComponent from '~/components/Dashboard/DashboardComponent.vue'
import ChartComponent from '~/components/Dashboard/Admin/ChartComponent.vue'
export default {
  name: 'DashboardPage',
  components: {
    DashboardComponent,
    ChartComponent,
  },
}
</script>
<style scoped>
#dashboard {
  font-family: 'Roboto', sans-serif;
}
</style>
