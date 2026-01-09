<template>
  <section class="flex min-h-screen">
    <Sidebar />

    <main class="p-4 flex-1 flex flex-col">
      <header
        class="h-14 bg-white border-b border-gray-300 flex items-center px-4"
      >
        <span class="text-3xl font-semibold text-sky-500">Dashboard</span>
      </header>

      <section class="flex-1 p-6 overflow-y-auto">
        <slot />
      </section>
    </main>
  </section>
</template>

<script setup lang="ts">
import Sidebar from "~/components/Sidebar.vue";
</script>

<style scoped></style>
