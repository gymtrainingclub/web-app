<template>
	<div class="container-fluid p-5">
		<h4 class="text-center mb-5">
			Saatnya Sehat dengan seluruh member Capstone GYM di seluruh Indonesia
		</h4>
		<div class="col-lg-12 row">
			<div class="col-lg-3" v-for="item in 4">
				<div class="card rounded mx-auto mb-3 p-3" style="width: 18rem">
					<img
						class="card-img-top"
						src="@/assets/img/Header.png"
						alt="Card image cap"
					/>
					<div class="card-body">
						<h5 class="card-title">James</h5>
						<p class="card-text">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Testimonial View',
}
</script>
