<script setup>
import { usePosts } from '@/composables/usePosts';
import { onMounted } from 'vue';

const props = defineProps({
  perPage: {
    type: Number,
    default: -1,
  }
})

const { posts, error, loading, fetchPosts } = usePosts();

onMounted(() => {
  fetchPosts(props.perPage=3);
})
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-sans font-extrabold text-gray-900 dark:text-white">Our Lates Blog</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">Please read Out Blog and Rate it</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <div v-if="loading">Loading...</div>
        <div v-if="erro">Something Creating Problem to fetching data</div>
            <div v-for="post in posts" :key="post.id">
              <div class="card bg-base-100 w-96 shadow-xl">
                <figure class="w-full h-[200px] bg-[#ddd]">
                  <img
                  v-if="post.featured_image"
                    class="h-full w-full object-cover"
                    :src="post.featured_image"
                    :alt="post.title" />
                </figure>
                <div class="card-body p-4">
                  <h2 class="text-2xl font-sans font-semibold">{{ post.title }}</h2>
                  <p class="font-sans">{{ post.excerpt }}</p>
                  
                  <div class="card-actions justify-end">
                    <a href="" class="py-2 px-5 inline-block bg-black text-white rounded-md mt-4">Read more</a>
                  </div>
                </div>
              </div>
            </div>
      </div>
  </div>
</section>
</template>