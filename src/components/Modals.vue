<template>
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <br><br>
    <Modal subtitle="This is a subtitle" v-if="showModal">
        <template #title><h4>This is a modal</h4></template>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem tempore, deleniti ullam neque, minima ad unde corrupti quas minus animi aspernatur? Minus laboriosam aliquam odit? Quos ea voluptate eveniet.</p>
    </Modal>
</template>
<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'

const showModal = ref(false)

</script>

