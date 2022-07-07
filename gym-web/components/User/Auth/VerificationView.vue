<template>
	<div class="box-center">
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
					<button type="button" class="btn btn-dark font-weight-bold shadow-lg">
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
}
</script>

<style scoped>
.box-center {
	width: 55%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
