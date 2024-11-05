<template>
    <user-list></user-list>
</template>

<script setup>
import { ref } from 'vue'
import UserList from './sub/UserList.vue';

const abc = ref()

abc.value = 12 * 33;

</script>

<style scoped>


</style>