<template>
  <section
    class="p-4 rounded-lg shadow-sm shadow-gray-400 bg-linear-to-br from-blue-200 to-white"
  >
    <h3 class="text-xl font-medium">{{ heading }}</h3>

    <p class="text-3xl font-medium mt-2 text-blue-500">{{ number }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  heading: string;
  number: string;
}>();
</script>
