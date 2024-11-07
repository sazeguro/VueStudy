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

const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

const chartData = ref({
    labels: data.map(row => row.year),
    datasets: [ 
    { 
        label: 'Data One',
        backgroundColor: '#f87979',
        data: data.map(row => row.count)
    } 
    ]
})
const chartOptions = ref({
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: true,
})

</script>

<style lang="css" scoped>
</style>
