<template>
	<section>
		<div class="container mb-5">
			<div class="card mx-auto" style="width: 95%">
				<div class="card-header" style="background: #0c303d">
					<h4 class="text-white">Booking Class Statistic</h4>
				</div>
				<BarComponent
					:data="barChartData"
					:options="barChartOptions"
					class="col-lg-8 mx-auto"
				/>
			</div>
		</div>
		<div class="container mb-5 mt-3">
			<div class="card mx-auto" style="width: 95%">
				<div class="card-header" style="background: #0c303d">
					<h4 class="text-white">Membership Statistic</h4>
				</div>
				<PieComponent
					:data="pieChartData"
					:options="pieChartOptions"
					class="col-lg-8 mx-auto"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import BarComponent from '~/components/Dashboard/Chart/BarComponent.vue'
import PieComponent from '~/components/Dashboard/Chart/PieComponent.vue'
export default {
	components: { BarComponent, PieComponent },
	data() {
		return {
			barChartData: {
				labels: [
					'Sunday',
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday',
				],
				datasets: [
					{
						label: 'Jumlah Online',
						data: [30, 40, 50, 20, 10, 11, 19],
						backgroundColor: '#0C303D',
						borderWidth: 2,
					},
					{
						label: 'Jumlah Offline',
						data: [35, 50, 60, 70, 30, 21, 39],
						backgroundColor: '#F15A24',
						borderWidth: 2,
					},
				],
			},
			barChartOptions: {
				responsive: true,
				legend: {
					display: false,
				},
				title: {
					display: true,
					text: 'GYM Capstone analytics data',
					fontSize: 24,
					fontColor: '#6b7280',
				},
				tooltips: {
					backgroundColor: '#17BF62',
				},
				scales: {
					xAxes: [
						{
							gridLines: {
								display: true,
							},
						},
					],
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
								max: 100,
								min: 0,
								stepSize: 20,
							},
							gridLines: {
								display: true,
							},
						},
					],
				},
			},
			// pie chart
			pieChartData: {
				hoverBackgroundColor: 'red',
				hoverBorderWidth: 10,
				labels: [
					'Gold Membership',
					'Silver Membership',
					'Bronze Membership',
					'Unactive-Member',
				],
				datasets: [
					{
						label: 'Data One',
						backgroundColor: ['#E7B710', '#8B8B8B', '#CD7F32', '#BCBCBC'],
						data: [10, 15, 20, 25],
					},
				],
			},
			pieChartOptions: {
				hoverBorderWidth: 20,
			},
		}
	},
}
</script>
