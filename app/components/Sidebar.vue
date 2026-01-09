<template>
  <aside class="w-[16vw] bg-blue-600 text-white flex flex-col gap-4 p-8 px-4">
    <h2 class="text-2xl mb-4 font-medium text-center">Nuxt Dashboard</h2>

    <NuxtLink
      v-for="link in sidelinks"
      :key="link.id"
      :to="link.link"
      class="hover:bg-sky-400 p-2 rounded hover:indent-2 hover:[transition:all_0.3s_ease] [transition:all_0.3s_ease]"
      active-class="bg-cyan-500 hover:indent-0! hover:bg-cyan-500!"
    >
      {{ link.label }}
    </NuxtLink>
  </aside>
</template>

<script setup lang="ts">
import { SIDEBAR_DATA as sidelinks } from "~/utils/constants";
</script>
