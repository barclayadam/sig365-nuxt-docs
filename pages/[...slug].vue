<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

definePageMeta({
  layout: 'docs'
})

const route = useRoute()
const { toc, seo } = useAppConfig()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent()
  .where({ _extension: 'md', navigation: { $ne: false } })
  .only(['title', 'description', '_path'])
  .findSurround(withoutTrailingSlash(route.path))
)

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  title: page.value.title,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description
})

const headline = computed(() => 'Headline 1') // findPageHeadline(page.value))

const links = computed(() => [toc?.bottom?.edit && {
  icon: 'i-heroicons-pencil-square',
  label: 'Edit this page',
  to: `${toc.bottom.edit}/${page?.value?._file}`,
  target: '_blank',
}, ...(toc?.bottom?.links || [])].filter(Boolean))
</script>

<template>
  <div>
    <article class="article clearfix" itemscope="" itemtype="http://schema.org/Article">
      <header class="article-header">
        <h1 class="article__title" itemprop="name">
          {{ page.title }}
        </h1>
      </header>

      <div class="article__body markdown" itemprop="articleBody">
        <ContentRenderer v-if="page.body" :value="page" />
      </div>

      <div class="article-meta">
<!--        <div class="article-meta__col article-meta__col&#45;&#45;main">-->
<!--          <div class="entry-info">-->
<!--            <div class="entry-info__content">-->
<!--              <div class="meta">Modified on: 17 Nov 2021</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

        <div v-if="surround[0]">Previous: <NuxtLink :to="surround[0]._path">{{surround[0].title}}</NuxtLink></div>
        <div v-if="surround[1]">Next: <NuxtLink :to="surround[1]._path">{{surround[1].title}}</NuxtLink></div>
      </div>
    </article>

<!--    <UPageHeader :title="page.title" :description="page.description" :links="page.links" :headline="headline" />-->

<!--    <UPageBody prose>-->
<!--      <ContentRenderer v-if="page.body" :value="page" />-->

<!--      <hr v-if="surround?.length">-->

<!--      <UDocsSurround :surround="surround" />-->
<!--    </UPageBody>-->

<!--    <template v-if="page.toc !== false" #right>-->
<!--      <UDocsToc :title="toc?.title" :links="page.body?.toc?.links">-->
<!--        <template v-if="toc?.bottom" #bottom>-->
<!--          <div class="hidden lg:block space-y-6" :class="{ '!mt-6': page.body?.toc?.links?.length }">-->
<!--            <UDivider v-if="page.body?.toc?.links?.length" type="dashed" />-->

<!--            <UPageLinks :title="toc.bottom.title" :links="links" />-->
<!--          </div>-->
<!--        </template>-->
<!--      </UDocsToc>-->
<!--    </template>-->
  </div>
</template>
