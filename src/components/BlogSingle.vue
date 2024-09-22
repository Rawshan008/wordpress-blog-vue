<script setup>
import AboutSidebar from './Base/AboutSidebar.vue';
import SidebarFeatureBlog from './Blogs/SidebarFeatureBlog.vue';
const {post, error, loading} = defineProps({
  post: {
    type: Array,
    require: true
  },
  error: {
    type: Boolean,
  },
  loading: {
    type: Boolean
  }
})


</script>
<template>
<div class="py-20">
  <div class="container">
    <p v-if="loading">Loading</p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="col-span-2">
        <h3>{{ post.title }}</h3>
        <div v-html="post.content"></div>
      </div>
      <div class="col-span-1">
        <AboutSidebar/>
        <div class="h-8"></div>
        <SidebarFeatureBlog/>
      </div>
    </div>  
  </div>
</div> 
</template>

<style scoped>
  h3 {
    @apply font-semibold text-2xl mb-5 font-poppins;
  }
  p {
    @apply font-poppins mb-5;
  }

  img {
    @apply max-w-full h-auto mb-5 ;
  }
</style>