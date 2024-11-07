<template>
    <v-row>
        <v-col cols="12" md="6" >
            <v-card variant="outlined" elevation="6" title="Single Bar with Local Data">
                <v-card-text>
                    <SingleBar/>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6" >
            <v-card variant="outlined" elevation="6" title="Horizontal Bar with Local Data">
                <v-card-text>
                    <HorizontalBar/>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6" >
            <v-card variant="outlined" elevation="6" title="Single Pie with Local Data">
                <v-card-text>
                    <SinglePie/>
                </v-card-text>
            </v-card>
        </v-col>

        <v-col cols="12" md="6" >
            <v-card variant="outlined" elevation="6" title="Single Line with Props">
                <v-card-text>
                    <SingleLine :chart-data="lineData" :chart-options="lineOptions"/>
                </v-card-text>
            </v-card>
        </v-col>

        <v-col cols="12" md="6" >
            <v-card variant="outlined" elevation="6" title="Single Doughnut with Local Data">
                <v-card-text>
                    <SingleDoughnut/>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6" >
            <v-card variant="outlined" elevation="6" title="Single Scatter with Local Data">
                <v-card-text>
                    <SingleScatter/>
                </v-card-text>
            </v-card>
        </v-col>
        
    </v-row>
    
</template>

<script setup>
import { ref } from 'vue'
import SingleBar from '@/components/single/SingleBar.vue';
import SingleLine from '@/components/single/SingleLine.vue';
import SinglePie from '@/components/single/SinglePie.vue';
import SingleDoughnut from '@/components/single/SingleDoughnut.vue';
import SingleScatter from '@/components/single/SingleScatter.vue';
import HorizontalBar from '@/components/single/HorizontalBar.vue'

const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

const lineData = ref({
          labels: data.map(row => row.year),
          datasets: [ 
            { 
              label: 'Data One',
              backgroundColor: '#f87979',
              borderColor: 'blue',
              tension: 0.3,
              data: data.map(row => row.count)
            } 
          ]
        })
const lineOptions = ref({
            responsive: true,
            maintainAspectRatio: true,
        })


</script>

<style lang="css" scoped>
</style>
