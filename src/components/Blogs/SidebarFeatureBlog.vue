<script setup>
const {fposts, floading, ferror} = defineProps({
  fposts: {
    type: Array,
    required: true,
  },
  floading: {
    type: Boolean,
    required: true,
  },
  ferror: {
    type: [String, null],
    required: true,
  }
});

</script>

<template>
  <div class="p-10 bg-gloden-0 rounded-xl">
    <h3 class="text-3xl font-roboto font-bold uppercase mb-4">Feature Posts</h3>
    <div class="h-[1px] w-full bg-black-0 mb-8"></div>
    <div v-if="floading">Loading...</div>
    <div v-if="ferror">{{ ferror }}</div>
    <div class="grid grid-cols-1 gap-8" v-if="!floading && !ferror && fposts.length > 0" >
      <!-- single Sidebar  -->
      <div class="single-feature-sidebar relative flex gap-4 items-center" v-for="(post, index) in fposts" :key="index">
        <div class="flex-none w-1/4 h-auto">
          <img class="w-full h-full object-cover aspect-square rounded-lg" :src="post.featured_image" :alt="post">
        </div>
        <div class="grid-col-span-3">
          <p class="font-semibold opacity-80 mb-2 text-sm">{{ post.date }}</p>
          <h4 class="font-roboto font-semibold text-md">
            <RouterLink :to="`post/${post.id}`">{{ post.title }}</RouterLink>
          </h4>
        </div>
      </div>
      <!-- single Sidebar  -->
    </div>
  </div>
</template>