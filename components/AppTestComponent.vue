<script setup>
defineProps(['post'])
</script>

<template>
  <div>
    <p>id is {{ post.id }} and title is {{ post.title }}.</p>
  </div>
</template>
