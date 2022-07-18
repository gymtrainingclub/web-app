<template>
  <div id="modal" class="text-center m-5">
    <b-icon class="h2" icon="trash"></b-icon>
    <h2>Delete {{ title }} ?</h2>
    <p>Deleting this file will be permanent.</p>
    <p class="text-danger">{{ error }}</p>
    <div class="d-flex justify-content-around">
      <b-button
        variant="outline-secondary"
        class="cancel shadow"
        @click="$bvModal.hide('delete')"
        >Cancel</b-button
      >
      <b-button class="shadow" @click="deleteAdmin" style="background: #0c303d">
        Delete
      </b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DeleteForAll',
  props: ['title'],
  data() {
    return {
      error: '',
    }
  },
  methods: {
    deleteAdmin() {
      const user = localStorage.getItem('data')
      if (user.id != 1) {
        this.error = "You don't have an access"
        return false
      }
      let id = localStorage.getItem('delete')
      this.$axios
        .get('https://capstone-gym-project.herokuapp.com/api/v1/admin/delete', {
          params: { id: id },
        })
        .then((result) => {
          console.log(result)
          this.$router.push('/dashboard/admin/admin-data')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
<style scoped>
#modal {
  font-family: 'Roboto', sans-serif;
}
h2 {
  font-size: 24px;
  font-weight: 600;
  line-height: 20px;
}
.cancel:hover {
  background: #f15a24;
}
</style>
