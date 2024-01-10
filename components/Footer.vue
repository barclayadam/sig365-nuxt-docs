<script setup lang="ts">
const {footer} = useAppConfig()
</script>

<template>
  <div>
    {{ footer.credits }}

    <!-- <UColorModeButton v-if="footer?.colorMode" />-->

    <template v-if="footer?.links">
      <a
        v-for="(link, index) of footer?.links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      />
    </template>
  </div>
</template>
