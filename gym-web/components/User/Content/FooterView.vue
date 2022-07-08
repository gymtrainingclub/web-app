<template>
	<div class="col-lg-12 bg-custom text-white">
		<div class="row g-0 p-5">
			<div class="col-lg-3 mb-3">
				<h5 class="px-3">Company</h5>
				<ul class="list-unstyled pt-2 px-3">
					<li class="pb-2">About Us</li>
					<li class="pb-2">Blog</li>
					<li class="pb-2">Careers</li>
					<li class="pb-2">Contact Us</li>
				</ul>
			</div>
			<div class="col-lg-3 mb-3">
				<h5 class="px-3">Support</h5>
				<ul class="list-unstyled pt-2 px-3">
					<li class="pb-2">Help Center</li>
					<li class="pb-2">Safety Center</li>
					<li class="pb-2">Community Guidelines</li>
				</ul>
			</div>
			<div class="col-lg-3 mb-3">
				<h5 class="px-3">Legal</h5>
				<ul class="list-unstyled pt-2 px-3">
					<li class="pb-2">Cookies Policy</li>
					<li class="pb-2">Privacy Policy</li>
					<li class="pb-2">Terms of Service</li>
					<li class="pb-2">Low Enforcement</li>
				</ul>
			</div>
			<div class="col-lg-3 mb-3">
				<h5 class="px-3">Install App</h5>
				<ul class="list-unstyled pt-2">
					<li>
						<img src="@/assets/img/installer.jpg" width="150" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FooterView',
}
</script>

<style scoped>
.bg-custom {
	background: #377a8a;
}
</style>
