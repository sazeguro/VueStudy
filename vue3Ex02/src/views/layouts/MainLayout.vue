<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useDisplay } from 'vuetify'

const drawer = ref(false)
const { mobile, mdAndUp } = useDisplay()

// console.log(mobile)
</script>

<template>

    <v-layout>
        <v-app-bar color="primary"  prominent >
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Vue Study</v-toolbar-title>

            <v-spacer></v-spacer>
            <template v-if="mdAndUp">
                <v-btn icon="mdi-magnify" variant="text"></v-btn>
                <v-btn icon="mdi-filter" variant="text"></v-btn>
            </template>
            <v-btn icon="mdi-dots-vertical" variant="text" to="/auth"></v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" :location="mobile ? 'bottom' : undefined" temporary>
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-script-outline" title="Scrolled Table" to="/" ></v-list-item>
                <v-list-item prepend-icon="mdi-account-multiple" title="Second" to="/second" ></v-list-item>
                <v-list-item prepend-icon="mdi-star" title="Test" value="starred"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main style="height: 500px;">
            <RouterView />
        </v-main>
    </v-layout>

</template>

<style scoped>

</style>