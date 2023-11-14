<script setup>
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();
let data = {};

const res = await fetch('https://nekos.best/api/v2/neko');
if (res.status === 200) {
  data = (await res.json())['results'][0];
}
</script>

<template>
<h3>cat</h3>
<hr/>
<p>Current count: {{ counter.count }}.</p>
<hr/>
<dd>
<dl>artist_name + artist_href</dl>
<dt><a :href="data.artist_href">{{ data.artist_name }}</a></dt>
</dd>
</template>
