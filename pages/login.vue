<script setup>
const d = reactive({username: '', password: ''})

const r = ref({})
const c = ref(0)

async function login() {
  const res = await fetch('https://home.gslin.org/tmp/test-login.php', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(d)
  });

  r.value = await res.json()
  c.value = res.status
}
</script>

<template>
  <div>
    <h3>Login</h3>
    <hr>
    <form @submit.prevent="login();">
      <input
        v-model="d.username"
        class="border"
        name="username"
        placeholder="username"
        type="text"
      >
      <input
        v-model="d.password"
        class="border"
        name="password"
        placeholder="password"
        type="password"
      >
      <input
        class="border"
        name="submit"
        type="submit"
      >
    </form>
    <p>Username: <code>{{ d.username }}</code>.</p>
    <p>Code: <code>{{ c }}</code>.</p>
    <p>Response: <code>{{ r }}</code>.</p>
  </div>
</template>
