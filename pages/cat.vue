<script setup>
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
const data = reactive({});

const res = await useFetch('https://nekos.best/api/v2/neko', {server: false});
watch(res.status, () => {
  if (res.status.value === 'success') {
    const r = res.data.value.results[0];
    data.artist_href = r.artist_href;
    data.artist_name = r.artist_name;
    data.source_url = r.source_url;
    data.url = r.url;
  }
}, {immediate: true});
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
