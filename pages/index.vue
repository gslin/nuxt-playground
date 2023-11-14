<script setup>
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();
</script>

<template>
<h2>index</h2>
<hr/>
<p>This is <code>index.vue</code>.</p>
<p>Current count: {{ counter.count }}</p>
</template>
