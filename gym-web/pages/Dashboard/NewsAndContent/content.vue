<template>
  <div>
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
              <b-icon
                v-b-modal.modal
                class="mr-1"
                icon="pencil-square"
              ></b-icon>

              <b-icon icon="trash"></b-icon>
            </td>
          </tr>
        </tbody>
      </table>
      <b-modal id="modal" title="Details Content" hide-footer>
        <DetailsContent />
      </b-modal>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/NavbarView.vue'
import DetailsContent from '@/components/Dashboard/NewsAndContent/content/details-content.vue'

export default {
  name: 'ContentPage',
  components: {
    NavbarView,
    DetailsContent,
  },
  data() {
    return {
      items: [
        {
          title: 'Meisha Thomas',
          author: 'Lizzo',
          date: '01 Mei 2022',
        },
        {
          title: 'Meisha Thomas',
          author: 'Lizzo',
          date: '01 Mei 2022',
        },
        {
          title: 'Meisha Thomas',
          author: 'Lizzo',
          date: '01 Mei 2022',
        },
        {
          title: 'Meisha Thomas',
          author: 'Lizzo',
          date: '01 Mei 2022',
        },
        {
          title: 'Meisha Thomas',
          author: 'Lizzo',
          date: '01 Mei 2022',
        },
      ],
    }
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
.doc {
  max-width: 9rem;
}
</style>