<script setup>
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();
counter.count++;
</script>

<template>
<h2>about</h2>
<hr/>
<p>Current count: {{ counter.count }}</p>
</template>
