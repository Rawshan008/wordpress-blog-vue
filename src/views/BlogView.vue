<script setup>
import PageTitle from '@/components/Base/PageTitle.vue';
import LatestBlogCard from '@/components/Blogs/LatestBlogCard.vue';
import { ref } from 'vue';

const title = ref('Blog');

</script>
<template>
  <PageTitle :title="title"/>

  <div class="py-28">
    <div class="container">
      <div class="flex items-center gap-5 mb-10">
        <a href="" class="font-roboto font-semibold uppercase text-xl py-2 px-4 bg-gloden-0 rounded-sm">All</a>
        <a href="" class="font-roboto font-semibold uppercase text-xl py-2 px-4">One</a>
        <a href="" class="font-roboto font-semibold uppercase text-xl py-2 px-4">Two</a>
        <a href="" class="font-roboto font-semibold uppercase text-xl py-2 px-4">Three</a>
        <a href="" class="font-roboto font-semibold uppercase text-xl py-2 px-4">Four</a>
        <a href="" class="font-roboto font-semibold uppercase text-xl py-2 px-4">Five</a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <LatestBlogCard/>
        <LatestBlogCard/>
        <LatestBlogCard/>
        <LatestBlogCard/>
        <LatestBlogCard/>
        <LatestBlogCard/>
        <LatestBlogCard/>
        <LatestBlogCard/>
        <LatestBlogCard/>
        <LatestBlogCard/>
        <LatestBlogCard/>
      </div>
      <div class="mt-9">
        <button class="font-semibold uppercase font-poppins bg-black-0 text-white-0 py-3 px-7 rounded-sm">Load More</button>
      </div>
    </div>
  </div>
</template>