<template>
    <h4 ref="titleRef">Post Id is {{ $route.params.id }}</h4>
    <br><br>
    <button @click="showId">Show ID</button>
    <br><br>
    <button @click="back">back</button>
    <br><br>
    <button @click="first">First Post</button>
</template>
<script setup>
import { onMounted, ref, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const titleRef = ref(null)

const showId = async () => {
    alert(`The is id ${ route.params.id }.`)
    await nextTick()
    console.log('nextTick')
}

onMounted(() => {
    console.log(titleRef.value)
    console.log(`The width is ${titleRef.value.offsetWidth}`)
})

const back = () => {
    router.push({ name: 'posts' })
}

const first = () => {
    router.push({
        name: 'post-detail',
        params: {
            id: 1
        }
    })
}
</script>