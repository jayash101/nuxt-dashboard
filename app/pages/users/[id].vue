<template>
  <h2 class="text-2xl font-semibold mb-4">User Profile</h2>

  <section class="p-6 rounded-lg bg-sky-200/60">
    <p v-if="pending">Loading user...</p>

    <p v-else-if="error">Faile to load user</p>

    <section v-else>
      <h3 class="text-lg font-medium">{{ user?.name }}</h3>

      <article class="flex justify-between font-medium mt-8">
        <strong class="bg-blue-600 text-white w-full p-2">ID</strong>

        <span class="w-full bg-white p-2">
          {{ user?.id }}
        </span>
      </article>

      <article class="flex justify-between font-medium mt-2">
        <strong class="bg-blue-600 text-white w-full p-2">Role</strong>

        <span class="w-full bg-white p-2">
          {{ user?.role }}
        </span>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();

const userId = computed(() => {
  return route.params.id as string;
});

const { user, pending, error } = useSingleUser(userId.value);
</script>
