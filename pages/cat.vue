<script setup>
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
let data = {};

const res = await useFetch('https://nekos.best/api/v2/neko');
if (res.status.value === 'success') {
  data = res.data.value.results[0];
}
</script>

<template>
<h3>cat</h3>
<hr/>
<p>Current count: {{ counter.count }}.</p>
<hr/>
<dd>
  <dl>Artist (artist_name + artist_href)</dl>
  <dt><a :href="data.artist_href">{{ data.artist_name }}</a></dt>
  <dl>Source (source_url)</dl>
  <dt><a :href="data.source_url">{{ data.source_url }}</a></dt>
  <dl>Image (url)</dl>
  <dt><img :src="data.url"/></dt>
</dd>
</template>
