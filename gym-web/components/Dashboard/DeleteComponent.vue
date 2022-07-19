<template>
  <div id="modal" class="text-center m-5">
    <b-icon class="h2" icon="trash"></b-icon>
    <h2>Delete {{ title }} ?</h2>
    <p>Deleting this file will be permanent.</p>
    <div class="d-flex justify-content-around">
      <b-button
        variant="outline-secondary"
        class="cancel shadow"
        @click="$bvModal.hide('delete')"
        >Cancel</b-button
      >
      <b-button
        class="shadow"
        @click="$bvModal.hide('delete')"
        style="background: #0c303d"
        >Delete</b-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'DeleteForAll',
  props: ['title'],
}
</script>
<style  scoped>
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