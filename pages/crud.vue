<script setup>
import { ref } from 'vue';

const username = ref();
</script>

<template>
<h3>CRUD</h3>
<hr/>
<form>
  <input class="border" name="username" placeholder="username" type="text" v-model="username" />
  <input class="border" name="password" placeholder="password" type="password" v-model="password" />
  <input class="border" name="submit" type="submit"/>
</form>
<p>Username: {{ username }}</p>
</template>
