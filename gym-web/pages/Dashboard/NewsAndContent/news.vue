<template>
  <div>
    <NavbarView />
    <b-container class="p-5 m-5">
      <h2>
        <NuxtLink to="/Dashboard/news-content">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        Newsletter
      </h2>

      <b-nav-form class="mt-4">
        <b-form-input
          size="lg"
          class="mr-2 search"
          placeholder="Search"
        ></b-form-input>
        <b-button size="lg" class="my-2 my-sm-0 btn-search" type="submit"
          ><b-icon icon="search"></b-icon
        ></b-button>
      </b-nav-form>
      <b-button-group v-for="button in buttons" :key="button">
        <b-button style="background-color: #0c303d" class="mr-3 mt-4">{{
          button
        }}</b-button>
      </b-button-group>
      <table class="table table-borderless text-center">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" /></th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Date</th>
            <th scope="col">
              <NuxtLink to="/Dashboard/NewsAndContent/News/create-newsletter">
                <b-icon class="h3" icon="plus-circle"></b-icon>
              </NuxtLink>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(newsletter, index) in newsletters" :key="index">
            <th scope="row"><input type="checkbox" /></th>
            <td>{{ newsletter.title }}</td>
            <td>{{ newsletter.created_by }}</td>
            <td>{{ newsletter.created_at }}</td>
            <td>
              <b-icon
                v-b-modal.modal-1
                class="mr-1"
                icon="pencil-square"
              ></b-icon>
              <b-icon icon="trash"></b-icon>
            </td>
          </tr>
        </tbody>
      </table>
      <b-modal id="modal-1" title="Details News" hide-footer>
        <DetailsNews />
      </b-modal>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/NavbarView.vue'
import DetailsNews from '@/components/Dashboard/NewsAndContent/news/details-news.vue'

export default {
  name: 'NewsPage',
  components: {
    NavbarView,
    DetailsNews,
  },
  data() {
    return {
      buttons: ['Lifestyle', 'Gym News', 'Tips Workout', 'Diet'],
    }
  },
  computed: {
    newsletters() {
      return this.$store.state.newsletter
    },
  },
  mounted() {
    this.getNewsletter()
  },
  methods: {
    getNewsletter() {
      this.$store.dispatch('getNewsletter')
    },
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