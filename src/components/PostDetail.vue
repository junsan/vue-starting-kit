<template>
    Post Id is {{ $route.params.id }}
    <br><br>
    <button @click="showId">Show ID</button>
    <br><br>
    <button @click="back">back</button>
    <br><br>
    <button @click="first">First Post</button>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const showId = () => {
    alert(`The is id ${ route.params.id }.`)
}

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