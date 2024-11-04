<template>
<v-card
    class="mx-auto"
    prepend-icon="mdi-account"
    width="400"
>
    <template v-slot:title>
        <span class="font-weight-black">Login</span>
    </template>

    <v-form fast-fail @submit.prevent="onSubmit">
    <v-card-text class="bg-surface-light pt-4">
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
    </v-card-text>
    <v-card-actions>
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-card-actions>
    </v-form>
</v-card>

</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore';

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

function onSubmit(){
    const auth = useAuthStore()
    auth.login(userId.value,passwd.value)
}
</script>

<style scoped>
</style>