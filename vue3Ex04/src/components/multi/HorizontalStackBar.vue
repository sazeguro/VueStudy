<template>
    <Bar
      :options="hstackbarOptions"
      :data="hstackbarData"
    />
</template>

<script setup>

import { ref } from 'vue'
import { Bar } from 'vue-chartjs'

import { Chart, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables,ChartDataLabels)

// const data = [
//     { year: 2010, count: 10, age: 11 },
//     { year: 2011, count: 20, age: 15 },
//     { year: 2012, count: 15, age: 17 },
//     { year: 2013, count: 25, age: 12 },
//     { year: 2014, count: 22, age: 9 },
//     { year: 2015, count: 30, age: 20 },
//     { year: 2016, count: 28, age: 21 },
//   ];

const hstackbarData = ref({
    labels: [222],
    datasets: [ 
        { 
            label: 'One',
            backgroundColor: 'green',
            data: [1100]
        },
        { 
            label: 'Two',
            backgroundColor: 'purple',
            data: [3200]
        },
        { 
            label: 'Three',
            backgroundColor: 'blue',
            data: [2200]
        },
        { 
            label: 'Four',
            backgroundColor: 'pink',
            data: [2800]
        }
    ]
})

const hstackbarOptions = ref({
    indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            barThickness: 50,
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                x: {
                    stacked: true,
                    display: true,
                },
                y: {
                    stacked: true,
                    display: false,

                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                datalabels: { // datalables 플러그인 세팅
                    align: "center",
                    anchor: 'center',
                    color: "white",
                    formatter: function (value, context) {
                        return context.dataset.label;
                    },
                },
            },
})

</script>

<style lang="css" scoped>
</style>
