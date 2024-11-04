<template>
    <div>Second view</div>
    {{ abc }} 
    <v-icon>mdi-sine-wave</v-icon>
</template>

<script setup>
import { ref } from 'vue'

const abc = ref()

abc.value = 12 * 33;

</script>

<style scoped>

</style>