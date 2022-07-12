<template>
  <div id="landing-page">
    <NavbarView />
    <HeaderView />
    <DownloadView />
    <FooterView />
  </div>
</template>

<script>
import NavbarView from '@/components/User/Content/NavbarView.vue'
import FooterView from '@/components/User/Content/FooterView.vue'
import HeaderView from '@/components/User/Content/HeaderView.vue'
import DownloadView from '@/components/User/Content/DownloadView.vue'

export default {
  name: 'LandingPage',
  components: { NavbarView, FooterView, HeaderView, DownloadView },
}
</script>
<style scoped>
#landing-page {
  font-family: 'Roboto', sans-serif;
}
</style>
