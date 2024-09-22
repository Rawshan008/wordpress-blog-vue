<script setup>
const { title, image } = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="py-28 bg-black-0 bg-cover bg-repeat bg-center relative z-10 before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-black-0 before:-z-10 before:opacity-60" :style="{ 'background-image': 'url(' + image + ')' }">
    <div class="container">
      <h2 class="text-center text-white-0 font-roboto font-bold text-6xl uppercase">{{ title }}</h2>
    </div>
  </div>
</template>