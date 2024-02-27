<template>
    <teleport to="body">
        <div class="modal">
            <slot name="title" />
            {{ props.subtitle }}
            <slot />
            <button>Hide modal</button>
        </div>
    </teleport> 
</template>
<script setup>
import { useSlots } from 'vue'

const slots = useSlots()

console.log(slots.title())

const props = defineProps({
    subtitle: {
        type: String,
        default: 'No props'
    }
})

console.log(props.subtitle)

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