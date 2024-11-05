<template>

    <v-data-table 
        :items="items"
        items-per-page="-1" 
        height="500"
        :loading="loading"
        fixed-header
        disable-pagination
        @click:row="rowClick" 
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
import { axiosApi } from '@/apis'

const items = ref([])
const loading = ref(false)
const fetchMore = ref(true)

onMounted(() => {
    dataload()
})

async function dataload(){
    loading.value = true

    // fetchApi.fetchGet('posts')
    // .then(json => {
    //     if(json.length==0)fetchMore.value = false
    //     items.value.push(...json)
    //     loading.value = false;
    //     console.log(json)
    // } )
    axiosApi.getPosts()
    .then(res => {
        console.log(res)
        if(res.data.length==0) fetchMore.value = false
        items.value.push(...res.data)
        loading.value = false;
    })
}

var prevSelectedRow=null
// eslint-disable-next-line no-unused-vars
function rowClick(event,row){
    
    console.log(row.items)

    if(prevSelectedRow != null)
        prevSelectedRow.bgColor = ''
    prevSelectedRow = event.target.parentNode
    event.target.parentNode.bgColor='blue'
}
</script>