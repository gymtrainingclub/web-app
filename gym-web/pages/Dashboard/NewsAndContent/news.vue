<template>
  <div>
    <NewsComponent />
  </div>
</template>
<script>
import NewsComponent from '~/components/Dashboard/NewsComponent.vue'
// import DetailsNews from '@/components/Dashboard/NewsAndContent/news/details-news.vue'

export default {
  name: 'NewsPage',
  components: {
    NewsComponent,
  },
}
</script>
<style scoped>
a {
  color: black;
  text-decoration: none;
}
.btn-search {
  width: 113px;
  color: #0c303d;
  background-color: #f15a24;
}
.search {
  width: 600px;
}
</style>