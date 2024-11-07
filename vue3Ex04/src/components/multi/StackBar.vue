<template>
    <Bar
      :options="chartOptions"
      :data="chartData"
    />
</template>

<script setup>

import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    chartData: {
        type: Object,
        required: true
      },
})

const chartOptions = ref({
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        align: 'end'
                    }
                }
            },
        })

</script>

<style lang="css" scoped>
</style>
