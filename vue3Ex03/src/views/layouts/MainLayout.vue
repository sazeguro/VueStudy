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
            <v-list density="compact" nav
            :opened="opened"
            @update:opened="newOpened => opened = newOpened.slice(-1)">
                <v-list-group v-for="item in menuItems"
                :key="item.title"
                :value="item">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            :key="item.title"
                            v-bind="props"
                            :title="item.title"
                        ></v-list-item>
                    </template>

                    <v-list-item
                        v-for="subMenu in item.subMenuItems"
                        :key="subMenu"
                        :title="subMenu.title"
                        :to="subMenu.to"
                    ></v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>

        <v-main style="height: 500px;">
            <RouterView />
        </v-main>
    </v-layout>

</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useDisplay } from 'vuetify'

const drawer = ref(false)
const { mobile, mdAndUp } = useDisplay()

// console.log(mobile)
const opened = ref([])
const menuItems = ref([
    {
        title: "Fetch Data",
        active: false,
        subMenuItems: [
            {
                title: "Data table",
                to:"/fetchdt"
            },
            {
                title: "Data iterator",
                to:"/fetchdi"
            },
        ]
    },
    {
        title: "Axios Data",
        active: false,
        subMenuItems: [
            {
                title: "Data table",
                to: "/axiosdt",
            },
            {
                title: "Infinite Scroller",
                to: "/axiosis",
            },
        ]
    },
    {
        title: "Test menus",
        active: false,
        subMenuItems: [
            {
                title: "Data table",
                to: "",
            },
            {
                title: "Data iterator",
                to: "",
            },
        ]
    }
])

</script>

<style scoped>

</style>