<template>
  <div class="container-fluid">
    <h4 class="text-center mb-5">
      Saatnya Sehat dengan seluruh member Capstone GYM di seluruh Indonesia
    </h4>
    <div class="col-lg-12 row mx-auto">
      <div class="col-lg-3" v-for="item in items">
        <div class="card rounded mb-3 p-3" style="width: 18rem; height: 25rem">
          <img
            class="card-img-top"
            src="@/assets/img/Header.png"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TestimonialView',
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.$axios
      .get('https://capstone-gym-project.herokuapp.com/api/v1/testimonial')
      .then((result) => {
        this.items = result.data.data.testimonial
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>
