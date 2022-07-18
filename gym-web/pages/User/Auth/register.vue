<template>
  <div id="register">
    <RegisterView />
  </div>
</template>

<script>
import RegisterView from '@/components/User/Auth/RegisterView.vue'
export default {
  name: 'RegisterUser',
  components: { RegisterView },
}
</script>
<style scoped>
#register {
  font-family: 'Roboto', sans-serif;
}
</style>