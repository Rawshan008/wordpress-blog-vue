<script setup>
import BlogSingle from '@/components/BlogSingle.vue';
import PageTitle from '@/components/Base/PageTitle.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useSinglePosts } from '@/composables/useSinglePosts';
import { useFeaturePosts } from '@/composables/useFeaturePosts';

const route = useRoute();

const { post, error, loading, fetchSinglePosts } = useSinglePosts();
const { fposts, floading, ferror, fetchFeaturePosts } = useFeaturePosts();

onMounted(async () => {
  const postId = parseInt(route.params.id);
  fetchSinglePosts(postId);

  fetchFeaturePosts(4);
});

</script>

<template>
  <PageTitle v-for="(single, index) in post" :title="single.title" :image="single.featured_image" :key="index"/>
  <BlogSingle v-for="(single, index) in post" :post="single" :error="error" :loading="loading" :key="index"/>
</template>