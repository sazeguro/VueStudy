<template>
    <v-row>
        <v-col cols="12" md="6" v-for="i in [1,2,3,4]" :key="i" >
            <v-card variant="outlined" elevation="6" title="Single Bar">
                <v-card-text>
                    <SingleBar/>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    
</template>

<script setup>
import SingleBar from '@/components/SingleBar.vue';

</script>

<style lang="css" scoped>
</style>
