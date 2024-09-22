<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  buttonLink: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="props.buttonLink" class="font-poppins font-medium inline-block py-3 px-5 rounded-sm bg-black-0 text-white-0 mt-10 transition-all duration-300 hover:bg-gloden-0 hover:text-black-0">{{ props.buttonText }}</RouterLink>
</template>