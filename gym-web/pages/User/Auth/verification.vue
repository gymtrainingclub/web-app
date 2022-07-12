<template>
  <div id="verification">
    <VerificationView />
  </div>
</template>

<script>
import VerificationView from '@/components/User/Auth/VerificationView.vue'
export default {
  name: 'VerificationUser',
  components: { VerificationView },
}
</script>
<style scoped>
#verification {
  font-family: 'Roboto', sans-serif;
}
</style>