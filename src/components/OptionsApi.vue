<template>
    <h1>Options Api</h1>
    <button @click="add">+</button>
    <span>{{ counter }}</span>
    <button @click="minus">-</button>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        add() {
            this.counter++
        },
        minus() {
            this.counter--
        }
    }
}
</script>