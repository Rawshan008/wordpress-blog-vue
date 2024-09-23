<script setup>
import PageTitle from '@/components/Base/PageTitle.vue';
import LatestBlogCard from '@/components/Blogs/LatestBlogCard.vue';
import { usePostsFilter } from '@/composables/usePostsFilter';
import { onMounted, ref, watch } from 'vue';

const title = ref('Blog');

const {
  posts,
  perPage,
  categories,
  currentPage,
  totalPage,
  selectCategory,
  isLoading,
  error,
  fetchPosts,
  fetchCategory
} = usePostsFilter();

onMounted(() => {
  fetchPosts();
  fetchCategory()
});

console.log(posts.length)

const loadMore = () => {
  if (totalPage.value > 0 && totalPage.value === perPage.value) {
    currentPage.value++;
    fetchPosts();
  }
};

const onCategorySelect = (categoryId) => {
  selectCategory.value = categoryId;
  fetchPosts(true);
}



</script>
<template>
  <PageTitle :title="title" image=""/>

  <div class="py-28">
    <div class="container">
      <div class="flex items-center gap-5 mb-10">
        <button
        :class="['filter-item font-roboto font-semibold uppercase text-xl py-2 px-4 rounded-sm', selectCategory === null ? 'active' : '']"
        @click="onCategorySelect(null)"
      >ALL</button>
        <button
        v-for="category in categories"
        :key="category.id"
        :class="['filter-item font-roboto font-semibold uppercase text-xl py-2 px-4', selectCategory === category.id ? 'active' : '']"
        @click="onCategorySelect(category.id)"
      >
        {{ category.name }}
      </button>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <LatestBlogCard v-for="(post, index) in posts" :key="index" :postContent="post"/>
      </div>
      <div class="mt-9" v-if="totalPage > 0 && totalPage === perPage">
        <button @click="loadMore" :disabled="isLoading" class="font-semibold uppercase font-poppins bg-black-0 text-white-0 py-3 px-7 rounded-sm">Load More</button>
        <div v-if="isLoading" class="loading-spinner">Loading...</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  @apply bg-gloden-0 ;
}

.loading-spinner {
  font-size: 16px;
  color: #888;
  text-align: center;
}
</style>