<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation')
</script>

<template>
  <div>
    <ul>
      <li v-for="item in navigation" :key="item.title">
        {{ item.title }}

        <ul>
          <li v-for="child in item.children" :key="child.title">
            <NuxtLink :href="child._path">{{ child.title }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>

    <main>
      <slot />
    </main>
  </div>
<!--  <UContainer>-->
<!--    <UPage>-->
<!--      <template #left>-->
<!--        <UAside>-->
<!--          <UNavigationTree :links="mapContentNavigation(navigation)" />-->
<!--        </UAside>-->
<!--      </template>-->

<!--      <slot />-->
<!--    </UPage>-->
<!--  </UContainer>-->
</template>
