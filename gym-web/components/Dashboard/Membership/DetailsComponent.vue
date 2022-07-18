<template>
  <div id="details-member">
    <NavbarView />
    <b-container class="pt-5 mt-5">
      <h2>
        <NuxtLink to="/Dashboard/Membership/members-data">
          <b-icon icon="chevron-left"></b-icon>
        </NuxtLink>
        Details Membership
      </h2>
      <b-row class="mt-5">
        <b-col cols="12" md="3" class="text-center">
          <div>
            <b-avatar
              src="https://placekitten.com/400/400"
              size="6rem"
            ></b-avatar>
            <div class="mt-2">
              <h5>GOLD MEMBER</h5>
            </div>
            <b-button v-b-modal.delete style="background: #0c303d">
              Delete <b-icon icon="trash"></b-icon
            ></b-button>
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <b-form>
            <b-form-group>
              <label><strong> Name </strong></label>
              <b-form-input
                :value="this.$route.params.id.name"
                disabled
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> Gender </strong></label>
              <b-form-input
                :value="this.$route.params.id.gender"
                disabled
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> ID Member's </strong></label>
              <b-form-input
                :value="this.$route.params.id.id"
                disabled
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> Number Phone </strong></label>
              <b-form-input
                :value="this.$route.params.id.no_handphone"
                disabled
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> Email </strong></label>
              <b-form-input
                type="email"
                :value="this.$route.params.id.email"
                disabled
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <label><strong> Address </strong></label>
              <b-form-input
                :value="this.$route.params.id.address"
                disabled
              ></b-form-input>
            </b-form-group>
            <div class="row d-flex justify-content-between">
              <div class="col-sm">
                <b-form-group>
                  <label><strong> Start Join </strong></label>
                  <b-form-input
                    :value="this.$route.params.id.start_join"
                    disabled
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm">
                <b-form-group>
                  <label><strong> End Join </strong></label>
                  <b-form-input
                    :value="this.$route.params.id.end_join"
                    disabled
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
          </b-form>
        </b-col>
      </b-row>
      <b-modal id="delete" hide-header hide-footer>
        <DeleteComponent :title="title" />
      </b-modal>
    </b-container>
  </div>
</template>
<script>
import NavbarView from '@/components/Dashboard/Navigasi/NavbarView.vue'
import DeleteComponent from '@/components/Dashboard/DeleteComponent.vue'

export default {
  name: 'DetailsMembershipComponent',
  components: {
    NavbarView,
    DeleteComponent,
  },
  data() {
    return {
      title: 'Member',
    }
  },
}
</script>
<style scoped>
#details-member {
  font-family: 'Roboto', sans-serif;
}
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