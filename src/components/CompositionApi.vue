<template>
    <h1>Composition Api</h1>
    <button @click="add">+</button>
    <span>{{ counter }}</span>
    <button @click="minus">-</button>
</template>

<script setup>
    import { ref } from 'vue'

    const counter = ref(0)

    const add = () => {
        counter.value++
    }

    const minus = () => {
        counter.value--
    }

</script>