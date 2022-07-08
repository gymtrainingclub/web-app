<template>
	<nav class="navbar navbar-expand-lg bg-custom">
		<NuxtLink class="navbar-brand" to="/">
			<img src="@/assets/img/logo.png" width="65" />
		</NuxtLink>
		<button
			class="navbar-toggler shadow-sm"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			@click.stop="toggleNavbar()"
		>
			<b-icon icon="chevron-bar-down" class="text-white h3"></b-icon>
		</button>
		<div
			class="collapse navbar-collapse justify-content-end"
			id="navbarSupportedContent"
			v-bind:class="{ show: show }"
		>
			<ul class="navbar-nav mr-5">
				<li class="nav-item mr-5 mb-2">
					<NuxtLink to="/auth/user/register" class="btn btn-white text-white">
						Sign Up
					</NuxtLink>
				</li>
				<li class="nav-item mb-2">
					<NuxtLink
						to="/auth/user/login"
						class="btn btn-custom rounded-pill px-5"
					>
						Login
					</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavbarView',
	data() {
		return {
			show: false,
		}
	},
	methods: {
		toggleNavbar() {
			this.show = !this.show
		},
	},
}
</script>

<style scoped>
.btn-custom {
	background: #006784;
	color: white;
}
.bg-custom {
	background: #0c303d;
}
</style>
