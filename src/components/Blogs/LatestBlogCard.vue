<script setup>
const { postContent } = defineProps({
  postContent: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <div class="bg-white-0">
    <div class="relative mb-5 h-80 overflow-hidden rounded-t">
      <img class="h-full w-full object-top object-cover transition-all duration-300 hover:scale-110" :src="postContent.featured_image" :alt="postContent.title">
    </div>
    <div>
      <div class="flex items-center justify-between gap-4">
        <h2 class="font-semibold text-black-0 font-poppins">Author: {{ postContent.author }}</h2>
        <p class="font-semibold text-black-0 opacity-80">{{ postContent.date }}</p>
      </div>
      <h1 class="font-bold text-black-0 text-2xl mt-3 transition-all duration-300 hover:opacity-70">
        <RouterLink :to="`/post/${postContent.id}`">{{ postContent.title }}</RouterLink>
      </h1>
    </div>
  </div>
</template>