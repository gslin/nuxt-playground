<script setup>
const apiUrl = 'https://devdb.gslin.com/db';
const list = ref([]);
const form = reactive({});

async function refresh() {
  const res = await fetch(apiUrl);
  const j = await res.json();
  list.value = j.data;
}
refresh();

async function create() {
  await fetch(apiUrl, {
    body: JSON.stringify({
      fullname: form.fullname,
      username: form.username,
    }),
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  refresh();
}

async function del(id) {
  await fetch(apiUrl + '/' + id, {
    cache: 'no-cache',
    method: 'DELETE',
  });
  refresh();
}
</script>

<template>
<h3>CRUD</h3>
<hr/>
<h4>Data</h4>
<table class="border">
  <thead>
    <th>ID</th>
    <th>Username</th>
    <th>Fullname</th>
    <th>Actions</th>
  </thead>
  <tbody>
    <tr v-for="item in list">
      <td>{{ item.id }}</td>
      <td>{{ item.username }}</td>
      <td>{{ item.fullname }}</td>
      <td><button @click="del(item.id);">Delete</button></td>
    </tr>
  </tbody>
</table>

<h4>Create</h4>
<form @submit.prevent="create();">
  <input placeholder="Username" type="username" v-model="form.username" />
  <input placeholder="Full name" type="fullname" v-model="form.fullname" />
  <input type="submit"/>
</form>
</template>
