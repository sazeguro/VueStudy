<template>
    <v-infinite-scroll :height="600"  @load="load" :mode="props.scrollMode">
        <v-data-iterator
            :items="userlist"
            item-value="name"
            items-per-page="-1" 
        >
        <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
            <h1 class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center">
                <div class="text-truncate">
                mode : intersect(default), manual

                </div>
            </h1>
        </template>
        <template v-slot:default="{ items, isExpanded, toggleExpand }">
            <v-row>
                <v-col
                    v-for="item in items"
                    :key="item.raw.name"
                    cols="12"
                    md="4"
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

                <!-- <div>
                    <v-chip @click="dataload" append-icon="mdi-eye-plus-outline" :disabled="fetchMore?false:true" >more</v-chip>
                </div> -->
            </v-footer>
        </template>
        </v-data-iterator>
    </v-infinite-scroll>
</template>

<script setup>
import { ref } from 'vue'
import { axiosApi } from '@/apis'

const props = defineProps({
    scrollMode:{
        type: String,
        default: 'intersect', // manual or intersect
    },
})

const userlist = ref([])
// eslint-disable-next-line no-unused-vars
let loadstatus = null

async function load ({ done }) {
    loadstatus = done;
    
    await axiosApi.getUsers()
    .then(res => {
        console.log(res)
        if(res.data.length > 0){
            userlist.value.push(...res.data)
            done('ok')
        }
        else{
            done('empty')
        }
    })
    .catch((err) => {
        console.log(err)
        done('error')
    })
}
</script>

<style scoped>

</style>