<script setup lang="ts">
import Header from "~/components/Header.vue";
import CtaSection from "~/components/CtaSection.vue";

const { t } = useI18n();
useHead({
  title: () => t("metadata.title"),
  meta: [
    {
      name: "description",
      content: () => t("metadata.description"),
    },
  ],
});
</script>

<template>
  <Header />
  <p>{{ t("welcome") }}</p>
  <NuxtImg src="/images/logo.png" alt="Description de l'image" width="200" />
  <img width="200" src="/logo.png" />

  <CtaSection
    :title="t('cta.title')"
    :description="t('cta.description')"
    :textButton="t('cta.text_button')"
    link="/blog"
  />
</template>
