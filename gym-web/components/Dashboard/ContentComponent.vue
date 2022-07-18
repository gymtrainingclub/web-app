<template>
  <div id="content">
    <NavbarView />
    <b-container class="p-5 m-5">
      <h2>
        <NuxtLink to="/Dashboard/news-content">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        Content
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
      <table class="table table-borderless text-center">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" /></th>
            <th scope="col">Title</th>
            <th scope="col">Documentation</th>
            <th scope="col">Author</th>
            <th scope="col">Date</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">
              <NuxtLink to="/Dashboard/NewsAndContent/Content/create-content">
                <b-icon class="h3" icon="plus-circle"></b-icon>
              </NuxtLink>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <th scope="row"><input type="checkbox" /></th>
            <td>{{ item.title }}</td>
            <td><b-img class="doc" src="@/assets/img/pict2.jpg"></b-img></td>
            <td>{{ item.author }}</td>
            <td>{{ item.date }}</td>
            <td>
              <NuxtLink
                :to="{
                  name: `Dashboard-NewsAndContent-Content-id`,
                  params: { id: item },
                }"
              >
                <b-icon class="mr-1" icon="pencil-square"></b-icon>
              </NuxtLink>
            </td>
            <td>
              <b-icon v-b-modal.delete icon="trash"></b-icon>
            </td>
            <td @click="showModal(item)">
              <i>See More</i>
              <b-icon icon="box-arrow-up-right"></b-icon>
            </td>
          </tr>
        </tbody>
      </table>
      <b-modal id="modal" title="Details Content" hide-footer>
        <div id="content">
          <h2>{{ selectedItem.title }}</h2>
          <p>By {{ selectedItem.author }}</p>
          <p>5 hour ago</p>
          <div>
            <b-img
              class="detail-content p-4"
              rounded
              center
              src="@/assets/img/pict2.jpg"
            ></b-img>
          </div>
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
// import DetailsContent from '@/components/Dashboard/NewsAndContent/content/details-content.vue'

export default {
  name: 'ContentPage',
  components: {
    NavbarView,
    DeleteComponent,
  },
  data() {
    return {
      title: 'Content',
      selectedItem: {},
      items: [
        {
          title: 'How To Build ABS',
          author: 'Lizzo',
          date: '01 Mei 2022',
          desc: 'Bagaimana membuat otot ABS dengan rutin dan konsisten dengan mengikuti step dari coach Reza',
        },
        {
          title: 'How To Build ABS',
          author: 'Mahesa',
          date: '01 Mei 2022',
          desc: 'Bagaimana membuat otot ABS dengan rutin dan konsisten dengan mengikuti step dari coach Reza',
        },
        {
          title: 'How To Build ABS',
          author: 'Reza',
          date: '01 Mei 2022',
          desc: 'Bagaimana membuat otot ABS dengan rutin dan konsisten dengan mengikuti step dari coach Reza',
        },
        {
          title: 'How To Build ABS',
          author: 'Kenzo',
          date: '01 Mei 2022',
          desc: 'Bagaimana membuat otot ABS dengan rutin dan konsisten dengan mengikuti step dari coach Reza',
        },
        {
          title: 'How To Build ABS',
          author: 'Reva',
          date: '01 Mei 2022',
          desc: 'Bagaimana membuat otot ABS dengan rutin dan konsisten dengan mengikuti step dari coach Reza',
        },
      ],
    }
  },
  methods: {
    showModal(item) {
      this.selectedItem = item
      this.$root.$emit('bv::show::modal', 'modal')
    },
  },
}
</script>
<style scoped>
#content {
  font-family: 'Roboto', sans-serif;
}
a {
  color: black;
  text-decoration: none;
}
.detail-content {
  max-width: 100%;
}
.btn-search {
  width: 113px;
  color: #0c303d;
  background-color: #f15a24;
}
.search {
  width: 600px;
}
.doc {
  max-width: 9rem;
}
</style>