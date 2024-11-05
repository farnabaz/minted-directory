<script setup lang="ts">
const { data } = await useAsyncData('blog', () => {
  return queryCollection('blog')
    .select('path', 'title', 'tags', 'description', 'card_image', 'card_image', 'cover')
    .all()
});
</script>

<template>
  <div class="not-prose grid grid-cols-1 lg:grid-cols-4 gap-4">
    <UiCard v-for="i in data" :item="i" />
  </div>
</template>