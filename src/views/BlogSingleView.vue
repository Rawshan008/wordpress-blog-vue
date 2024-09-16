<script setup>
import { usePosts } from '@/composables/usePosts';
import BlogSingle from '@/components/BlogSingle.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

const { posts, error, loading, fetchPosts } = usePosts();

const post = computed(() => posts.value[0] || null);

onMounted(() => {
  const postId = parseInt(route.params.id);
  fetchPosts(postId, null);
});



</script>

<template>
  <BlogSingle :post="post" :error="error" :loading="loading"/>
</template>