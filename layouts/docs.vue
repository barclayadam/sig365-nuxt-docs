<script setup lang="ts">
import type {NavItem} from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation')

const route = useRoute()

// const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
//
// const breadcrumbs = []
// const pagePathExploded = page.value._path.split('/')
//
// let tmpPagePath = ''
//
// for (const pagePathItem of pagePathExploded) {
//   if (pagePathItem === '') continue
//
//   tmpPagePath += `/${pagePathItem}`
//
//   breadcrumbs.push(await queryContent(tmpPagePath).only(['title', '_path']).findOne())
// }
</script>

<template>
  <main class="layout__content">
    <div class="bt-container">
      <div class="bt-container-inner">
        <div class="article-page">
          <div class="row clearfix">
            <div class="column column--sm-8">
              <ol class="breadcrumbs">
                <li>
                  <a href="/">Home</a>
                </li>
                <li title="Solution home">
                  <a href="/">Solution home</a>
                </li>
              </ol>
            </div>

            <div class="column column--sm-4">
              <div class="search-box search-box--small">
                <form class="hc-search-form print--remove" autocomplete="off" action="/support/search/solutions"
                      id="hc-search-form" data-csrf-ignore="true">
                  <div class="hc-search-input">
                    <label for="support-search-input" class="hide">Enter your search term here...</label>
                    <input placeholder="Enter your search term here..." type="text" name="term"
                           class="special ui-autocomplete-input" value="" rel="page-search" data-max-matches="10"
                           id="support-search-input" autocomplete="off">
                  </div>
                  <div class="hc-search-button">
                    <button class="btn btn-primary" aria-label="Search" type="submit" autocomplete="off">
                      <i class="mobile-icon-search hide-tablet"></i>
                      <span class="hide-in-mobile">Search</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="row clearfix">
            <div class="column column--sm-4">
              <div class="side-nav">
                <div class="sidenav sidenav--accordion">
                  <ul class="sidenav-categories">
                    <li v-for="(item, idx) in navigation" :key="idx" class="sidenav-category is-active">
                      <span class="sidenav-category__link js-sidenav-category-link">{{ item.title }}</span>

                      <ul class="sidenav-sections">
                        <li v-for="(child, cidx) in item.children" :key="cidx" class="sidenav-section">
                          <span class="sidenav-article__link js-sidenav-article-link">
                            {{ child.title }}
                          </span>

                          <ul class="sidenav-sections">
                            <li v-for="(child2, cidx2) in child.children" :key="cidx2" class="sidenav-article">
                              <NuxtLink class="sidenav-article__link js-sidenav-article-link" :href="child2._path">
                                {{ child2.title }}
                              </NuxtLink>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <a class="btn btn-default sidebar-toggle js-sidebar-toggle" href="#"><i class="fa fa-bars"
                                                                                      aria-hidden="true"></i> Open
                navigation</a>
            </div>

            <div class="column column--sm-8">
              <slot/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
