<template>
  <div>
    <NavbarView />
    <b-container class="p-5 mt-5">
      <h1>Profile</h1>
      <b-row class="mt-5">
        <b-col cols="12" sm="4" md="4" class="text-center">
          <div>
            <b-avatar :src="profiles.photo" size="6rem"></b-avatar>
            <div class="mt-2 text-center">
              <h5>{{ profiles.name }}</h5>
              <p style="font-size: 13px">Super Admin</p>
            </div>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="8">
          <b-form>
            <b-form-group>
              <label><strong> ID </strong></label>
              <b-form-input :value="profiles.id" disabled></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> Nama </strong></label>
              <b-form-input :value="profiles.name" disabled></b-form-input>
            </b-form-group>

            <b-form-group>
              <label><strong> Email </strong></label>
              <b-form-input
                type="email"
                :value="profiles.email"
                disabled
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <label><strong> Password </strong></label>
              <b-form-input type="password" disabled> </b-form-input>
              <!-- <b-icon icon="eye-slash-fill"></b-icon> -->
            </b-form-group>
            <div class="d-flex justify-content-end">
              <b-button style="background: #0c303d">Change</b-button>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/NavbarView.vue'
export default {
  name: 'ProfilePage',
  components: {
    NavbarView,
  },
  computed: {
    profiles() {
      return this.$store.state.profile
    },
  },
  mounted() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      this.$store.dispatch('getProfile')
    },
  },
}
</script>