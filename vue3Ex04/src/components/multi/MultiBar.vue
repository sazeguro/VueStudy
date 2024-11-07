<template>
    <Bar
      :options="chartOptions"
      :data="chartData"
    />
</template>

<script setup>

import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

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
        })

</script>

<style lang="css" scoped>
</style>
