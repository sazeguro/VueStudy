<!-- eslint-disable vue/no-unused-vars -->
<template>

        <v-data-table 
            :items="items"
            items-per-page="-1" 
            height="500"
            :loading="loading"
            @click:row="rowClick"
            fixed-header
            disable-pagination 
        >
        <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
            <tr >
                <template v-for="column in columns" :key="column.key">
                    <th>
                        <pre><b>{{ column.title }}</b></pre>
                    </th>
                </template>
            </tr>
        </template>
        <template v-slot:bottom>
            <div style="text-align: center">
                total count : {{ items.length }} 
                <v-chip @click="dataload" append-icon="mdi-eye-plus-outline" :disabled="fetchMore?false:true" >more</v-chip>
            </div>
        </template>

        </v-data-table>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchApi } from '@/apis'

const items = ref([])
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
        items.value.push(...json)
        loading.value = false;
        console.log(json)
    } )
}

function rowClick(event,row){
    alert('rowClicked', row.item);
}
</script>