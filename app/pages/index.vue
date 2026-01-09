<template>
  <section class="grid grid-cols-3 gap-4">
    <Card
      v-for="d in data"
      :key="d.id"
      :heading="d.heading"
      :number="d.number.toString()"
    />
  </section>
</template>

<script setup lang="ts">
import Card from "~/components/Card.vue";
import { CARD_DATA as data } from "~/utils/constants";
</script>

<style scoped></style>
