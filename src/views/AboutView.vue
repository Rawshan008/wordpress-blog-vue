<script setup>
import PageTitle from '@/components/Base/PageTitle.vue';
import LatestBlogCard from '@/components/Blogs/LatestBlogCard.vue';
import { usePage } from '@/composables/usePage';
import { usePosts } from '@/composables/usePosts';
import { onMounted, ref } from 'vue';

const title = ref('About Us');
const { page, pageLoading, pageError, fetchPage } = usePage();
onMounted(() => {
  fetchPage('about-page');
});

const { posts, loading, error, fetchPosts } = usePosts();

onMounted(() => {
  fetchPosts(3);
});

</script>

<template>
  <PageTitle :title="single.title" :image="single.featured_image" v-for="(single, index) in page" :key="index" />

  <div class="py-16" v-for="(singlePage, index) in page" :key="index">
    <div class="container">
      <div class="w-9/12 mx-auto text-center">
        <div class="content-wrapper" v-html="singlePage.content"></div>
      </div>
    </div>
  </div>
  <div class="py-20">
    <div class="container">
      <div class="grid grid-cols-3 gap-8">
        <LatestBlogCard v-for="(post, index) in posts" :postContent="post" :key="index"/>
      </div>
    </div>
  </div>
</template>