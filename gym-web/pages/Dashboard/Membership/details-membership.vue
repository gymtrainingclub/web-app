<template>
  <div>
    <NavbarView />
    <b-container class="pt-5 mt-5">
      <h2>
        <NuxtLink to="/admin/Dashboard/Membership/members-data">
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
      <!-- <div class="mt-4">
        <div class="row p-2">
          <div class="col-3">Nama</div>
          <div class="col-9">Meysha Thomas</div>
        </div>
        <div class="row p-2">
          <div class="col-3">Id Number/KTP</div>
          <div class="col-9">1923948503844859</div>
        </div>
        <div class="row p-2">
          <div class="col-3">No. Handphone</div>
          <div class="col-9">+62394530985</div>
        </div>
        <div class="row p-2">
          <div class="col-3">Address</div>
          <div class="col-9">Jalan Nurul Haji no 45 kota betung</div>
        </div>
        <div class="row p-2">
          <div class="col-3">Membership</div>
          <div class="col-9">Gold Membership</div>
        </div>
        <div class="row p-2">
          <div class="col-3"></div>
          <div class="col-9">
            <b-card
              style="background: #0c303d"
              text-variant="white"
              class="detail p-3"
            >
              <b-row>
                <b-col class="mt-4">
                  <div>GOLD MEMBER</div>
                  <ol>
                    <li>12 Months</li>
                    <li>Unlimited Online Class</li>
                    <li>Max 4 times or 4 class a week</li>
                  </ol>
                </b-col>
                <b-col>
                  <b-card style="background: #e7b710" class="card-member">
                    <b-row>
                      <b-col>
                        <b-card-text>Membership Card</b-card-text>
                      </b-col>
                      <b-col>
                        <div width="72px" class="d-flex justify-content-end">
                          <b-img
                            height="62px"
                            src="@/assets/img/logo-white.png"
                          ></b-img>
                        </div>
                      </b-col>
                    </b-row>
                    <h4>Gold</h4>
                    <b-card-text>00002</b-card-text>
                    <b-row>
                      <b-col>
                        <b-card-text>Meisha Thomas</b-card-text>
                      </b-col>
                      <b-col class="d-flex justify-content-around">
                        <div>exp</div>
                        <h4>05/23</h4>
                      </b-col>
                    </b-row>
                  </b-card>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </div>
        <div class="row p-2">
          <div class="col-3">Payment</div>
          <div class="col-9">Gopay</div>
        </div>
        <div class="row p-2">
          <div class="col-3">Status Payment</div>
          <div class="col-9">
            <b-row>
              <b-col>
                Success <b-icon variant="success" icon="check-square"></b-icon>
              </b-col>
              <b-col class="d-flex justify-content-end">
                <b-button size="sm" variant="danger">Active</b-button>
              </b-col>
            </b-row>
          </div>
        </div>
      </div> -->
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