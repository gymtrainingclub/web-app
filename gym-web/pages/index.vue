<template>
	<div>
		<NavbarView />
		<h1>Content</h1>
		<FooterView />
	</div>
</template>

<script>
import NavbarView from '@/components/User/Content/NavbarView.vue'
import FooterView from '@/components/User/Content/FooterView.vue'

export default {
	name: 'LandingPage',
	components: { NavbarView, FooterView },
}
</script>
