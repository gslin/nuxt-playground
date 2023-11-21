<script setup>
useHead({
  title: "Gea-Suan Lin's testing site",
});
</script>

<template>
<div class="container mx-auto m-4">
<AppHeader/>
<div class="flex flex-row my-4">
  <div class="shrink mr-4">
    <AppPages/>
  </div>
  <div class="ml-4">
    <NuxtPage/>
  </div>
</div>
<AppFooter/>
</div>
</template>
