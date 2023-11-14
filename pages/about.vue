<script setup>
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();
counter.count++;
</script>

<template>
<h3>about</h3>
<hr/>
<p>Current count: {{ counter.count }}.</p>
<button @click="counter.count=0;">Reset</button>
</template>
