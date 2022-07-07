<template>
	<div class="box-center">
		<div class="card p-5">
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
}
</script>

<style scoped>
.box-center {
	width: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.text-none:hover {
	text-decoration: none;
	color: black;
}
</style>
