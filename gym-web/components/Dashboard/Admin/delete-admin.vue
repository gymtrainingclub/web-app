<template>
  <div id="modal" class="text-center m-5">
    <b-icon class="h2" icon="trash"></b-icon>
    <h2>Delete File?</h2>
    <p>Deleting this file will be permanent.</p>
    <div class="d-flex justify-content-around">
      <b-button
        variant="outline-secondary"
        class="cancel"
        @click="$bvModal.hide('modal')"
        >Cancel</b-button
      >
      <b-button style="background: #0c303d">Delete</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DeleteAdmin',
}
</script>
<style  scoped>
.cancel:hover {
  background: #f15a24;
}
</style>