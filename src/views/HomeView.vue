<script setup>
import FeatureBlog from '@/components/FeatureBlog.vue';
import Hero from '@/components/Hero.vue';

import { usePosts } from '@/composables/usePosts';
import { onMounted } from 'vue';

const props = defineProps({
  perPage: {
    type: Number,
    default: -1,
  }
})

const { posts, error, loading, fetchPosts } = usePosts()

onMounted(() => {
  fetchPosts(null, -1);
});

</script>

<template>
  <Hero/>
  <FeatureBlog :posts="posts" :error="error" :loading="loading"/>
</template>