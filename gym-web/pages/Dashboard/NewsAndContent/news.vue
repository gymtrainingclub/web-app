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