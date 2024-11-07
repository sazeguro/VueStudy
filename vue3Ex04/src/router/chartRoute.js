import MainLayout from '@/views/layouts/MainLayout.vue'
import SingleChart from '@/views/charts/SingleChart.vue'
import MultiChart from '@/views/charts/MultiChart.vue'
import ZoomChart from '@/views/charts/ZoomChart.vue'

export default {
	path: '/chart',
	component: MainLayout,
	children: [
		{ path: 'single', component: SingleChart },
		{ path: 'multi', component: MultiChart },
		{ path: 'zoom', component: ZoomChart },
	],
}
