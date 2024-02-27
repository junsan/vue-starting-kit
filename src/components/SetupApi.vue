<template>
    <h1>{{ title }}</h1>
    <button @click="add">+</button>
    <span>{{ counter }}</span>
    <button @click="minus">-</button>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const counter = ref(0)
        const title = 'Setup Api'

        function add() {
            counter.value++
        } 

        function minus() {
            counter.value--
        }

        return {
            counter,
            title,
            add,
            minus
        }
    }    
}
</script>