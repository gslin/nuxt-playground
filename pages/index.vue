<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<template>
  <div>
    <h3>index</h3>
    <hr>
    <p>This is <code>index.vue</code>.</p>
    <p>Current count: {{ counter.count }}</p>
  </div>
</template>
