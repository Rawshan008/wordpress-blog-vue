<script setup>
import FeatureBlog from '@/components/FeatureBlog.vue';
import FeatureBlogSlider from '@/components/FeatureBlogSlider.vue';

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
  <FeatureBlogSlider/>
  <FeatureBlog :posts="posts" :error="error" :loading="loading"/>
</template>