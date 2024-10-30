<template>
    <div>First View</div>
    {{ abc }}
</template>

<script setup>
import { ref } from 'vue'

const abc = ref()

abc.value = 12 * 33;

</script>

<style scoped>
</style>