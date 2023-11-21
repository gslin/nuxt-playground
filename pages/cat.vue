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
<dl>
  <dt>Artist (artist_name + artist_href)</dt>
  <dd><a :href="data.artist_href">{{ data.artist_name }}</a></dd>
  <dt>Source (source_url)</dt>
  <dd><a :href="data.source_url">{{ data.source_url }}</a></dd>
  <dt>Image (url)</dt>
  <dd><img :src="data.url"/></dd>
</dl>
</template>
