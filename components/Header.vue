<script setup>
const { t, tm, rt } = useI18n();

const allLinks = [
  {
    label: "header.nav.home.label",
    href: "header.nav.home.to",
    cta: "header.nav.home.cta",
  },
  {
    label: "header.nav.blog.label",
    href: "header.nav.blog.to",
    cta: "header.nav.blog.cta",
  },
];

const navEntries = Object.values(tm("header.nav")).filter((i) => !i.cta);
const ctaEntries = Object.values(tm("header.nav")).filter((i) => i.cta);
</script>

<template>
  <header class="bg-white shadow-md">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold text-gray-800">
        {{ t("header.siteName") }}
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8">
        <NuxtLinkLocale to="/">{{ $t("header.home") }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/blog">{{ $t("header.blog") }}</NuxtLinkLocale>
      </nav>

      <!-- Burger Menu (mobile) -->
      <button class="md:hidden text-gray-700 hover:text-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </header>
</template>
