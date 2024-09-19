<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String
})
</script>

<template>
  <div class="py-28 bg-black-0 bg-cover bg-repeat bg-center relative z-10 before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-black-0 before:-z-10 before:opacity-60" style="background-image: url('https://images.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');">
    <div class="container">
      <h2 class="text-center text-white-0 font-roboto font-bold text-6xl uppercase">{{ title }}</h2>
    </div>
  </div>
</template>