<script setup>
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Button from './Base/Button.vue';
import { onMounted, ref } from 'vue';

const buttonTest = ref('Read More');

const props = defineProps({
  sliders: {
    type: Array,
    required: true,
  },
  sliderError: {
    type: [String, null],
    required: true,
  },
});

onMounted(() => {
  const swiper = new Swiper('.homeSlider', {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})

</script>

<template>

  <div v-if="props.sliderError">No Post Selected</div>
  <div class="swiper homeSlider">
    <div class="swiper-wrapper">

      <div class="swiper-slide" v-for="(slide, index) in props.sliders" :key="index">
        <div class="h-[700px] flex items-center bg-cover bg-center bg-no-repeat bg-black-0 relative z-10 before:w-full before:bg-black-0 before:h-full before:top-0 before:left-0 before:absolute before:opacity-40 before:-z-10" :style="{ 'background-image': 'url(' + slide.featured_image + ')' }">
          <div class="container">
            <div class="w-full xl:w-7/12 lg:w-9/12 mx-auto text-center">
              <div class="flex gap-1 items-center justify-center">
                <p v-for="(cat, index) in slide.category" class="text-base text-black-0 text-center mb-3 py-1 px-3 bg-gloden-0 inline-block rounded-md" :key="index">{{ cat.name }}</p>
              </div>
              <h1 class="text-5xl text-center text-white-0 font-roboto font-bold transition-all duration-300 mb-4 hover:text-gloden-0">
                <RouterLink :to="`/post/${slide.id}`">{{ slide.title }}</RouterLink>
              </h1>
              <p class="text-base text-white-0 text-center">{{ slide.excerpt }}</p>
              <Button :buttonText="buttonTest" :buttonLink="`/post/${slide.id}`" />
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>