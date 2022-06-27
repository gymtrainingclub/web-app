<template>
  <div>
    <b-row>
      <b-col cols="6">
        <b-img class="details" src="@/assets/img/pict1.jpg"></b-img>
      </b-col>
      <b-col cols="6">
        <h5>Tips Workout</h5>
        <h6 class="text-capitalize">
          menjaga kesehatan kulit dengan rutin workout
        </h6>
        <p>by Lizzo</p>
        <p>5 hour ago</p>
      </b-col>
    </b-row>
    <p>
      Jika Anda termasuk seorang pemula yang menjalani sebuah latihan fisik atau
      yang lebih dikenal dengan istilah workout, perlu diingat bahwa sangatlah
      penting untuk memahami diri sendiri terlebih dahulu. Karena dengan
      memahami diri sendiri, secara tak langsung itu menjadi nasihat terbaik
      bagi diri Anda.
    </p>
    <p>
      Jika Anda dapat membaca apa kebutuhan diri, Anda akan mengetahui ketika
      saat sedang tidak cukup makan, saat berat badan terasa mulai berlebihan,
      ketika Anda memerlukan istirahat yang cukup, atau bahkan ketika tubuh Anda
      membutuhkan latihan yang lebih keras.
    </p>
    <p>
      Bagian yang menyenangkan dari berolahraga adalah menemukan pemahaman yang
      lebih baik tentang tubuh Anda. Untuk mendapatkan hasil maksimal dari
      latihan gym atau workout Anda, berikut adalah 4 tips untuk pemula.
    </p>
    <p>
      Jika Anda dapat membaca apa kebutuhan diri, Anda akan mengetahui ketika
      saat sedang tidak cukup makan, saat berat badan terasa mulai berlebihan,
      ketika Anda memerlukan istirahat yang cukup, atau bahkan ketika tubuh Anda
      membutuhkan latihan yang lebih keras.
    </p>
    <div class="d-flex justify-content-end">
      <b-button class="mr-2 pr-4 pl-4" variant="outline-secondary"
        >Delete</b-button
      >
      <NuxtLink to="/Dashboard/NewsAndContent/News/edit-newsletter">
        <b-button class="pr-4 pl-4" style="background-color: #0c303d"
          >Edit</b-button
        >
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsNews',
}
</script>

<style>
.details {
  max-width: 100%;
}
a {
  color: black;
  text-decoration: none;
}
</style>