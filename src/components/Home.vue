<template>
<OptionsApi />
<br><br>
<SetupApi />
<br><br>
<CompositionApi />
<!-- <KeepAlive>
    <CompositionApi />
</KeepAlive> -->
</template>

<script setup>
import OptionsApi from './OptionsApi.vue'
import CompositionApi from './CompositionApi.vue';
import SetupApi from './SetupApi.vue';
</script>