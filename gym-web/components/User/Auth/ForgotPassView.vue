<template>
	<div class="box-center col-lg-7">
		<div class="card shadow-sm p-5">
			<div class="card-body">
				<div class="text-center">
					<h3>
						<NuxtLink to="/user/auth/login" class="text-none">
							Forgot Your Password ?
						</NuxtLink>
					</h3>
					<p>Enter Your Email to Reset Your Password</p>
				</div>
				<form class="mt-3">
					<div class="form-group">
						<label for="exampleInputUsername">Email</label>
						<input
							type="text"
							class="form-control"
							id="exampleInputUsername"
							placeholder="Email"
							v-model="email"
						/>
					</div>
					<div class="d-flex justify-content-center mt-2">
						<button
							@click="handleForgot"
							type="button"
							class="btn btn-dark font-weight-bold shadow-lg"
						>
							Reset Password
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ForgotPassView',
	data() {
		return {
			email: '',
		}
	},
	methods: {
		handleForgot() {
			this.$axios
				.post(
					'https://virtserver.swaggerhub.com/imanuelpay/gym-api/1.0.0/forgot-password',
					{
						email: this.email,
					}
				)
				.then((res) => {
					this.$router.push('/user/auth/login')
				})
				.catch((err) => {
					console.log(err)
				})
		},
	},
}
</script>

<style scoped>
.box-center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.text-none {
	color: black;
}
.text-none:hover {
	text-decoration: none;
	color: black;
}
</style>
