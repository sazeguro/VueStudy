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
            <v-card variant="outlined" elevation="6" title="Single Pie with Local Data">
                <v-card-text>
                    <SinglePie/>
                </v-card-text>
            </v-card>
        </v-col>

        <v-col cols="12" md="12" >
            <v-card variant="outlined" elevation="6" title="Single Line and Zoom with json File">
                <v-card-text>
                    <SingleLine/>
                </v-card-text>
            </v-card>
        </v-col>

        
    </v-row>
    
</template>

<script setup>
import SingleBar from '@/components/SingleBar.vue';
import SingleLine from '@/components/SingleLine.vue';
import SinglePie from '@/components/SinglePie.vue';

</script>

<style lang="css" scoped>
</style>
