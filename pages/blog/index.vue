<template>
  <Header />

  <section class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="text-center px-6 max-w-2xl">
      <h1 class="text-5xl sm:text-5xl font-bold text-gray-900 mb-4">
        {{ t("hero.title") }}
      </h1>
      <p class="text-lg underline text-gray-700 mb-6">
        {{ t("hero.subtitle") }}
      </p>
      <div class="flex justify-center gap-4">
        <NuxtLink
          to="/blog"
          class="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          {{ t("hero.cta_primary") }}
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="border border-gray-400 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-200 transition"
        >
          {{ t("hero.cta_secondary") }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
