<template>
  <div>
    <RegisterView />
  </div>
</template>

<script>
import RegisterView from '@/components/Dashboard/RegisterView.vue'
export default {
  name: 'RegisterPage',
  components: { RegisterView },
}
</script>
<style scoped>
.center {
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
