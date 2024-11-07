<template>
  <Line :options="chartOptions" :data="chartData"/>
</template>

<script setup>

import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables,ChartDataLabels)

const data = [
  { year: 2010, count: 10, age: 11 },
  { year: 2011, count: 20, age: 15 },
  { year: 2012, count: 15, age: 17 },
  { year: 2013, count: 25, age: 12 },
  { year: 2014, count: 22, age: 9 },
  { year: 2015, count: 30, age: 20 },
  { year: 2016, count: 28, age: 21 },
];

const chartData = ref({
  labels: data.map(row => row.year),
  datasets: [ 
    { 
      label: 'Data One',
      type: 'bar',
      backgroundColor: '#f87979',
      data: data.map(row => row.age)
    },
    { 
      label: 'Data Two',
      type: 'line',
      backgroundColor: 'blue',
      borderColor: 'green',
      data: data.map(row => row.count)
    } 
  ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    },
    datalabels: { // datalables 플러그인 세팅
      align: "center",
      anchor: 'center',
      //offset: 5,
      color: "white",
      formatter: () => "",
    },
  },
})

</script>

<style lang="css" scoped>
</style>
