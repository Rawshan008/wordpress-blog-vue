<script setup>
import SectionTitle from './Base/SectionTitle.vue';
import BlogGridCard from './Blogs/BlogGridCard.vue';

const {editorChoice, editorError} = defineProps({
  editorChoice: {
    type: Object,
    required: true,
  },
  editorError: {
    type: [String, null],
    required: true
  }
});


</script>

<template>
  <div class="bg-white-0 py-20">
    <div class="container">
      <SectionTitle :title="editorChoice.title" :content="editorChoice.content"/>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-if="editorError">No Post Selected</div>
        <BlogGridCard v-else v-for="(post, index) in editorChoice.posts" :key="index" :postData="post" />
      </div>
    </div>
  </div>
</template>