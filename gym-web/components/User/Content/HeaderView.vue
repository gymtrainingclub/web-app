<template>
	<div class="container mt-custom mb-5">
		<div class="row g-0">
			<div class="col-lg-5">
				<h2 class="font-weight-bold">Sekarang Olahraga Di GYM Gapake Mahal</h2>
				<h3 class="text-secondary mt-3">
					Mulai Dari <span class="text-warning"> Rp 249.000</span>
				</h3>
				<p class="text-secondary font-custom mt-3 mb-5">
					Dapatkan akses tak terbatas ke seluruh premium GYM dengan Capstone GYM
					dan kelas gratis setiap harinya
				</p>
				<button class="btn btn-custom rounded-pill pr-5 pl-5 mb-5">
					Mulai Membership Anda
				</button>
			</div>
			<div class="col-lg-7 d-flex justify-content-center mb-5">
				<img src="@/assets/img/Header.png" class="rounded img-fluid" />
			</div>
		</div>
		<div class="mt-5">
			<h4>Temukan aktifitas paling tepat untuk menjadi lebih sehat</h4>
			<div class="row g-0 mt-4">
				<div class="col-lg-4 mb-3">
					<img src="@/assets/img/H1.png" class="card-img" />
					<h4 class="card-img-overlay text-white ml-3 d-flex align-items-end">
						Jadwal
					</h4>
				</div>
				<div class="col-lg-4 mb-3">
					<img src="@/assets/img/H2.png" class="card-img" />
					<h4 class="card-img-overlay text-white ml-3 d-flex align-items-end">
						Lokasi
					</h4>
				</div>
				<div class="col-lg-4 mb-3">
					<img src="@/assets/img/H3.png" class="card-img" />
					<h4 class="card-img-overlay text-white ml-3 d-flex align-items-end">
						Kelas
					</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderView',
}
</script>

<style scoped>
.btn-custom {
	background: #006784;
	color: white;
}
.font-custom {
	font-size: 17px;
}
.mt-custom {
	margin-top: 75px;
}
</style>
