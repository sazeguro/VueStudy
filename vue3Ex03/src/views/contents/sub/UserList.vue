<template>
    <v-data-iterator
        :items="userlist"
        item-value="name"
        items-per-page="-1" 
    >
        <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
            <h1 class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center">
                <div class="text-truncate">
                Account list with Fetch
                </div>
            </h1>
        </template>
        <template v-slot:default="{ items, isExpanded, toggleExpand }">
        <v-row>
            <v-col
                v-for="item in items"
                :key="item.raw.name"
                cols="12"
                md="6"
                sm="12"
            >
            <v-card>
                <v-card-title class="d-flex align-center">
                    <v-icon>mdi-account</v-icon>
                    <h4>{{ item.raw.name }}</h4>
                </v-card-title>

                <v-card-text>
                    <v-list :lines="false" density="compact">
                        <v-list-item >email: {{ item.raw.email }}</v-list-item>
                        <v-list-item >address: {{item.raw.address.street}} {{item.raw.address.suite}} {{item.raw.address.city}} {{item.raw.address.zipcode}} ({{item.raw.address.geo.lat}} , {{item.raw.address.geo.lng}})</v-list-item>
                        <v-list-item >phone: {{item.raw.phone}}</v-list-item>
                        <v-list-item >homepage: {{item.raw.website}}</v-list-item>
                    </v-list>
                </v-card-text>

                <div class="px-4">
                <v-switch
                    :label="`${isExpanded(item) ? 'Hide' : 'Show'} company`"
                    :model-value="isExpanded(item)"
                    density="compact"
                    inset
                    @click="() => toggleExpand(item)"
                ></v-switch>
                </div>
                <v-divider></v-divider>
                <v-expand-transition>
                    <div v-if="isExpanded(item)">
                        <v-list :lines="false" density="compact">
                            <v-list-item >company: {{item.raw.company.name}}</v-list-item>
                            <v-list-item >catchPhrase: {{item.raw.company.catchPhrase}}</v-list-item>
                            <v-list-item >bs: {{item.raw.company.bs}}</v-list-item>
                        </v-list>
                    </div>
                </v-expand-transition>
            </v-card>
            </v-col>
        </v-row>
        </template>
        <template v-slot:footer="{ page, pageCount }">
            <v-footer
                class="justify-space-between text-body-2 mt-4"
                color="surface-variant"
            >
                Total user: {{ userlist.length }}

                <div>
                    <v-chip @click="dataload" append-icon="mdi-eye-plus-outline" :disabled="fetchMore?false:true" >more</v-chip>
                </div>
            </v-footer>
        </template>
    </v-data-iterator>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchApi } from '@/apis'

const userlist = ref([])
const loading = ref(false)
const fetchMore = ref(true)

onMounted(() => {
    dataload()
})

async function dataload(){
    loading.value = true
    fetchApi.fetchGet('users')
    .then(json => {
        if(json.length==0)fetchMore.value = false
        userlist.value.push(...json)
        loading.value = false;
        console.log(json)
    } )
}
</script>

<style scoped>

</style>