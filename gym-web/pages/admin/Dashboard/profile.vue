<template>
  <div>
    <NavbarView />
    <b-container class="p-5 mt-5">
      <h1>Profile</h1>
      <b-row class="mt-5">
        <b-col cols="4" class="text-center">
          <div>
            <b-avatar
              src="https://placekitten.com/300/300"
              size="6rem"
            ></b-avatar>
            <div class="mt-2 text-center">
              <h5>Cleo Zackry</h5>
              <p style="font-size: 13px">Super Admin</p>
            </div>
          </div>
        </b-col>
        <b-col cols="8">
          <b-form>
            <b-form-group>
              <label><strong> ID </strong></label>
              <b-form-input placeholder="ID-001" disabled></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> Nama </strong></label>
              <b-form-input placeholder="Cleo Zackry" disabled></b-form-input>
            </b-form-group>

            <b-form-group>
              <label><strong> Email </strong></label>
              <b-form-input
                type="email"
                placeholder="Conton@capstonegym.com"
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
}
</script>