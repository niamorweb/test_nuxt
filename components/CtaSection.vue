<template>
  <section
    class="bg-blue-600 text-white py-12 px-6 text-center rounded-xl shadow-lg"
  >
    <h2
      v-gsap.whenVisible.from="{
        opacity: 0,
        start: 'top 50%',
        end: 'bottom 50%',
      }"
      class="text-3xl font-bold mb-4"
    >
      {{ title }}
    </h2>
    <p class="text-lg mb-6">{{ description }}</p>
    <NuxtLink
      :to="link"
      class="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
    >
      {{ textButton }}
    </NuxtLink>
    <div class="h-[250vh] w-full bg-blue-400"></div>
    <h2
      v-gsap.whenVisible.from="{
        opacity: 0,
        start: 'top 50%',
        end: 'bottom 50%',
      }"
      class="text-3xl font-bold mb-4"
    >
      {{ title }}
    </h2>
    <div class="h-[250vh] w-full bg-blue-400"></div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  textButton: string;
  link?: string;
}>();
</script>
