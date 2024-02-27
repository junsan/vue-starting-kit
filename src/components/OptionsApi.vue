<template>
    <h1>Options Api</h1>
    <button @click="add">+</button>
    <span>{{ counter }}</span>
    <button @click="minus">-</button>
    <br><br>
    <input type="text" />
    <br><br>
    The count is {{ oddOrEven }}
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
    },
    computed: {
        oddOrEven() {
            if(this.counter%2 ===0) return 'even'
            return 'odd'
        }
    },
    watch: {
        counter(newValue, oldValue) {
            if (newValue === 10) alert('Hi')
        }
    },
    directives: {
        autofocus: {
            mounted: (el) => {
                el.focus()
            }
        }
    }
}
</script>