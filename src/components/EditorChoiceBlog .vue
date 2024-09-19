<script setup>
import SectionTitle from './Base/SectionTitle.vue';
import BlogGridCard from './Blogs/BlogGridCard.vue';


</script>

<template>
  <div class="bg-white-0 py-20">
    <div class="container">
      <SectionTitle/>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BlogGridCard/>
        <BlogGridCard/>
        <BlogGridCard/>
      </div>
    </div>
  </div>
</template>