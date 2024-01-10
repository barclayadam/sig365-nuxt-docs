<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

definePageMeta({
  layout: 'docs'
})

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description
})
</script>

<template>
  <div>
    {{ page.hero.title }}

    <div v-for="(item, index) of page.features.items" :key="index">
      {{ item.title }}
    </div>
  </div>
</template>
