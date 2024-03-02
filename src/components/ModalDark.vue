<template>
    <teleport to="body">
        <div class="modal">
            <slot name="title" />
            {{ props.subtitle }}
            <slot />
            <button @click="$emit('hideModal')">Hide modal</button>
            <button @click="changeVmodel">Change v-model</button>
        </div>
    </teleport> 
</template>
<script setup>
import { useSlots } from 'vue'

const slots = useSlots()

console.log(slots.title())

const props = defineProps({
    modelValue: {
        type: Boolean
    },
    subtitle: {
        type: String,
        default: 'No props'
    }
})

const emit = defineEmits(['update:modelValue', 'hideModal'])

// console.log(props.subtitle)

console.log(props.modelValue);

const changeVmodel = () => {
    emit('update:modelValue', false)
    console.log(props.modelValue);
}

</script>

<style scoped>
    .modal {
        background-color: #333;
        color: white;
        padding: 10px;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
    }
</style>