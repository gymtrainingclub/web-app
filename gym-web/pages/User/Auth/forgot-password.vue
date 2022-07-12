<template>
  <div id="forget-password">
    <ForgotPassView />
  </div>
</template>

<script>
import ForgotPassView from '@/components/User/Auth/ForgotPassView.vue'
export default {
  name: 'ForgotPassUser',
  components: { ForgotPassView },
}
</script>
<style scoped>
#forget-password {
  font-family: 'Roboto', sans-serif;
}
</style>
