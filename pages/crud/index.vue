<script setup>
const apiUrl = 'https://devdb.gslin.com/db'
const list = ref([])
const form = reactive({})

let deleteModalId = null
const isDeleteOpen = ref(false)

async function refresh() {
  const res = await useFetch(apiUrl)
  list.value = res.data.value.data
}
refresh()

async function create() {
  await $fetch(apiUrl, {
    body: JSON.stringify({
      fullname: form.fullname,
      username: form.username,
    }),
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
  refresh()
}

async function del(id) {
  await $fetch(apiUrl + '/' + id, {
    cache: 'no-cache',
    method: 'DELETE',
  })
  refresh()
}

function enableDeleteModal(id) {
  deleteModalId = id
  isDeleteOpen.value = true
}
</script>

<template>
  <div>
    <h3>CRUD</h3>
    <hr>
    <h4>Data</h4>
    <table class="border">
      <thead>
        <th>ID</th>
        <th>Username</th>
        <th>Fullname</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr
          v-for="item in list"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.fullname }}</td>
          <td>
            <button @click="enableDeleteModal(item.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <UModal v-model="isDeleteOpen">
      <form @submit.prevent="del(deleteModalId); refresh(); isDeleteOpen = false">
        <div class="flex justify-between m-5">
          <button
            class="bg-grey outline p-2 rounded"
            @click.prevent="isDeleteOpen = false"
          >
            Cancel
          </button>
          <input
            class="bg-green outline p-2 rounded"
            name="submit"
            type="submit"
            value="Confirm"
          >
        </div>
      </form>
    </UModal>

    <h4>Create</h4>
    <form @submit.prevent="create()">
      <input
        v-model="form.username"
        placeholder="Username"
        type="username"
      >
      <input
        v-model="form.fullname"
        placeholder="Full name"
        type="fullname"
      >
      <input type="submit">
    </form>
  </div>
</template>
