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
            <v-list density="compact" :opened="open" nav>
                <v-list-group v-for="item in menuItems"
                :key="item.title"
                :value="item">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            :key="item.title"
                            v-bind="props"
                            :title="item.title"
                            :prepend-icon="item.icon"
                            base-color="blue"
                            color="orange"
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
const open = ref([])
const menuItems = ref([
    {
        title: "Fetch Data",
        active: false,
        icon: "mdi-hand-coin",
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
        icon: "mdi-application-array",
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
        title: "Chart View",
        active: false,
        icon: "mdi-chart-bar",
        subMenuItems: [
            {
                title: "Single Chart",
                to: "/chart/single",
            },
            {
                title: "Multi Chart",
                to: "/chart/multi",
            },
            {
                title: "Zoom Chart",
                to: "/chart/zoom",
            },
        ]
    }
])

</script>

<style scoped>

</style>