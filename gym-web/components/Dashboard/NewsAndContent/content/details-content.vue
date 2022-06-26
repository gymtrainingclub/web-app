<template>
  <div>
    <h2>How To Build ABS</h2>
    <p>By Reza</p>
    <p>5 hour ago</p>
    <div>
      <b-img class="detail-content" center src="@/assets/img/pict2.jpg"></b-img>
    </div>
    <p>
      Bagaimana membuat otot ABS dengan rutin dan konsisten dengan mengikuti
      step dari coach Reza
    </p>
    <div class="d-flex justify-content-end">
      <b-button class="mr-2 pr-4 pl-4" variant="outline-secondary"
        >Delete</b-button
      >
      <NuxtLink to="/admin/Dashboard/News&Content/Content/edit-content">
        <b-button class="pr-4 pl-4" style="background-color: #0c303d"
          >Edit</b-button
        >
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.detail-content {
  max-width: 75%;
}
</style>