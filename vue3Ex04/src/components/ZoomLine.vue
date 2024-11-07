<template>
    <div style="height: 400px;">
        <Line :data="chartData" :options="chartOptions" ref="myZoomLine" />
    </div>
    <v-chip @click="resetZoomBtn()">reset</v-chip>
</template>

<script setup>
import { ref } from 'vue'
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
import zoomPlugin from 'chartjs-plugin-zoom';

import json from '@/assets/sample_data.json'
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
)
// ChartJS.defaults.backgroundColor = 'red';
// ChartJS.defaults.borderColor = 'gray';
// ChartJS.defaults.color = 'white';

const myZoomLine = ref(null)

const chartData = ref({
            labels: json.data.map(row => row.MeasureTime.split("T")[1].slice(0,8)),
            datasets: [
                { 
                    label: 'Capacity',
                    backgroundColor: 'red',
                    borderColor: 'blue',
                    data: json.data.map(row => row.Capacity)
                },
                { 
                    label: 'Voltage',
                    backgroundColor: 'yellow',
                    borderColor: 'cyan',
                    data: json.data.map(row => row.Voltage)
                },
                { 
                    label: 'Current',
                    backgroundColor: 'white',
                    borderColor: 'ivory',
                    data: json.data.map(row => row.Current)
                },
                { 
                    label: 'Power',
                    backgroundColor: 'purple',
                    borderColor: 'red',
                    data: json.data.map(row => row.Power)
                },
            ]
        })

const zoomOptions = {
        pan: {
        // pan options and/or events
            enabled: true,
            mode: 'xy',
            modifierKey: 'ctrl',
        },
        limits: {
        // axis limits
            // x: {min: -200, max: 200, minRange: 50},
            // y: {min: -200, max: 200, minRange: 50}
        },
        zoom: {
        // zoom options and/or events
            wheel: {
                enabled: true,
            },
            drag: {
                enabled: false,
            },
            pinch: {
                enabled: true
            },
            mode: 'xy',
            onZoomComplete({chart}) {
                // This update is needed to display up to date zoom level in the title.
                // Without this, previous zoom level is displayed.
                // The reason is: title uses the same beforeUpdate hook, and is evaluated before zoom.
                chart.update('none');
            }
        }
    }   
const chartOptions = ref({
            responsive: true,
            maintainAspectRatio: false,
            animation: true,
            showLine: false,
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                zoom: zoomOptions,
                title: {
                    display: true,
                    position: 'bottom',
                    text: 'Zoom : wheel scroll, Pan : ctrl + drag'
                }
            },
        })

const resetZoomBtn = () => {
  
    myZoomLine.value.chart.resetZoom()
  
};

</script>

<style scoped>

</style>