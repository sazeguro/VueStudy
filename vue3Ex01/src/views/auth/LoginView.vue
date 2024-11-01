<template>

<v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent>
        <v-text-field
            v-model="userId"
            :rules="userIdRules"
            label="User ID"
        ></v-text-field>

        <v-text-field
            v-model="passwd"
            :rules="passwdRules"
            type="password"
            label="Password"
        ></v-text-field>

        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
</v-sheet>

</template>

<script setup>
import { ref } from 'vue'

const userId = ref('')
const userIdRules = ref([
    value => {
        if (value?.length >= 3) return true
        return 'User ID must be at least 3 characters.'
    },
])
const passwd = ref('')
const passwdRules = ref([
    value => {
        if (/[^0-9]/.test(value)) return true
        return 'Password can not contain digits.'
    },
])
</script>

<style scoped>
</style>