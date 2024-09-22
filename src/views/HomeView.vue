<script setup>
import SectionTitle from '@/components/Base/SectionTitle.vue';
import LatestBlogCard from '@/components/Blogs/LatestBlogCard.vue';
import EditorChoiceBlog from '@/components/EditorChoiceBlog .vue';
import FeatureBlog from '@/components/FeatureBlog.vue';
import FeatureBlogSlider from '@/components/FeatureBlogSlider.vue';
import Button from '@/components/Base/Button.vue';

import { usePosts } from '@/composables/usePosts';
import { onBeforeMount, onMounted } from 'vue';
import AboutSidebar from '@/components/Base/AboutSidebar.vue';
import SidebarFeatureBlog from '@/components/Blogs/SidebarFeatureBlog.vue';
import { useHomePosts } from '@/composables/useHomePosts';
import { useFeaturePosts } from '@/composables/useFeaturePosts';

const props = defineProps({
  perPage: {
    type: Number,
    default: -1,
  }
});

const homeSliderUrl = `${import.meta.env.VITE_API_BASE_URL}/homepage?sliders`;
const editorChoiceUrl = `${import.meta.env.VITE_API_BASE_URL}/homepage?editorChoice`;

const {posts:homeSliders, error:homeSliderError, fetchHomePosts:homeSliderFetch} = useHomePosts(homeSliderUrl);
const { posts: editorChoice, error: editorChoiceError, fetchHomePosts: editorChoiceFetch } = useHomePosts(editorChoiceUrl);
const { posts, loading, error, fetchPosts } = usePosts();
const { fposts, floading, ferror, fetchFeaturePosts } = useFeaturePosts();

onMounted(() => {
  homeSliderFetch();
  editorChoiceFetch();
  fetchPosts(4);
  fetchFeaturePosts(4)
});

</script>

<template>
  <FeatureBlogSlider :sliders="homeSliders" :sliderError="homeSliderError"/>
  <EditorChoiceBlog :editorChoice="editorChoice" :editorError="editorChoiceError"/>

   <div class="pt-10 pb-20">
    <div class="container">
    <SectionTitle title="Out Latest Blog" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus."/>
    <div class="grid grid-col-1 md:grid-cols-3 gap-8">
      <div class="col-span-2">
        <div class="grid grid-col-1 lg:grid-cols-2 gap-8">
          <LatestBlogCard v-for="(post, index) in posts" :postContent="post" :key="index"/>
        </div>
        <Button buttonLink="/blog" buttonText="Read More"/>
      </div>
      <div class="col-span-1 gap-8">
        <AboutSidebar/>
        <div class="h-8"></div>
        <SidebarFeatureBlog :fposts="fposts" :floading="floading" :ferror="ferror"/>
      </div>
    </div>
   </div>
   </div>

</template>