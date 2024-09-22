<script setup>
const {title, content} = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="w-full lg:max-w-4xl mx-auto text-center mb-12">
      <h2 class="font-roboto text-black-0 text-3xl font-bold mb-4">{{ title }}</h2>
      <p class="text-xl">{{ content }}</p>
    </div>
</template>