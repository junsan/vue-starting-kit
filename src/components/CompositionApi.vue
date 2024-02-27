<template>
    <h1>{{ data.title }}</h1>
    <button @click="add(5)">+5</button>
    <button @click="add(1)">+</button>
    <span>{{ data.count }}</span>
    <button @click="minus(1)">-</button>
    <button @click="minus(5)">-</button>
    <br><br>
    The count is {{ oddOrEven }}
    <br><br>
    <input v-model="data.title" type="text" v-autofocus />
</template>

<script setup>
    import { ref, reactive, computed, watch, onMounted, onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated } from 'vue'
    import { vAutofocus } from '@/directives/vAutofocus'

    const counter = ref(0)

    const data = reactive({
        count: 0,
        title: 'Composition Api'
    })

    const add = x => {
        data.count+=x
    }

    const minus = x => {
        data.count-=x
    }

    const oddOrEven = computed(() => {
        if (data.count%2 === 0) return 'even'
        return 'odd'
    })

    watch(() => data.count, (newValue, oldValue) => {
        if(newValue === 10) alert('Hi')
    })

    onMounted(() => {
        console.log('onMounted')
    })
    onUnmounted(() => {
        console.log('onUnmounted')
    })
    onActivated(() => {
        console.log('onActivated')
    })
    onDeactivated(() => {
        console.log('onDeactivated')
    })
    onBeforeUpdate(() => {
        console.log('onBeforeUpdate')
    })
    onUpdated(() => {
        console.log('onUpdated')
    })
</script>