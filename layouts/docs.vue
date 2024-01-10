<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation')
</script>

<template>
  <div>
    <div class="column column--sm-4">
      <div class="side-nav">
        <div class="sidenav sidenav--accordion">
          <ul class="sidenav-categories">
            <li v-for="(item, idx) in navigation" :key="idx" class="sidenav-category is-active">
              <span class="sidenav-category__link js-sidenav-category-link">{{ item.title }}</span>

              <ul class="sidenav-sections">
                <li v-for="(child, cidx) in item.children" :key="cidx" class="sidenav-article">
                  <NuxtLink class="sidenav-article__link js-sidenav-article-link" :href="child._path">
                    {{ child.title }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <a class="btn btn-default sidebar-toggle js-sidebar-toggle" href="#"><i class="fa fa-bars" aria-hidden="true"></i> Open navigation</a>
    </div>

    <div class="column column--sm-8">
      <slot />
    </div>
  </div>
</template>
