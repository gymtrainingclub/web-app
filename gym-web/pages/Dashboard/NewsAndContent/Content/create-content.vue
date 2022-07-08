<template>
  <div>
    <CreateContentComponent />
  </div>
</template>
<script>
import CreateContentComponent from '~/components/Dashboard/NewsAndContent/content/CreateComponent.vue'

export default {
  name: 'CreateContent',
  components: {
    CreateContentComponent,
  },
}
</script>