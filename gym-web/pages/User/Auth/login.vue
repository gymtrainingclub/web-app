<template>
  <div id="login">
    <LoginView />
  </div>
</template>

<script>
import LoginView from '@/components/User/Auth/LoginView.vue'
export default {
  name: 'LoginUser',
  components: { LoginView },
}
</script>
<style scoped>
#login {
  font-family: 'Roboto', sans-serif;
}
</style>