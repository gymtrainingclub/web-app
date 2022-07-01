<template>
  <div>
    <LoginView />
  </div>
</template>
<script>
import LoginView from '@/components/Auth/LoginComponent.vue'
export default {
  name: 'LoginPage',
  components: {
    LoginView,
  },
}
</script>
<style>
.login {
  width: 35%;
  background-color: #f15a24;
}
#form {
  width: 50%;
}
</style>
