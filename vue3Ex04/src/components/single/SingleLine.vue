<template>
    <Line :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)
// ChartJS.defaults.backgroundColor = 'red';
// ChartJS.defaults.borderColor = 'blue';
// ChartJS.defaults.color = 'white';

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    chartData: {
        type: Object,
        required: true
      },
    chartOptions: {
      type: Object,
      default: () => {}
    }
})

</script>

<style scoped>

</style>