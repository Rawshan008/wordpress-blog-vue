<script setup>
const {postData} = defineProps({
  postData: {
    type: Array,
    required: true,
  }
});

</script>

<template>
  <div class="bg-white-0">
      <div class="relative overflow-hidden h-60">
        <img class=" transition-all duration-500 hover:scale-110 h-full w-full object-top object-cover" :src="postData.featured_image" :alt="postData.title">
        <div v-if="postData.category" class="flex gap-1 items-center justify-center absolute top-1 right-1">
          <p v-for="(cat, index) in postData.category" class="text-base text-black-0 text-center mb-3 py-1 px-3 bg-gloden-0 inline-block rounded-md" :key="index">{{ cat.name }}</p>
        </div>
      </div>
      <div class="p-5 shadow-md rounded-b">
        <h1 class="text-2xl font-roboto font-semibold text-black-0 mb-3 hover:opacity-70 transition-all duration-300">
          <RouterLink :to="`/post/${postData.id}`">{{ postData.title }}</RouterLink>
      </h1>
      <p class="text-md">{{ postData.excerpt }}</p>
      <RouterLink :to="`/post/${postData.id}`" class="flex items-center gap-2 mt-4 font-semibold transition-opacity hover:opacity-70">
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </RouterLink>
      </div>
    </div>
</template>

<style scoped>
  svg {
    fill: #191919;
  }
</style>