<script setup>
import AppTestComponent from '~/components/AppTestComponent.vue'

const posts = ref([
  {
    id: 1,
    title: 'test 1'
  },
  {
    id: 2,
    title: 'test 2'
  }
])
</script>

<template>
  <div>
    <h1>Test Components</h1>
    <hr>
    <AppTestComponent
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>
