<template>
	<div class="box-center col-lg-7">
		<div class="card text-center p-5">
			<div class="card-body">
				<b-icon icon="envelope" class="h1"></b-icon>
				<h3>Verify Your Account</h3>
				<p class="mb-0 mt-3">Register Successfully</p>
				<p class="pb-3">
					To complete your registration. Check your email to verify your account
				</p>
				<a href="#" target="_blank">Open Email</a>
				<div class="d-flex justify-content-center mt-3">
					<button
						type="button"
						class="btn btn-dark font-weight-bold shadow-lg"
						@click="handleVerification"
					>
						Resend Verification Email
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VerificationView',
	methods: {
		handleVerification() {
			const id = 'id' + Math.random().toString(16).slice(2)
			console.log(id)
			this.$axios
				.get(
					`https://virtserver.swaggerhub.com/imanuelpay/gym-api/1.0.0/verify/${id}`
				)
				.then((result) => {
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
</style>
