<template>
  <div id="newsletter">
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
          v-model="search"
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
      <!-- <b-table striped hover :items="newsletters" :fields="fields"></b-table> -->
      <table class="table table-borderless text-center">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" /></th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Date</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">
              <NuxtLink to="/Dashboard/NewsAndContent/News/create-newsletter">
                <b-icon class="h3" icon="plus-circle"></b-icon>
              </NuxtLink>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in filteredArticle" :key="article.id">
            <th scope="row"><input type="checkbox" /></th>
            <td>{{ article.title }}</td>
            <td>{{ article.author }}</td>
            <td>{{ article.date }}</td>
            <td>
              <NuxtLink
                :to="{
                  name: `Dashboard-NewsAndContent-News-id`,
                  params: { id: article },
                }"
              >
                <b-icon class="mr-1" icon="pencil-square"></b-icon>
              </NuxtLink>
            </td>
            <td>
              <b-icon v-b-modal.delete icon="trash"></b-icon>
            </td>
            <td @click="showModal(article)">
              <i>See more</i>
              <b-icon class="mr-1" icon="box-arrow-up-right"></b-icon>
            </td>
          </tr>
        </tbody>
      </table>
      <b-modal id="modal-1" title="Details Newsletter" hide-footer>
        <div id="newsletter">
          <b-row>
            <!-- <b-col cols="6">
              <b-img class="details" :src="selectedItem.image"></b-img>
            </b-col> -->
            <b-col cols="6">
              <h5>{{ selectedItem.category }}</h5>
              <h6 class="text-capitalize">
                {{ selectedItem.title }}
              </h6>
              <p>by {{ selectedItem.author }}</p>
              <p>{{ selectedItem.date }}</p>
            </b-col>
          </b-row>
          <p>
            {{ selectedItem.desc }}
          </p>

          <div class="d-flex justify-content-end">
            <b-button
              v-b-modal.delete
              class="mr-2 pr-4 pl-4"
              variant="outline-secondary"
              >Delete</b-button
            >
          </div>
        </div>
      </b-modal>
      <b-modal id="delete" hide-header hide-footer>
        <DeleteComponent :title="title" />
      </b-modal>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'
import DeleteComponent from '@/components/Dashboard/DeleteComponent.vue'

export default {
  name: 'NewsComponent',

  components: {
    NavbarView,
    DeleteComponent,
  },

  data() {
    return {
      selectedItem: {},
      search: '',
      fields: ['Title', 'Author'],
      buttons: ['Lifestyle', 'Gym News', 'Tips Workout', 'Diet'],
      title: 'Article',
      newsletter: [],
      isEditing: false,
      selectedArticle: null,
    }
  },

  computed: {
    filteredArticle() {
      if (this.search) {
        return this.newsletter.filter((article) => {
          return this.search
            .toLowerCase()
            .split(' ')
            .every((query) => article.title.toLowerCase().includes(query))
        })
      } else {
        return this.newsletter
      }
    },
  },
  mounted() {
    const newsletter = localStorage.getItem('newsletter')
    this.newsletter = newsletter ? JSON.parse(newsletter) : []
  },

  methods: {
    showModal(item) {
      this.selectedItem = item
      this.$root.$emit('bv::show::modal', 'modal-1')
    },
  },
}
</script>
<style scoped>
#newsletter {
  font-family: 'Roboto', sans-serif;
}
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
.details {
  max-width: 100%;
}
</style>