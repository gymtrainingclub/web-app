<template>
  <div>
    <NavbarView />
    <b-container class="pt-5 mt-5">
      <h2>
        <NuxtLink to="/Dashboard/Membership/members-data">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        Details Membership
      </h2>
      <b-row class="mt-5">
        <b-col cols="3" class="text-center">
          <div>
            <b-avatar
              src="https://placekitten.com/400/400"
              size="6rem"
            ></b-avatar>
            <div class="mt-2">
              <h5>GOLD MEMBER</h5>
            </div>
          </div>
        </b-col>
        <b-col cols="6">
          <b-form>
            <b-form-group>
              <label><strong> Name </strong></label>
              <b-form-input
                placeholder="Meishana Thomas"
                disabled
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> Gender </strong></label>
              <b-form-input placeholder="Female" disabled></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> ID Member's </strong></label>
              <b-form-input placeholder="ID-0000012" disabled></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> Number Phone </strong></label>
              <b-form-input placeholder="+628478923784" disabled></b-form-input>
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
              <label><strong> Address </strong></label>
              <b-form-input placeholder="ID-0000012" disabled></b-form-input>
            </b-form-group>
            <div class="d-flex justify-content-between">
              <b-form-group>
                <label><strong> Start Join </strong></label>
                <b-form-input placeholder="01 Mei 2022" disabled></b-form-input>
              </b-form-group>
              <b-form-group>
                <label><strong> End Join </strong></label>
                <b-form-input placeholder="24 Mei 2022" disabled></b-form-input>
              </b-form-group>
            </div>
          </b-form>
        </b-col>
        <b-col cols="3" class="mt-4">
          <b-button style="background: #0c303d">
            Delete <b-icon icon="trash"></b-icon
          ></b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/NavbarView.vue'

export default {
  name: 'DetailsMembership',
  components: {
    NavbarView,
  },
}
</script>
<style scoped>
/* .title {
  border-radius: 50px;
} */
.detail {
  border-radius: 15px;
}
.card-member {
  /* padding: 65px; */
  border-radius: 15px;
}
a {
  text-decoration: none;
  color: black;
}
</style>