<template>
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <br><br>
    <teleport to="body">
        <div class="modal" v-if="showModal">
            <h4>This is a modal</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem tempore, deleniti ullam neque, minima ad unde corrupti quas minus animi aspernatur? Minus laboriosam aliquam odit? Quos ea voluptate eveniet.</p>
            <button @click="showModal = false">Hide modal</button>
        </div>
    </teleport> 
</template>
<script setup>
import { ref } from 'vue'

const showModal = ref(false)

</script>

<style scoped>
    .modal {
        background: beige;
        padding: 10px;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
    }
</style>