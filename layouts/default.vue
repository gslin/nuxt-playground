<template>
<div class="container mx-auto m-4">
<AppHeader/>
<div class="flex flex-row my-4">
  <div class="shrink mr-4">
    <h2>Pages</h2>
    <ul>
      <li><NuxtLink to="/">Index</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
    </ul>
  </div>
  <div class="ml-4">
    <NuxtPage/>
  </div>
</div>
<AppFooter/>
</div>
</template>
