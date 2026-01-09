<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-2xl font-semibold">Users</h2>

    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Failed to load users</p>

    <table
      v-else
      class="w-100% bg-gray-100 rounded-lg border-collapse overflow-hidden"
    >
      <thead>
        <tr class="bg-slate-800 text-white">
          <th
            class="px-3 py-4 font-semibold border-b border-gray-200 text-left"
          >
            Name
          </th>

          <th
            class="px-3 py-4 font-semibold border-b border-gray-200 text-left"
          >
            Role
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="p-3 border-b border-gray-200 text-left">
            <NuxtLink
              :to="`/users/${user.id}`"
              class="text-cyan-600 font-medium hover:text-sky-400 underline underline-offset-2"
            >
              {{ user.name }}
            </NuxtLink>
          </td>

          <td class="p-3 border-b border-gray-200 text-left">
            {{ user.role }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
const { users, pending, error } = useUsers();
</script>

<style scoped></style>
