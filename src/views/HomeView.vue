<script setup>
import SectionTitle from '@/components/Base/SectionTitle.vue';
import LatestBlogCard from '@/components/Blogs/LatestBlogCard.vue';
import EditorChoiceBlog from '@/components/EditorChoiceBlog .vue';
import FeatureBlog from '@/components/FeatureBlog.vue';
import FeatureBlogSlider from '@/components/FeatureBlogSlider.vue';
import Button from '@/components/Base/Button.vue';

import { usePosts } from '@/composables/usePosts';
import { onMounted } from 'vue';
import AboutSidebar from '@/components/Base/AboutSidebar.vue';
import SidebarFeatureBlog from '@/components/Blogs/SidebarFeatureBlog.vue';

const props = defineProps({
  perPage: {
    type: Number,
    default: -1,
  }
})

const { posts, error, loading, fetchPosts } = usePosts()

onMounted(() => {
  fetchPosts(null, -1);
});

</script>

<template>
  <FeatureBlogSlider/>
  <!-- <FeatureBlog :posts="posts" :error="error" :loading="loading"/> -->
   <EditorChoiceBlog/>

   <div class="pt-10 pb-20">
    <div class="container">
    <SectionTitle/>
    <div class="grid grid-col-1 md:grid-cols-3 gap-8">
      <div class="col-span-2">
        <div class="grid grid-col-1 lg:grid-cols-2 gap-8">
          <LatestBlogCard/>
          <LatestBlogCard/>
          <LatestBlogCard/>
          <LatestBlogCard/>
        </div>
        <Button/>
      </div>
      <div class="col-span-1 gap-8">
        <AboutSidebar/>
        <div class="h-8"></div>
        <SidebarFeatureBlog/>
      </div>
    </div>
   </div>
   </div>

</template>