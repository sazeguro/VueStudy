<template>
    <v-row>
        <v-col cols="12" md="6" >
            <v-card variant="outlined" elevation="6" title="Multi Bar">
                <v-card-text>
                    <MultiBar :chart-data="chartData" />
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6" >
            <v-card variant="outlined" elevation="6" title="Stacked Bar">
                <v-card-text>
                    <StackBar :chart-data="chartData" />
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6" >
            <v-card variant="outlined" elevation="6" title="Bar - Line">
                <v-card-text>
                    <BarLine/>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12" md="6" >
            <v-card variant="outlined" elevation="6" title="Horizontal Stacked Bar">
                <v-card-text>
                    <HorizontalStackBar/>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    
</template>

<script setup>
import { ref } from 'vue'
import MultiBar from '@/components/multi/MultiBar.vue';
import StackBar from '@/components/multi/StackBar.vue';
import BarLine from '@/components/multi/BarLine.vue';
import HorizontalStackBar from '@/components/multi/HorizontalStackBar.vue';


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
            backgroundColor: 'green',
            borderColor: 'blue',
            data: data.map(row => row.count)
        },
        { 
            label: 'Data Two',
            backgroundColor: 'purple',
            borderColor: 'red',
            data: data.map(row => row.age)
        }
    ]
})

</script>

<style lang="css" scoped>
</style>
