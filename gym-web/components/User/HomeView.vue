<template>
  <div id="home">
    <div class="container mt-3 mb-5">
      <h4>Welcome to Capstone Gym Club</h4>
      <div class="d-flex justify-content-start mt-5 ml-4 mr-4">
        <b-row>
          <b-col id="membership">
            <div class="card">
              <div class="card member">
                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <p class="card-text">Membership Card</p>
                    <img
                      class="img-membership"
                      src="@/assets/img/logo-white.png"
                    />
                  </div>
                  <h5 class="card-title">Gold</h5>
                  <p class="card-text">000011</p>
                  <div class="d-flex justify-content-between">
                    <p class="card-text">Muhammad Ibnu</p>
                    <p class="card-text">exp <strong> 05/23</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div>
              <h5>Muhammad Ibnu</h5>
              <b-row>
                <b-col>
                  <p>Total Trained</p>
                  <p>Start Join</p>
                  <p>End Membership</p>
                </b-col>
                <b-col>
                  <p>9 Class</p>
                  <p>01 Juni 2022</p>
                  <p>01 Juni 2023</p>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="mt-5">
        <h4>Category</h4>

        <b-row id="category">
          <b-col>
            <div class="card">
              <img
                class="rounded"
                src="@/assets/img/cat-cardio.jpg"
                alt="cardio"
              />
              <div class="card-img-overlay">
                <img width="20%" src="@/assets/img/cardio.png" />
                <h5 class="card-title category">Cardio</h5>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="card">
              <img
                class="rounded"
                src="@/assets/img/cat-strength.jpg"
                alt="strength"
              />
              <div class="card-img-overlay">
                <img width="20%" src="@/assets/img/strength.png" />
                <h5 class="card-title category">Strength</h5>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="card">
              <img
                class="rounded"
                src="@/assets/img/cat-body-mind.jpg"
                alt="body&mind"
              />
              <div class="card-img-overlay">
                <img width="20%" src="@/assets/img/body&mind.png" />
                <h5 class="card-title category">Body & Mind</h5>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="mt-5">
        <h4>Classes</h4>
        <b-card-group deck>
          <b-row id="classes">
            <b-col class="mb-4">
              <div class="card">
                <img
                  class="rounded class-img"
                  width="328px"
                  src="@/assets/img/details-book.jpg"
                  alt="cardio"
                />
                <div class="card-img-overlay">
                  <div
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      mb-2
                    "
                  >
                    <img width="39px" src="@/assets/img/class-cardio.png" />
                    <p class="card-text">Cardio</p>
                  </div>
                  <h5 class="card-title class-title">Fit Rush</h5>
                  <p class="card-text class-text">
                    Lakukan fit n rush dengan suasana yang berbeda dari biasanya
                    hanya dengan 60 menit dan rasakan bedanya
                  </p>
                  <div class="d-flex justify-content-end">
                    <b-button size="sm" pill variant="light">60 Min</b-button>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col class="mb-4">
              <div class="card">
                <img
                  class="rounded class-img"
                  width="328px"
                  src="@/assets/img/zumba.jpg"
                  alt="body&mind"
                />
                <div class="card-img-overlay">
                  <div
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      mb-2
                    "
                  >
                    <img width="39px" src="@/assets/img/class-body&mind.png" />
                    <p class="card-text">Body & Mind</p>
                  </div>
                  <h5 class="card-title class-title">Zumba</h5>
                  <p class="card-text class-text">
                    Rasakan kelas bernuansa Latin dengan ritme yang dirancang
                    untuk menggerakn seluruh tubuh, dan menjadikan Zumba kelas
                    paling favorit
                  </p>
                  <div class="d-flex justify-content-end">
                    <b-button size="sm" pill variant="light">60 Min</b-button>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col class="mb-4">
              <div class="card">
                <img
                  class="rounded class-img"
                  width="328px"
                  src="@/assets/img/booty-shaping.jpg"
                  alt="strength"
                />
                <div class="card-img-overlay">
                  <div
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      mb-2
                    "
                  >
                    <img width="39px" src="@/assets/img/class-strength.png" />
                    <p class="card-text">Strength</p>
                  </div>
                  <h5 class="card-title class-title">Booty Shaping</h5>
                  <p class="card-text class-text">
                    Cocok untuk anda yang ingin mengencangkan dan membentuk
                    tubuh. ini adalah kelas latihan kekuatan yang memperkuat
                    kaki dan pinggul.
                  </p>
                  <div class="d-flex justify-content-end">
                    <b-button size="sm" pill variant="light">60 Min</b-button>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col class="mb-4">
              <div class="card">
                <img
                  class="rounded class-img"
                  width="328px"
                  src="@/assets/img/booty-shaping.jpg"
                  alt="strength"
                />
                <div class="card-img-overlay">
                  <div
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      mb-2
                    "
                  >
                    <img width="39px" src="@/assets/img/class-strength.png" />
                    <p class="card-text">Strength</p>
                  </div>
                  <h5 class="card-title class-title">Booty Shaping</h5>
                  <p class="card-text class-text">
                    Cocok untuk anda yang ingin mengencangkan dan membentuk
                    tubuh. ini adalah kelas latihan kekuatan yang memperkuat
                    kaki dan pinggul.
                  </p>
                  <div class="d-flex justify-content-end">
                    <b-button size="sm" pill variant="light">60 Min</b-button>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col class="mb-4">
              <div class="card">
                <img
                  class="rounded class-img"
                  width="328px"
                  src="@/assets/img/details-book.jpg"
                  alt="cardio"
                />
                <div class="card-img-overlay">
                  <div
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      mb-2
                    "
                  >
                    <img width="39px" src="@/assets/img/class-cardio.png" />
                    <p class="card-text">Cardio</p>
                  </div>
                  <h5 class="card-title class-title">Fit Rush</h5>
                  <p class="card-text class-text">
                    Lakukan fit n rush dengan suasana yang berbeda dari biasanya
                    hanya dengan 60 menit dan rasakan bedanya
                  </p>
                  <div class="d-flex justify-content-end">
                    <b-button size="sm" pill variant="light">60 Min</b-button>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col class="mb-4">
              <div class="card">
                <img
                  class="rounded class-img"
                  width="328px"
                  src="@/assets/img/zumba.jpg"
                  alt="body&mind"
                />
                <div class="card-img-overlay">
                  <div
                    class="
                      d-flex
                      justify-content-between
                      align-items-center
                      mb-2
                    "
                  >
                    <img width="39px" src="@/assets/img/class-body&mind.png" />
                    <p class="card-text">Body & Mind</p>
                  </div>
                  <h5 class="card-title class-title">Zumba</h5>
                  <p class="card-text class-text">
                    Rasakan kelas bernuansa Latin dengan ritme yang dirancang
                    untuk menggerakn seluruh tubuh, dan menjadikan Zumba kelas
                    paling favorit
                  </p>
                  <div class="d-flex justify-content-end">
                    <b-button size="sm" pill variant="light">60 Min</b-button>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
#home {
  font-family: 'Roboto', sans-serif;
}
#membership,
#category,
#classes {
  font-family: 'Inter', sans-serif !important;
}
.member {
  background: #e7b710;
}
.card {
  border-radius: 10px;
  width: 20rem;
}
h5 {
  font-weight: 500;
}
.rounded {
  filter: brightness(50%);
}
.card-text,
.card-title {
  color: white;
}
.card-title {
  font-weight: 700;
}
.img-membership {
  max-width: 20%;
  justify-content: end;
}
.category {
  margin-top: 6.5rem;
}
.class-title {
  font-size: 20px;
  margin-top: 2rem;
}
.class-img {
  height: 242px;
}
.class-text {
  font-size: 12px;
  line-height: 17px;
  font-family: 'Inter', sans-serif;
}
</style>
