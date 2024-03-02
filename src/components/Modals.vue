<template>
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <br><br>
    Show Dark Modal: 
    <input type="checkbox" v-model="showModalDark" />
    <component :is="showModalDark ? ModalDark : Modal" v-model="modelV" @hideModal="showModal = false" subtitle="This is a subtitle" v-if="showModal">
        <template #title><h4>This is a modal</h4></template>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem tempore, deleniti ullam neque, minima ad unde corrupti quas minus animi aspernatur? Minus laboriosam aliquam odit? Quos ea voluptate eveniet.</p>
    </component>
</template>
<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'
import ModalDark from './ModalDark.vue';

const showModal = ref(false)
const modelV = ref(true)
const showModalDark = ref(false)

</script>

