<template>
    <v-row>
        <v-col cols="12" md="12" >
            <v-card variant="outlined" elevation="6" title="Line and Zoom with json File">
                <v-card-text>
                    <ZoomLine/>
                </v-card-text>
            </v-card>
        </v-col>

    </v-row>
    
</template>

<script setup>
import ZoomLine from '@/components/ZoomLine.vue';
</script>

<style lang="css" scoped>
</style>
